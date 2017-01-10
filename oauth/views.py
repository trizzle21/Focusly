from wakeNshake.settings import SPOTIFY_SECRETS, CALENDAR_SECRETS
from django.shortcuts import render, HttpResponse, redirect
from django.views.decorators.csrf import csrf_protect
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
import oauth2client.client as oauthClient
from models import customUser
from models import UserForm
from spotipy import oauth2
from Crypto.Cipher import AES
from Crypto import Random
import json
import os

# Util Functions
class CryptoEngine:	# Don't know where is best to include this

	def __init__(self, key=b'Sixteen byte key'):
		self.key = key	# TODO: key generation/storage
		self.iv = Random.new().read(AES.block_size)
		self.cipher = AES.new(self.key, AES.MODE_CFB, self.iv)

	def decrypt_cred(self, encryptedCred):
		return self.cipher.decrypt(encryptedCred.decode("hex"))[len(self.iv):]
			
	def encrypt_cred(self, unencryptedCred):
		self.msg = self.iv + self.cipher.encrypt(unencryptedCred)
		return self.msg.encode("hex")

def save_cred_to_db(userName, client, credentials):
	ce = CryptoEngine()
	encryptedCreds = ce.encrypt_cred(credentials)

	if client == 'spotify_cred':
		print "Saved encrypted Spotify cred: {0}".format(encryptedCreds) 	# DEBUG
		cust = customUser.objects.get(user_name = userName)
		cust.spotify_cred = encryptedCreds
		cust.save()

	elif client == 'calendar_cred':
		print "Saved encrypted Calendar cred: {0}".format(encryptedCreds) 	# DEBUG
		cust = customUser.objects.create(user_name = userName, calendar_cred = encryptedCreds)
		cust.save()

	else:
		print "No {0} client available".format(client)
		return None

	return encryptedCreds	# Solution for now, while DB is up and running


@csrf_protect
def oauth2callback_spotify(request):
	spotifySecrets = json.load( open(SPOTIFY_SECRETS) )

	try:
		flow = oauth2.SpotifyOAuth(
			client_id = spotifySecrets['web']['client_id'], 
			client_secret = spotifySecrets['web']['client_secret'], 
			redirect_uri = spotifySecrets['web']['redirect_uris'][0], 
			scope = spotifySecrets['web']['scope']
		)
	except:
		msg = 'There is an error with your spotify API tokens! Please review the credentials.'
		print msg	#DEBUG

	if request.GET.get('code', '') is '':
		authUri = flow.get_authorize_url()
		return redirect(authUri)

	else:
		authCode = request.GET.get('code', '')
		credentials = flow.get_access_token(authCode)
		# update user entry in db
		encryptedCreds = save_cred_to_db('Jorge Rojas', 'spotify_cred', json.dumps(credentials))
	
	return redirect('spotify_login')





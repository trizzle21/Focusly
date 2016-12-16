from django.shortcuts import render, HttpResponse
from oauth2client.client import OAuth2Credentials
from apiclient.discovery import build
from oauth.models import customUser
from spotipy import client

from Crypto.Cipher import AES
from Crypto import Random
import httplib2
import datetime
import json
import os

# Utils
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

def get_cred(userName, clientName):
	ce = CryptoEngine()
	curr_user = customUser.objects.get(user_name = userName)
	if clientName == 'spotify_cred':
		clientCred = json.loads( ce.decrypt_cred(curr_user.spotify_cred) )
		# print type(clientCred) 	# DEBUG
		return clientCred['access_token']

# Create your views here.
def homeview(request):
	return render(request, "home.html")

def spotify_login(request):
	# client = {"client_id": 'spotify'}
	return render(request, "spotify_login.html")





def dashboard(request):
	# Spotify Requests #
	try:
		spotifyCred = get_cred('Tyler Ross', 'spotify_cred')
		# print spotifyCred 	# DEBUG
		spotifyClient = client.Spotify( auth = spotifyCred )
		playlists = spotifyClient.user_playlists( user = '1248308979')	# spotify:user:122632253
		credentialed = True
		currenttime = datetime.datetime.now()
		context = {'playlists': playlists['items'], 'now':currenttime, 'crendentialed':credentialed}
	except:
		credentialed = False
		currenttime = datetime.datetime.now()
		context = {'now':currenttime, 'crendentialed':credentialed}

	# print playlists 	# DEBUG
	return render(request, "dashboard.html", context)

var express = require('express')
var request = require('request');
var cookieParser = require('cookie-parser');
var querystring = require('querystring');
var path = require('path');

const clientData = require('./ClientSecrets');// client id



var app = express()



app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.static('client'))


var generate_random = function(length){
	var ran_text = '';
	var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for(i=0; i < length; i++) {
		ran_text += possible.charAt(Math.floor(Math.random()* possible.length));
	}
	return ran_text;
}

var stateKey = 'spotify_auth_state';

app.get('/', function (req, res) {
  res.render('index')

})



app.get('/login', function (req, res) {
	var state = generate_random(16);
	res.cookie(stateKey, state);
  var scope = 'user-read-private user-read-email';
	res.redirect('https://accounts.spotify.com/authorize?' +
		querystring.stringify({
			response_type: 'code',
			client_id: clientData.client_id,
			scope: scope,
			redirect_uri: clientData.redirect_uri,
			state: state
		})
	);	


})


app.get('/callback', function(req, res) {
	  var code = req.query.code || null;
  	var state = req.query.state || null;
  	var storedState = req.cookies ? req.cookies[stateKey] : null;
  	if (state === null || state !== storedState) {
  		res.redirect('/#/error/state mismatch')
  	} else {
  		res.clearCookie(stateKey);
  		var authOptions = {
  			url: 'https://accounts.spotify.com/api/token',
  			form: {
  				code: code,
  				redirect_uri: clientData.redirect_uri,
  				grant_type: 'authorization_code',
  			},
  			headers: {
  				'Authorization': 'Basic ' + (new Buffer(clientData.client_id + ':' + clientData.client_secret).toString('base64'))
  			},
  			json: true
  		};
  	
  	request.post(authOptions, function(error, response, body) {
  		if(!error && response.statusCode === 200){

  			var access_token = body.access_token, 
  				refresh_token = body.refresh_token;

  			var options = {
  				url: 'https://api.spotify.com/v1/me',
  				headers: {'Authorization' : 'Bearer ' + access_token},
  				json: true,
  			};

  			res.get(options, function(error, response, body){
  				console.log(body);
  			});
  			
  			res.redirect('/#/' + 
  				querystring.stringify({
  					access_token: access_token,
  					refresh_token: refresh_token,
  			}));


  		} else {
  			res.redirect('/#/' + 
  				querystring.stringify({
  					error: 'invalid token'
  				}));
  		}
	});
  		
  	}
  		
});




app.listen(3000, function () {
  console.log('Focusly app listening on port 3000!')
})

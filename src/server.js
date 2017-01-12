var express = require('express')
var app = express()
var cookieParser = require('cookie-parser');
var querystring = require('querystring');



app.set('views', './views')
app.set('view engine', 'pug')
app.use('/static', express.static('static'))

var client_id = 'CLIENT_ID'; // Your client id
var client_secret = 'CLIENT_SECRET'; // Your secret
var redirect_uri = 'REDIRECT_URI'; // Your redirect uri

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
	
	var state = generateRandomString(16);
	res.cookie(stateKey, state);



  	var scope = 'user-read-private user-read-email';
	res.redirect('https://accounts.spotify.com/authorize?' +
		querystring.stringify({
			response_type: 'code',
			client_id: client_id,
			scope: scope,
			redirect_uri: redirect_uri,
			state: state
		})
	);	


})


app.listen(3000, function () {
  console.log('Other app listening on port 3000!')
})

import Spotify from 'spotify-web-api-js';

const spotifyApi = new Spotify();



//Spotify Login
export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS';
export const SPOTIFY_ME_BEGIN = 'SPOTIFY_ME_BEGIN';
export const SPOTIFY_ME_SUCCESS = 'SPOTIFY_ME_SUCCESS';
export const SPOTIFY_ME_FAILURE = 'SPOTIFY_ME_FAILURE';


export function setTokens({accessToken, refreshToken}) {
	if (accessToken) {
		spotifyApi.setAccessToken(accessToken);
	} 
	return { type: SPOTIFY_TOKENS, accessToken,refreshToken}
}



export function getMyRecommendations(){
	return dispatch=> {
		dispatch({type: SPOTIFY_ME_BEGIN});
		spotifyApi.getRecommendations().then(data => {
			dispatch({type: SPOTIFY_ME_SUCCESS data:data})
		}).catch(e => {
			dispatch({type: SPOTIFY_ME_SUCCESS error:e})
		});
	};
}






//Session Form
export const SLIDER_INCR = 'SLIDER_INCR';
export const SLIDER_DECR = 'SLIDER_DECR';

export const WORK_MUSIC_SELECT = 'WORK_MUSIC_SELECT';
export const REST_MUSIC_SELECT = 'REST_MUSIC_SELECT';








//Timer Set
export const COUNT_SET = 'COUNT_SET';
export const COUNT_DECREMENT ='COUNT_DECREMENT';







const fetchRecommendationGenre = genre => dispatch => {
	dispatch()
	return fetch(
}
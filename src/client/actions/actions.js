import Spotify from 'spotify-web-api-js';

const spotifyApi = new Spotify();



//Spotify Login
export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS';
export const SPOTIFY_REC_BEGIN = 'SPOTIFY_ME_BEGIN';
export const SPOTIFY_REC_SUCCESS = 'SPOTIFY_ME_SUCCESS';
export const SPOTIFY_REC_FAILURE = 'SPOTIFY_ME_FAILURE';

export const SPOTIFY_GENRE_SEED_BEGIN = 'SPOTIFY_ME_BEGIN';
export const SPOTIFY_GENRE_SEED_SUCCESS = 'SPOTIFY_ME_SUCCESS';
export const SPOTIFY_GENRE_SEED_FAILURE = 'SPOTIFY_ME_FAILURE';


export function setTokens({accessToken, refreshToken}) {
	if (accessToken) {
		spotifyApi.setAccessToken(accessToken);
	} 
	return { type: SPOTIFY_TOKENS, accessToken,refreshToken}
}



export function getMyRecommendations(options){
	return dispatch=> {
		dispatch({type: SPOTIFY_REC_BEGIN});
		spotifyApi.getRecommendations(options).then(data => {
			dispatch({type: SPOTIFY_REC_SUCCESS data:data})
		}).catch(e => {
			dispatch({type: SPOTIFY_REC_SUCCESS error:e})
		});
	};
}


export function getAvailableGenreSeeds(){
	return dispatch=> {
		dispatch({type: SPOTIFY_GENRE_SEED_BEGIN});
		spotifyApi.getAvailableGenreSeeds(options).then(data => {
			dispatch({type: SPOTIFY_GENRE_SEED_SUCCESS data:data})
		}).catch(e => {
			dispatch({type: SPOTIFY_GENRE_SEED_SUCCESS error:e})
		});
	};
}


//Builds Actions for me
function makeAction(type,...argNames){
	return function(...args){
		let action = {type}
		argNames.forEach((arg,index) => {
			action.argNames[index] = args[index]
		})
		return action
	}
}


//Session Setup 
export const makeAction('RECOMMENDATION_SET');





//Session Form
export const SLIDER_INCR = 'SLIDER_INCR';
export const SLIDER_DECR = 'SLIDER_DECR';

export const WORK_MUSIC_SELECT = 'WORK_MUSIC_SELECT';
export const REST_MUSIC_SELECT = 'REST_MUSIC_SELECT';





export const workMusicSelect = makeAction('WORK_MUSIC_SELECT', 'musicType' );
export const restMusicSelect = makeAction('REST_MUSIC_SELECT', 'musicType' );




//Timer Data
export const CYCLE_SET = 'CYCLE_SET';
export const SESSION_TYPE_SET = 'SESSION_TYPE_SET';



export const cycleSet = makeAction(CYCLE_SET, data )
export const sessionTypeSet = makeAction(SESSION_TYPE_SET, session_type)



//TODO Add more Session Data



//Timer UI








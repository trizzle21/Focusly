import Spotify from 'spotify-web-api-js';
import * as types from '../constants/ActionTypes';


const spotifyApi = new Spotify();



//Spotify Login


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
export const workMusicSelect = makeAction('WORK_MUSIC_SELECT', 'musicType' );
export const restMusicSelect = makeAction('REST_MUSIC_SELECT', 'musicType' );




//Timer Data


export const cycleSet = makeAction(CYCLE_SET, data );
export const sessionTypeSet = makeAction(SESSION_TYPE_SET, session_type);
export const tick = makeAction(TICK);


//TODO Add more Session Data



//Timer UI








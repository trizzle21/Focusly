//Spotify Actions
import Spotify from 'spotify-web-api-js';
const spotifyApi = new Spotify();

import actionCreator from '../ActionCreator';


//Spotify Login
export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS';
export const SPOTIFY_REC_BEGIN = 'SPOTIFY_ME_BEGIN';
export const SPOTIFY_REC_SUCCESS = 'SPOTIFY_ME_SUCCESS';
export const SPOTIFY_REC_FAILURE = 'SPOTIFY_ME_FAILURE';

export const SPOTIFY_GENRE_SEED_BEGIN = 'SPOTIFY_ME_BEGIN';
export const SPOTIFY_GENRE_SEED_SUCCESS = 'SPOTIFY_ME_SUCCESS';
export const SPOTIFY_GENRE_SEED_FAILURE = 'SPOTIFY_ME_FAILURE';




export function setTokens(accessToken, refreshToken) {
	return { type: SPOTIFY_TOKENS, accessToken:accessToken, refreshToken:refreshToken}
}



export function getMyRecommendations(options){
	return dispatch=> {
		dispatch({type: types.SPOTIFY_REC_BEGIN});
		spotifyApi.getRecommendations(options).then(data => {
			dispatch({type: types.SPOTIFY_REC_SUCCESS, data:data})
		}).catch(e => {
			dispatch({type: types.SPOTIFY_REC_SUCCESS, error:e})
		});
	};
}






export function getAvailableGenreSeeds(){
	return dispatch=> {
		dispatch({type: types.SPOTIFY_GENRE_SEED_BEGIN});
		spotifyApi.getAvailableGenreSeeds(options).then(data => {
			dispatch({type: types.SPOTIFY_GENRE_SEED_SUCCESS, data:data})
		}).catch(e => {
			dispatch({type: types.SPOTIFY_GENRE_SEED_SUCCESS, error:e})
		});
	};
}

//Form Actions
import actionCreator from '../ActionCreator';
import fetch from 'isomorphic-fetch'


export const SLIDER_CHANGE = 'SLIDER_CHANGE';

export const WORK_MUSIC_SELECT = 'WORK_MUSIC_SELECT';
export const REST_MUSIC_SELECT = 'REST_MUSIC_SELECT';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const CLOSE_DIALOG = 'CLOSE_DIALOG';





export const SPOTIFY_USER_BEGIN = "SPOTIFY_USER_BEGIN";
export const SPOTIFY_USER_SUCCESS = "SPOTIFY_USER_SUCCESS";
export const SPOTIFY_USER_ERROR = "SPOTIFY_USER_ERROR";

function SpotifyUserBegin(){ 
    return { type: SPOTIFY_GENRE_SEED_BEGIN };
}
function SpotifyUserSuccess(data)  { 
    return { type: SPOTIFY_USER_SUCCESS, id:data};
}
function SpotifyUserError(e) { 
    return { type: SPOTIFY_USER_ERROR, error:e };
}




export function getUserId(options){
	return (dispatch) => {
	dispatch(SpotifyUserBegin());
	fetch("https://api.spotify.com/v1/me", {
		method:"GET",
		headers: {'Authorization' : 'Bearer ' + options.accessToken}
		})
	.then(data => data.json()).catch(e => {
		dispatch(SpotifyUserError(e))
	})
	.then(json => {
		dispatch(SpotifyUserSuccess(json.id));
	});
	};
};



// export function getRecommendations(options){
// 	return (dispatch) 
// }


// export const sliderChange = actionCreator(SLIDER_CHANGE, 'data');

// export const workMusicSelect = actionCreator(WORK_MUSIC_SELECT, 'newGenre');
// export const restMusicSelect = actionCreator(REST_MUSIC_SELECT, 'newGenre');


export const closeDialog = actionCreator(CLOSE_DIALOG);


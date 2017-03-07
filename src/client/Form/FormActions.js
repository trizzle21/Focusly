//Form Actions
import actionCreator from '../ActionCreator';
import fetch from 'isomorphic-fetch'


export const SLIDER_CHANGE = 'SLIDER_CHANGE';

export const WORK_MUSIC_SELECT = 'WORK_MUSIC_SELECT';
export const REST_MUSIC_SELECT = 'REST_MUSIC_SELECT';
export const SUBMIT_FORM = 'SUBMIT_FORM';




export const CLOSE_DIALOG = 'CLOSE_DIALOG';

export const SPOTIFY_GENRE_SEED_BEGIN = "SPOTIFY_GENRE_SEED_BEGIN";
export const SPOTIFY_GENRE_SEED_SUCCESS = "SPOTIFY_GENRE_SEED_SUCCESS";
export const SPOTIFY_GENRE_SEED_ERROR = "SPOTIFY_GENRE_SEED_ERROR";

function SpotifyGenreSeedBegin(){ 
    return { type: SPOTIFY_GENRE_SEED_BEGIN };
}
function SpotifyGenreSeedSuccess(data)  { 
    return { type: SPOTIFY_GENRE_SEED_SUCCESS, data:data};
}
function SpotifyGenreSeedError(e) { 
    return { type: SPOTIFY_GENRE_SEED_ERROR, error:e };
}



export function getCategories(options){
	return (dispatch) => {
		dispatch(SpotifyGenreSeedBegin());
		fetch("https://api.spotify.com/v1/me/playlists", {
			method:"GET",
			headers: {'Authorization' : 'Bearer ' + options.accessToken}
			})
		.then(data => data.json()).catch(e => {
			dispatch({type: "SPOTIFY_GENRE_SEED_ERROR", error:e})
		})
		.then(json => {
			dispatch({type: "SPOTIFY_GENRE_SEED_SUCCESS", data: json});
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


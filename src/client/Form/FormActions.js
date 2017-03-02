//Form Actions
import actionCreator from '../ActionCreator';


const SLIDER_CHANGE = 'SLIDER_CHANGE';

const WORK_MUSIC_SELECT = 'WORK_MUSIC_SELECT';
const REST_MUSIC_SELECT = 'REST_MUSIC_SELECT';


const SUBMIT_SESSION = 'SUBMIT_SESSION';
const CLOSE_DIALOG = 'CLOSE_DIALOG';

const SPOTIFY_GENRE_SEED_BEGIN = "SPOTIFY_GENRE_SEED_BEGIN";
const SPOTIFY_GENRE_SEED_SUCCESS = "SPOTIFY_GENRE_SEED_SUCCESS";
const SPOTIFY_GENRE_SEED_ERROR = "SPOTIFY_GENRE_SEED_ERROR";



export function getCategories(options){
	var request = { method:"GET",
					header: {'Authorization': 'Bearer ' + options.accessToken},
					}
	return dispatch => {
		dispatch({type: "SPOTIFY_GENRE_SEED_BEGIN"});
		fetch("https://api.spotify.com/v1/browse/categories", request).then(data => data.json())
		.then(json => {
			dispatch({type: "SPOTIFY_GENRE_SEED_SUCCESS", data:data})
		}).catch(e => {
			dispatch({type: "SPOTIFY_GENRE_SEED_ERROR", error:e})
		});
	};
};



// export const sliderChange = actionCreator(SLIDER_CHANGE, 'data');

// export const workMusicSelect = actionCreator(WORK_MUSIC_SELECT, 'newGenre');
// export const restMusicSelect = actionCreator(REST_MUSIC_SELECT, 'newGenre');

export const submitSession = actionCreator(SUBMIT_SESSION, 'slider', 'restGenre');

export const closeDialog = actionCreator(CLOSE_DIALOG);


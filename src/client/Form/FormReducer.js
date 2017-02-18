import {
	SLIDER_INCR, SLIDER_DECR, WORK_MUSIC_SELECT, REST_MUSIC_SELECT
} from './FormActions';


import {
  SPOTIFY_GENRE_SEED_BEGIN, SPOTIFY_GENRE_SEED_SUCCESS, SPOTIFY_GENRE_SEED_FAILURE
} from '../Spotify/SpotifyActions';



export default function tabataForm(state, action){
	switch(action.type){
		case SLIDER_INCR:
			return Object.assign({}, state, {
            	SessionSlider: state.SessionSlider+1
         	 })
		case SLIDER_DECR:
			return Object.assign({}, state, {
            	SessionSlider: state.SessionSlider-1
         	 })
		case WORK_MUSIC_SELECT:
			return Object.assign({}, state, {
            	WorkMusicType: action.newGenre
         	 })
		case REST_MUSIC_SELECT:
			return Object.assign({}, state, {
            	RestMusicType: action.newGenre
         	 })
    case SUBMIT_FORM:
      //Set UI, figure out how to start everything up
		default:
			return state

	}







}



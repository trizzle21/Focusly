import {
	SLIDER_INCR, SLIDER_DECR, WORK_MUSIC_SELECT, REST_MUSIC_SELECT, SPOTIFY_GENRE_SEED_BEGIN, SPOTIFY_GENRE_SEED_SUCCESS, SPOTIFY_GENRE_SEED_FAILURE
} from '../actions/actions';





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
  		case SPOTIFY_GENRE_SEED_BEGIN:
    		return Object.assign({}, state, {
    			recommendationSeed: state.recommendationSeed,
    			loading:true,
    		});
  		case SPOTIFY_GENRE_SEED_SUCCESS:
    		return Object.assign({}, state, {
    			recommendationSeed: action.data,
    			loading:false,
    		});
  		case SPOTIFY_GENRE_SEED_FAILURE:
			return state
		default:
			return state

	}







}



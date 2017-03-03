import {
	SLIDER_CHANGE, WORK_MUSIC_SELECT, REST_MUSIC_SELECT, CLOSE_DIALOG, 
    SPOTIFY_GENRE_SEED_BEGIN, SPOTIFY_GENRE_SEED_SUCCESS, SPOTIFY_GENRE_SEED_ERROR
} from './FormActions';


var Form_State = {
    isLoading: false,
    openDialog:true,
    WorkMusicType: '',
    RestMusicType: '',
    SessionSlider: 1.0,
    recommendationSeeds:[],
}


export default function tabataForm(state=Form_State, action){
	switch(action.type){
		case SLIDER_CHANGE:
            return Object.assign({}, state, {
            	SessionSlider: action.value
         	 })
		case WORK_MUSIC_SELECT:
			return Object.assign({}, state, {
            	WorkMusicType: action.newGenre
         	 })
		case REST_MUSIC_SELECT:
			return Object.assign({}, state, {
            	RestMusicType: action.newGenre
         	 })
		case CLOSE_DIALOG:
            return Object.assign({}, state, {
              openDialog: !this.state.openDialog,
           })
        case SPOTIFY_GENRE_SEED_BEGIN:
            return Object.assign({}, state, {
                isLoading:true,
            });
        case SPOTIFY_GENRE_SEED_SUCCESS:
            console.log('success');
            return Object.assign({}, state, {
                recommendationSeed: action.data,
                isLoading:false,
            });
      case SPOTIFY_GENRE_SEED_ERROR:
          console.log('error');
          return state;
      default:
			return state;

	}







}



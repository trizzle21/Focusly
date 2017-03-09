import {
	SLIDER_CHANGE, WORK_MUSIC_SELECT, REST_MUSIC_SELECT, CLOSE_DIALOG, 
} from './FormActions';


var Form_State = {
    isLoading: false,
    UserLoading:false,
    openDialog:true,
    WorkMusicType: {},
    RestMusicType: {},
    SessionSlider: 1.0,
}


export default function Form(state=Form_State, action){
    switch(action.type){
		case SLIDER_CHANGE:   
            console.log(action);
            return Object.assign({}, state, {
                    SessionSlider: action.value,
                }
         	 )
		case WORK_MUSIC_SELECT:
			//console.log(action.newGenre);
            return Object.assign({}, state, {
            	WorkMusicType: action.newPlaylist
         	 })
		case REST_MUSIC_SELECT:
			return Object.assign({}, state, {
            	RestMusicType: action.newPlaylist
         	 })
		case CLOSE_DIALOG:
            return Object.assign({}, state, {
              openDialog: !state.openDialog,
           })
      default:
			return state;

	}







}



import {
	SLIDER_INCR, SLIDER_DECR, WORK_MUSIC_SELECT, REST_MUSIC_SELECT, 
} from './FormActions';




export default function tabataForm(state, action){
	switch(action.type){
		case SLIDR_CHANGE:
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
    case SUBMIT_FORM:
      //Set UI, figure out how to start everything up
		case CLOSE_DIALOG:
      return Object.assign({}, state, {
              openDialog: !this.state.openDialog,
           })
    default:
			return state

	}







}



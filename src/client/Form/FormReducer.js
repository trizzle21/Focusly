import {
	SLIDER_CHANGE, WORK_MUSIC_SELECT, REST_MUSIC_SELECT, CLOSE_DIALOG,
} from './FormActions';


var Form_State = {
    loading: true,
    openDialog:true,
    WorkMusicType: '',
    RestMusicType: '',
    SessionSlider: 1.0,
    recommendationSeeds:null,
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
    default:
			return state

	}







}


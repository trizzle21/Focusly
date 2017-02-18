//Form Actions

import actionCreator from '../ActionCreaor';


const SLIDER_INCR = 'SLIDER_INCR';
const SLIDER_DECR = 'SLIDER_DECR';

const WORK_MUSIC_SELECT = 'WORK_MUSIC_SELECT';
const REST_MUSIC_SELECT = 'REST_MUSIC_SELECT';


const SUBMIT_SESSION = 'SUBMIT_SESSION';



export const sliderIncr = actionCreator(SLIDER_INCR);
export const sliderIncr = actionCreator(SLIDER_DECR);

export const workMusicSelect = actionCreator(WORK_MUSIC_SELECT, 'newGenre');
export const restMusicSelect = actionCreator(REST_MUSIC_SELECT, 'newGenre');

export const submitSession = actionCreator(SUBMIT_SESSION);

function restMusicSelect(musicType) {
	return {type: REST_MUSIC_SELECT, newGenre: musicType}
}


function submitSession(){
	return {type:SUBMIT_SESSION};
}
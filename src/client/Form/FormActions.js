//Form Actions

export const SLIDER_INCR = 'SLIDER_INCR';
export const SLIDER_DECR = 'SLIDER_DECR';

export const WORK_MUSIC_SELECT = 'WORK_MUSIC_SELECT';
export const REST_MUSIC_SELECT = 'REST_MUSIC_SELECT';


function sliderIncr() {
	return { type: SLIDER_INCR }
}

function sliderDecr() {
	return { type: SLIDER_DECR }
}



function WORK_MUSIC_SELECT(musicType) {
	return {type: WORK_MUSIC_SELECT, newGenre: musicType}

}

function REST_MUSIC_SELECT(musicType) {
	return {type: REST_MUSIC_SELECT, newGenre: musicType}
}
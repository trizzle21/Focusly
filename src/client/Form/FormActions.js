//Form Actions
import actionCreator from '../ActionCreaor';


const SLIDER_CHANGE = 'SLIDER_CHANGE';

const WORK_MUSIC_SELECT = 'WORK_MUSIC_SELECT';
const REST_MUSIC_SELECT = 'REST_MUSIC_SELECT';


const SUBMIT_SESSION = 'SUBMIT_SESSION';



export const sliderChange = actionCreator(SLIDER_CHANGE, 'data');

export const workMusicSelect = actionCreator(WORK_MUSIC_SELECT, 'newGenre');
export const restMusicSelect = actionCreator(REST_MUSIC_SELECT, 'newGenre');

export const submitSession = actionCreator(SUBMIT_SESSION, 'slider', 'restGenre');

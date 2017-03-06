import actionCreator from '../ActionCreator';


//Timer Actions
export const CYCLE_SET = 'CYCLE_SET';
export const SESSION_TYPE_SET = 'SESSION_TYPE_SET';
export const TICK = 'TICK';
export const START_STOP = 'START_STOP';
export const SET_INTERVAL = 'SET_INTERVAL';
export const CLEAR_INTERVAL = 'CLEAR_INTERVAL';
export const SUBMIT_FORM = 'SUBMIT_FORM';

export function cycleSet(cycleCount) {
	return { type: CYCLE_SET, cycleCount: cycleCount};
}

export function sessionTypeSet(session_type){
	return { type: SESSION_TYPE_SET, sessionType: session_type };
}

export const tick = actionCreator(TICK);
export const startStop = actionCreator(START_STOP);


export const SPOTIFY_RECOMENDATION_PLAYLIST_BEGIN = "SPOTIFY_GENRE_SEED_BEGIN";
export const SPOTIFY_RECOMENDATION_PLAYLIST_SUCCESS = "SPOTIFY_GENRE_SEED_SUCCESS";
export const SPOTIFY_RECOMENDATION_PLAYLIST_ERROR = "SPOTIFY_GENRE_SEED_ERROR";

function SpotifyRecomendationPlaylistBegin(){ 
    return { type: SPOTIFY_GENRE_SEED_BEGIN };
}
function SpotifyRecomendationPlaylistSuccess(data)  { 
    return { type: SPOTIFY_GENRE_SEED_SUCCESS, data:data};
}
function SpotifyRecomendationPlaylistError(e) { 
    return { type: SPOTIFY_GENRE_SEED_ERROR, error:e };
}




export function getSeedPlaylist(options){
	return (dispatch) => {
		dispatch()
	}
}




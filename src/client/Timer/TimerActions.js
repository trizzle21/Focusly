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


export const SPOTIFY_PLAYLIST_BEGIN = "SPOTIFY_PLAYLIST_BEGIN";
export const SPOTIFY_PLAYLIST_SUCCESS = "SPOTIFY_PLAYLIST_SUCCESS";
export const SPOTIFY_PLAYLIST_ERROR = "SPOTIFY_PLAYLIST_ERROR";

function SpotifyPlaylistBegin(){ 
    return { type: SPOTIFY_PLAYLIST_BEGIN };
}
function SpotifyPlaylistSuccess(data)  { 
    return { type: SPOTIFY_PLAYLIST_SUCCESS, data:data};
}
function SpotifyPlaylistError(e) { 
    return { type: SPOTIFY_PLAYLIST_ERROR, error:e };
}




export function getPlaylist(options){
	return (dispatch) => {
		dispatch(SpotifyRecomendationPlaylistBegin());
		fetch('https://api.spotify.com/v1/me/playlists/'+options.playlist_id, {
			method:"GET",
			headers: {'Authorization' : 'Bearer ' + options.accessToken}
			})
		.then(data => data.json())
		.catch(e => {
			dispatch(SpotifyRecomendationPlaylistError(e))
		})
		.then(json => {
			dispatch(SpotifyRecomendationPlaylistSuccess(json))
		});


		
	}
}




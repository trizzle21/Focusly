export const SPOTIFY_WORK_PLAYLIST_BEGIN = "SPOTIFY_WORK_PLAYLIST_BEGIN";
export const SPOTIFY_WORK_PLAYLIST_SUCCESS = "SPOTIFY_WORK_PLAYLIST_SUCCESS";
export const SPOTIFY_WORK_PLAYLIST_ERROR = "SPOTIFY_WORK_PLAYLIST_ERROR";

export const SPOTIFY_REST_PLAYLIST_BEGIN = "SPOTIFY_REST_PLAYLIST_BEGIN";
export const SPOTIFY_REST_PLAYLIST_SUCCESS = "SPOTIFY_REST_PLAYLIST_SUCCESS";
export const SPOTIFY_REST_PLAYLIST_ERROR = "SPOTIFY_REST_PLAYLIST_ERROR";





function SpotifyWorkPlaylistBegin(){ 
    return { type: SPOTIFY_WORK_PLAYLIST_BEGIN };
}
function SpotifyWorkPlaylistSuccess(data)  { 
    return { type: SPOTIFY_WORK_PLAYLIST_SUCCESS, data:data};
}
function SpotifyWorkPlaylistError(e) { 
    return { type: SPOTIFY_WORK_PLAYLIST_ERROR, error:e };
}

function SpotifyRestPlaylistBegin(){ 
    return { type: SPOTIFY_REST_PLAYLIST_BEGIN };
}
function SpotifyRestPlaylistSuccess(data)  { 
    return { type: SPOTIFY_REST_PLAYLIST_SUCCESS, data:data};
}
function SpotifyRestPlaylistError(e) { 
    return { type: SPOTIFY_REST_PLAYLIST_ERROR, error:e };
}



export function getPlaylist(options, work){
	if (work === true){
		return (dispatch) => {
			dispatch(SpotifyWorkPlaylistBegin());
			fetch('https://api.spotify.com/v1/me/playlists/'+options.playlist_id, {
				method:"GET",
				headers: {'Authorization' : 'Bearer ' + options.accessToken}
				})
			.then(data => data.json())
			.catch(e => {
				dispatch(SpotifyWorkPlaylistError(e))
			})
			.then(json => {
				dispatch(SpotifyWorkPlaylistSuccess(json))
			});
		}
	} else {
		return (dispatch) => {
			dispatch(SpotifyRestPlaylistBegin());
			fetch('https://api.spotify.com/v1/me/playlists/'+options.playlist_id, {
				method:"GET",
				headers: {'Authorization' : 'Bearer ' + options.accessToken}
				})
			.then(data => data.json())
			.catch(e => {
				dispatch(SpotifyRestPlaylistError(e))
			})
			.then(json => {
				dispatch(SpotifyRestPlaylistSuccess(json))
			});
		}

	}
}

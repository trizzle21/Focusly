//Spotify Actions
import actionCreator from '../ActionCreator';



export const SPOTIFY_USER_PLAYLISTS_BEGIN = "SPOTIFY_USER_PLAYLISTS_BEGIN";
export const SPOTIFY_USER_PLAYLISTS_SUCCESS = "SPOTIFY_USER_PLAYLISTS_SUCCESS";
export const SPOTIFY_USER_PLAYLISTS_ERROR = "SPOTIFY_GENRE_SEED_ERROR";

export const SPOTIFY_SPECIFIC_PLAYLIST_BEGIN = "SPOTIFY_WORK_PLAYLIST_BEGIN";
export const SPOTIFY_SPECIFIC_PLAYLIST_SUCCESS = "SPOTIFY_WORK_PLAYLIST_SUCCESS";
export const SPOTIFY_SPECIFIC_PLAYLIST_ERROR = "SPOTIFY_WORK_PLAYLIST_ERROR";




function SpotifyUserPlaylistsBegin(){ 
    return { type: SPOTIFY_USER_PLAYLISTS_BEGIN };
}
function SpotifyUserPlaylistsSuccess(data)  { 
    return { type: SPOTIFY_USER_PLAYLISTS_SUCCESS, data:data};
}
function SpotifyUserPlaylistsError(e) { 
    return { type: SPOTIFY_USER_PLAYLISTS_ERROR, error:e };
}





export function getUserPlaylists(options){
	return (dispatch) => {
		dispatch(SpotifyUserPlaylistsBegin());
		fetch("https://api.spotify.com/v1/me/playlists", {
				method:"GET",
				headers: {'Authorization' : 'Bearer ' + options.accessToken}
		})
		.then(data => data.json()).catch(e => {
			dispatch(SpotifyUserPlaylistsError(e))
		})
		.then(json => {
			dispatch(SpotifyUserPlaylistsSuccess(json));
		});
		
	};
};




function SpotifySpecificPlaylistBegin(){ 
    return { type: SPOTIFY_SPECIFIC_PLAYLIST_BEGIN };
}
function SpotifySpecificPlaylistSuccess(data, work)  { 
    return { type: SPOTIFY_SPECIFIC_PLAYLIST_SUCCESS, playlist:data, work:work};
}
function SpotifySpecificPlaylistError(e) { 
    return { type: SPOTIFY_SPECIFIC_PLAYLIST_ERROR, error:e };
}




export function getPlaylist(options){
	console.log("work");
	return (dispatch) => {	
		dispatch(SpotifySpecificPlaylistBegin());
		fetch('https://api.spotify.com/v1/users/'+ options.playlist.owner +'/playlists/'+options.playlist.id, {
			method:"GET",
			headers: {'Authorization' : 'Bearer ' + options.accessToken}
			})
		.then(data => data.json())
		.catch(e => {
			dispatch(SpotifySpecificPlaylistError(e))
		})
		.then(json => {
			dispatch(SpotifySpecificPlaylistSuccess(json.uri, options.work))
		});
	}
}

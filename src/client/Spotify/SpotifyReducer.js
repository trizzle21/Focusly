import {
  SPOTIFY_USER_PLAYLISTS_BEGIN, SPOTIFY_USER_PLAYLISTS_SUCCESS, SPOTIFY_USER_PLAYLISTS_ERROR,
  SPOTIFY_SPECIFIC_PLAYLIST_BEGIN, SPOTIFY_SPECIFIC_PLAYLIST_SUCCESS,SPOTIFY_SPECIFIC_PLAYLIST_ERROR
} from './SpotifyActions';


//todo 
const SpotifyState= {
    UserPlaylists:[],
    userPlaylistsIsLoading:true,
    playlistUriIsLoading:true,
    restPlaylistUri:"",
    workPlaylistUri:"",


}

export default function Spotify (state=SpotifyState, action) {
	switch(action.type){
      case SPOTIFY_USER_PLAYLISTS_BEGIN:
            return Object.assign({}, state, {
                userPlaylistsIsLoading:true,
            });
      case SPOTIFY_USER_PLAYLISTS_SUCCESS:
            return Object.assign({}, state, {
                UserPlaylists: action.data.items,
                userPlaylistsIsLoading:false,
            });
      case SPOTIFY_USER_PLAYLISTS_ERROR:
            return state;
      case SPOTIFY_SPECIFIC_PLAYLIST_BEGIN:
        return Object.assign({}, state, {
          playlistUriIsLoading:true,
        });
      case SPOTIFY_SPECIFIC_PLAYLIST_SUCCESS:
        if(action.work === true) {
          return Object.assign({}, state, {
            workPlaylistUri: action.playlist,
            playlistUriIsLoading:false,
          });
        } else {
          return Object.assign({}, state, {
            restPlaylistUri: action.playlist,
            playlistUriIsLoading:false,
          });
        }

    case SPOTIFY_SPECIFIC_PLAYLIST_ERROR:
      return Object.assign({}, state, {
        
        });
    default:
      return state; 

  }
}



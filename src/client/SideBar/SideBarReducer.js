import {
	SPOTIFY_WORK_PLAYLIST_BEGIN, SPOTIFY_WORK_PLAYLIST_SUCCESS, SPOTIFY_WORK_PLAYLIST_ERROR,
	SPOTIFY_REST_PLAYLIST_BEGIN, SPOTIFY_REST_PLAYLIST_SUCCESS, SPOTIFY_REST_PLAYLIST_ERROR,
} from './SideBarActions';



const SideBarState= {
	isLoading:true,
	restPlaylistUri:null,
	workPlayListUri:null,
}


export default function SidebarReducer(state=SideBarState, actions){
	switch(actions.type){
		case SPOTIFY_WORK_PLAYLIST_BEGIN:
		    return Object.assign({}, state, {
		    	isLoading:true,
		    });
		case SPOTIFY_WORK_PLAYLIST_SUCCESS:
			return Object.assign({}, state, {
				wokrPlaylistUri: actions.playlisturi.href,
		   	 });

		case SPOTIFY_WORK_PLAYLIST_ERROR:
			return Object.assign({}, state, {
				
		    });
		case SPOTIFY_REST_PLAYLIST_BEGIN:
		    return Object.assign({}, state, {
		    });
		case SPOTIFY_REST_PLAYLIST_SUCCESS:
			console.log(actions.playlisturi);
			return Object.assign({}, state, {
				isLoading:false,
				restPlaylistUri: actions.playlisturi.href,
		   	 });

		case SPOTIFY_REST_PLAYLIST_ERROR:
			return state
		default:
			return state

	}
}
import {
  SPOTIFY_TOKENS, SPOTIFY_REC_BEGIN, SPOTIFY_REC_SUCCESS, SPOTIFY_REC_FAILURE
} from '../actions/actions';


//todo 
export default function spotifyRecommendations(state, actions) {
	switch(action.type){
		  case SPOTIFY_TOKENS:
    		const {accessToken, refreshToken} = action;
    		return Object.assign({}, state, {accessToken, refreshToken});
		
		case SPOTIFY_REC_BEGIN:
		  	return Object.assign({}, state, {
   	 			
  			});
		case SPOTIFY_REC_SUCCESS:
		  	return Object.assign({}, state, {
   	 			
  			});


}




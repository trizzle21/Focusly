import {
  SPOTIFY_TOKENS, SPOTIFY_REC_BEGIN, SPOTIFY_REC_SUCCESS, SPOTIFY_REC_FAILURE, 
  SPOTIFY_GENRE_SEED_BEGIN, SPOTIFY_GENRE_SEED_FAILURE, SPOTIFY_GENRE_SEED_SUCCESS, RECOMMENDATION_SET
} from './SpotifyActions';


//todo 
export default function spotifyRecommendations(state, action) {
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
  		case SPOTIFY_GENRE_SEED_BEGIN:
    		return Object.assign({}, state, {
    			recommendationSeed: state.recommendationSeed,
    			loading:true,
    		});
  		case SPOTIFY_GENRE_SEED_SUCCESS:
    		return Object.assign({}, state, {
    			recommendationSeed: action.data,
    			isloading:false,
          recomendationSet:true,

    		});
      case SPOTIFY_GENRE_SEED_FAILURE:
          return state;


  }
}



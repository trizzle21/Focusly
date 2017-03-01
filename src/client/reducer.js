import { combineReducers } from 'redux'

import Form from './Form/FormReducer';
import timer from './Timer/TimerReducer';
import spotifyAuth from './Spotify/SpotifyReducer';
//cycles are 25+5minute intervals

//TODO sessions and Tabata Count are different
export const initialState = {
  spotify: {
    accessToken: null,
    refreshToken: null,
    loading:true,
  },

  timer:{
    cycles:0,
    working:true,
    restRecommendationSeeds: null,
    workRecommendationSeeds: null,
    initialSeconds:0,
    secondsRemaining:0,
    completed:100,
    isCounting:true,
  },
  
  tabataForm: {
    loading: true,
    openDialog:true,
    WorkMusicType: '',
    RestMusicType: '',
    SessionSlider: 1.0,
    recommendationSeeds:null,
  },



}



export default combineReducers({
  Form,
  timer,
  // spotifyAuth,
});


// export function reducer(state=initialState, action){
//   return {
//     tabataForm: tabataForm(state.tabataForm, action),
//     timer: timer(state.timer, action),
//     spotifyAuth: spotifyAuth(state.spotify, action),
//   }
// }
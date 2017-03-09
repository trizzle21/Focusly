import { combineReducers } from 'redux'

import form from './Form/FormReducer';
import timer from './Timer/TimerReducer';
import spotifyAuth from './Spotify/SpotifyReducer';
import sidebar from './SideBar/SidebarReducer';
import spotify from './Spotify/SpotifyReducer'
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
  
  Form: {
    isloading: true,
    openDialog:true,
    WorkMusicType: '',
    RestMusicType: '',
    SessionSlider: 1.0,
    recommendationSeeds:null,
  },



}



export default combineReducers({
  form,
  timer,
  sidebar,
  spotify,
});


// export function reducer(state=initialState, action){
//   return {
//     tabataForm: tabataForm(state.tabataForm, action),
//     timer: timer(state.timer, action),
//     spotifyAuth: spotifyAuth(state.spotify, action),
//   }
// }
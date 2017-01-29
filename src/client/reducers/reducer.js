import { combineReducers } from 'redux'

import tabataForm from './tabataForm';
import timer from './timer';

//cycles are 25+5minute intervals

//TODO sessions and Tabata Count are different
const initialState = {
  accessToken: null,
  refreshToken: null,
  loading:true
  session:{
    cycles:0
    working:true,
    restRecommendationSeeds: null,
    workRecommendationSeeds: null,
    secondsRemaining:0,
  }  
  ui: {
    tabataForm: {
      loading:true,
      WorkMusicType: '',
      RestMusicType: '',
      SessionSlider: 1.0,
      recommendationSeeds:null,
    },

    }

}



export default function TimerApp(state=initialState, action){
  return {
    tabataForm: tabataForm(state.ui.tabataForm, action),
    timer: timer(state.session, action)
  }
}
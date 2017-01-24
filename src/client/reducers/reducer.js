import { combineReducers } from 'redux'

import tabataForm from './tabataForm';




const initialState = {
  accessToken: null,
  refreshToken: null,
  session:{
    count:0,
    isCurrent:false,
    currentSession: 1,
    recommendationSeeds: null,
    subSessions:{
      workSession:{
        id:1,
        isActive:true,
        length:2500,
        playlist: null,
        recommendation_seed:null,
      },
      restSession:{
        id:2,
        isActive:false,
        length:300,
        playlist: null,
        recommendation_seed:null,
      }
    }
  },
  ui: {
    tabataForm: {
      WorkMusicType: '',
      RestMusicType: '',
      SessionSlider: 1.0,
    },

    }

}



export default function TimerApp(state=initialState, action){
  return {
    tabataForm: tabataForm(state.ui.tabataForm, action),

  }
}
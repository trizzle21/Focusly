import { combineReducers } from 'redux'

import tabataForm from './tabataForm';



//TODO sessions and Tabata Count are different
const initialState = {
  accessToken: null,
  refreshToken: null,
  loading:true
  working:true,
  session:{
    count:0,
    isCurrent:false,
    currentSession: 1,
    recommendationSeeds: null,
    subSession:{
        id:1,
        isActive:true,
        length:2500,
        playlist: null,
        recommendation_seed:null,
  },
  ui: {
    tabataForm: {
      loadind:true,
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

  }
}
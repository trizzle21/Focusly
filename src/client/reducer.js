import { combineReducers } from 'redux'

import form from './Form/FormReducer';
import timer from './Timer/TimerReducer';
import spotifyAuth from './Spotify/SpotifyReducer';
//import sidebar from './SideBar/SidebarReducer';
import spotify from './Spotify/SpotifyReducer'
//cycles are 25+5minute intervals


export default combineReducers({
  form,
  timer,
  spotify,
});



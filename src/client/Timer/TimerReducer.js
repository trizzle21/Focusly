
import {
	CYCLE_SET, SESSION_TYPE_SET, TICK, START_STOP,SET_INTERVAL, CLEAR_INTERVAL, 
	SPOTIFY_PLAYLIST_BEGIN, SPOTIFY_PLAYLIST_SUCCESS, SPOTIFY_PLAYLIST_ERROR
 } from './TimerActions';

import { SUBMIT_FORM } from '../Form/FormActions';



const time_state={
    cycles:1,
    working:true,
    intervalID:null,
    restRecommendationSeeds: null,
    workRecommendationSeeds: null,
    initialSeconds:1500,
    secondsRemaining:1500,
    completed:100,
    isCounting:false,
    sideBarLoad:false,
};



export default function TimerReducer(state=time_state, actions){
	switch(actions.type){
		case SET_INTERVAL:
			return Object.assign({}, state, {
				intervalID: actions.intervalID,
			});
		case CLEAR_INTERVAL:
			return Object.assign({}, state, {
				intervalID: null,
			});
		case CYCLE_SET:
			return Object.assign({}, state, {
				cycles: actions.cycleCount,
			});
		case SESSION_TYPE_SET:
			if(actions.sessionType === 'working'){
				return Object.assign({}, state, {
					working:true,
					secondsRemaining: 1500,
					initialSeconds:1500
				});
			} else {
				return Object.assign({}, state, {
					working:false,
					secondsRemaining: 300,
					initialSeconds:300,
				});
			}
		case TICK:
			if(state.secondsRemaining >= 0) { 
				return Object.assign({}, state, {
					secondsRemaining: state.secondsRemaining-1,
					completed: (state.secondsRemaining/state.initialSeconds)*100,
				});
			} else {
				if(state.working){
					return Object.assign({}, state, {
						working:false,
						secondsRemaining: 300,
						initialSeconds:300,			
					});
				} else {
					return Object.assign({}, state, {
						working:true,
						cycles: state.cycles-1,
						secondsRemaining: 1200,
						initialSeconds:1200,			
					});

				}
			} 
		case START_STOP:
			return Object.assign({}, state, {
				isCounting: !state.isCounting,
			});
     	case SUBMIT_FORM:
      		return Object.assign({}, state, {
				restRecommendationSeeds: actions.rest,
				workRecommendationSeeds: actions.work,
				cycles: actions.cycles,
				isCounting:true,
			});
		default:
			return state;
	}

}



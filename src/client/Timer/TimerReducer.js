import {
	CYCLE_SET, SESSION_TYPE_SET, TICK,
 } from '../actions/actions';



export default function TimerReducer(state, actions){
	switch(actions.type){
		case CYCLE_SET:
			return Object.assign({}, state, {
				cycles: actions.data
			})
		case SESSION_TYPE_SET:
			if(state.working){
				return Object.assign({}, state, {
					working:!state.working,
					secondsRemaining: 1200,
					initialSeconds:1200
				})
			} else {
				return Object.assign({}, state, {
					working:!state.working,
					secondsRemaining: 300,
					initialSeconds:300,
				});
			}
		case TICK:
			return Object.assign({}, state, {
				secondsRemaining: state.secondsRemaining-1,
				completed: (state.secondsRemaining/state.initialSeconds)*100,
		}
		
	}



}

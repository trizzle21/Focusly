import {
	CYCLE_SET, SESSION_TYPE_SET, TICK, START_STOP,
 } from '../actions/actions';



export default function TimerReducer(state, actions){
	switch(actions.type){
		case CYCLE_SET:
			return Object.assign({}, state, {
				cycles: actions.cycleCount,
			});
		case SESSION_TYPE_SET:
			if(actions.sessionType == 'working'){
				return Object.assign({}, state, {
					working:!state.working,
					secondsRemaining: 1200,
					initialSeconds:1200
				});
			} else {
				return Object.assign({}, state, {
					working:!state.working,
					secondsRemaining: 300,
					initialSeconds:300,
				});
			}
		case TICK:
			if(this.state.secondsRemaining >= 0) { 
				return Object.assign({}, state, {
					secondsRemaining: state.secondsRemaining-1,
					completed: (state.secondsRemaining/state.initialSeconds)*100,
				});
			} else {
				if(state.working === true){
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
 

		default:
			return state;
	}

}



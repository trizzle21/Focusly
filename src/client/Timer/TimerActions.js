//Timer Actions
export const CYCLE_SET = 'CYCLE_SET';
export const SESSION_TYPE_SET = 'SESSION_TYPE_SET';
export const TICK = 'TICK';
export const START_STOP = 'START_STOP';



function cycleSet(cycleCount) {
	return { type: CYCLE_SET, cycleCount: cycleCount};
}

function sessionTypeSet(session_type){
	return { type: SESSION_TYPE_SET, sessionType: session_type};
}

export function tick(){
	return { type: TICK };
}


function startStop(){
	return { type: START_STOP };
}



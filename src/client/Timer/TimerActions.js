//Timer Actions
export const CYCLE_SET = 'CYCLE_SET';
export const SESSION_TYPE_SET = 'SESSION_TYPE_SET';
export const TICK = 'TICK';




function cycleSet(cycleCount) {
	return { type: CYCLE_SET, cycleCount: cycleCount};
}

function sessionTypeSet(session_type){
	return { type: SESSION_TYPE_SET, SESSION_TYPE: session_type};
}

function tick(){
	return { type: TICK };
}


export const sessionTypeSet = makeAction(types.SESSION_TYPE_SET, session_type);
export const tick = makeAction(types.TICK);



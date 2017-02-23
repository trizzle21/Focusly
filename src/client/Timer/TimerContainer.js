import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Import specific uncreated actions
import Timer from './Timer';


import { tick, startStop, sessionTypeSet, cycleSet } from './TimerActions';

const styles = {
  circProgress: {
    position: "absolute",
    marginTop:20,
    marginLeft:220,
  },
  buttons: {
  	margin: 12,
  }
};

class TimerContainer extends React.Component {
	componentWillReceiveProps(){
		this.props.sessionTypeSet('working');
		this.props.cycleSet(5);
		var interval = setInterval(this.props.tick(), 1000);
	}
	
	pause(){
		//Going to move this to be an action
		if(this.props.isCounting === true){
			clearInterval(this.interval);
			this.props.startStop();
		} else {
			var interval = setInterval(this.props.tick(), 1000);
			this.props.startStop();
		}

	}

	componentWillUnmount() {
    	clearInterval(this.interval);
  	}

	render() {
		return (<div>
		 <Timer 
		 	pause={this.pause} 
		 	tick={this.props.tick()} 
			secondsRemaining={this.props.secondsRemaining}
			cycles={this.props.cycles}
			startStop={this.props.startStop}
		 	/>
		</div>
	);}
}


TimerContainer.propTypes = {
	secondsRemaining: React.PropTypes.number,
	sessionCount: React.PropTypes.number,
	isCounting:React.PropTypes.bool,
	working:React.PropTypes.bool,
	//redux action 
	sessionTypeSet:React.PropTypes.func,
	tick:React.PropTypes.func,	
	startStop:React.PropTypes.func,
	cycleSet:React.PropTypes.func,
}



function mapStateToProps(state) {
	return {
		working: state.working,
		secondsRemaining:state.secondsRemaining,
		cycles:state.cycles,
		isCounting:state.isCounting,

	}
}

// function mapDispatchToProps(dispatch) {
// 	return {
// 		tick: bindActionCreators(tick(), dispatch), 
// 		startStop: bindActionCreators(startStop(), dispatch),
// 		cycleSet: bindActionCreators(cycleSet(), dispatch),
// 		sessionTypeSet:bindActionCreators(sessionTypeSet(), dispatch),
// 	}
// }

export default connect(mapStateToProps, {
	tick,
	startStop,
	cycleSet,
	sessionTypeSet,
})(TimerContainer)


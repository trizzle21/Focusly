import React, {PropTypes} from 'react';
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





	componentWillMount(){
		const{isCounting, secondsRemaining,cycles } = this.props;
		// this.props.sessionTypeSet('working');
		// this.props.cycleSet(5);
		var interval = setInterval(() => {this.props.dispatch({ type: "TICK" })}, 1000);
		
	}


	
	pause(){
		
		//Going to move this to be an action
		if(this.props.isCounting){
			clearInterval(this.interval);
			startStop();
		} else {
			var interval = setInterval(() => {this.props.dispatch({ type: "TICK" })}, 1000);
			this.startStop();
		}

	}

	startCounting(){
		this.tick();
	}

	componentWillUnmount() {
    	clearInterval(this.interval);
  	}

	render() {
		//{secondsRemaining,startCounting}
		return (<div>
		 <Timer 
		 	pause={this.pause} 
		 	tick={this.props.startCounting} 
			secondsRemaining={this.props.secondsRemaining}
			isCounting={this.props.isCounting}
			cycles={this.props.cycles}
		 	/>
		</div>
	);}
}


TimerContainer.propTypes = {
	secondsRemaining: React.PropTypes.number,
	sessionCount: React.PropTypes.number,
	isCounting:React.PropTypes.bool,
	working:React.PropTypes.bool,
	
	//dispatch:React.PropTypes.func.isRequired
	//redux action 
	sessionTypeSet:React.PropTypes.func,
	tick:React.PropTypes.func,	
	startStop:React.PropTypes.func,
	cycleSet:React.PropTypes.func,
}



function mapStateToProps(state) {
	return {
		working: state.timer.working,
		secondsRemaining:state.timer.secondsRemaining,
		cycles:state.timer.cycles,
		isCounting:state.timer.isCounting,

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

export default connect(mapStateToProps)(TimerContainer);


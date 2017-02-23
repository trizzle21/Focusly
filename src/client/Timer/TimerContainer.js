import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Import specific uncreated actions
import Timer from './Timer';




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
		this.props.sessionTypeSet('working')
		var interval = setInterval(this.props.tick(), 1000);
	}
	
	pause(){
		//Going to move this to be an action
		if(this.props.isCounting === true){
			clearInterval(this.state.interval);
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
		<div>
		 <Timer 
		 	pause={this.pause} 
		 	tick={this.props.tick()} 
			secondsRemaining={this.props.secondsRemaining}
			cycles={this.props.cycles}
			//startStop={this.props.startStop}
		 	/>
		</div>
	}
}


TimerContainer.propTypes = {
	secondsRemaining: React.PropTypes.number.isRequired,
	sessionCount: React.PropTypes.number.isRequired,
	isCounting:React.PropTypes.bool.isRequired,
	working:React.PropTypes.bool.isRequired,
	//redux action hookups
	sessionTypeSet:React.PropTypes.func.isRequired,
	tick:React.PropTypes.func.isRequired,
	startStop:React.PropTypes.func.isRequired,
	cycleSet:React.PropTypes.func.isRequired,
}




function mapStateToProps(state) {
	return {
		working: state.working,
		secondsRemaining:state.secondsRemaining,
		cycles:state.cycles,
		isCounting:state.isCounting,

	}
}

function mapDispatchToProps(dispatch) {
	return {
		tick: bindActionCreators(tick(), dispatch), 
		startStop: bindActionCreators(startStop(), dispatch),
		cycleSet: bindActionCreators(cycleSet(), dispatch),
		sessionTypeSet:bindActionCreators(sessionTypeSet(), dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);


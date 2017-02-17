import React, { PropTypes } from 'react';
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
	static propTypes = {
		secondsRemaining: PropTypes.number.isRequired,
		sessionCount: PropTypes.number.isRequired,
		isCounting:PropTypes.bool.isRequired,
		working:PropTypes.bool.isRequired,
		//redux action hookups
		decreaseSessionCount:PropTypes.func.isRequired,
		tick:PropTypes.func.isRequired,
		stopCounting:PropTypes.func.isRequired,


	}

	componentWillMount(){
		this.props.sessionTypeSet('working')

	}
	
	pause(){
		//Going to move this to be an action
		if(this.props.isCounting === true){
			clearInterval(this.state.interval);
			this.props.startStop();
		} else {
			var intervalID = setInterval(this.props.tick(), 1000);
			this.setState({interval:intervalID});
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
		 	/>
		</div>
	}
}




function mapStateToProps(state) {
	return {
		working: state.working,
		secondsRemaining:state.secondsRemaining,
		cycles:state.cycles,

	}
}

function mapDispatchToProps(dispatch) {
	return {
		tick: bindActionCreators(tick(), dispatch), 
		decreaseSessionCount: bindActionCreators(tick(), dispatch),
		startStop: bindActionCreators(startStop()dispatch),
		cycleSet: bindActionCreators(cycleSet(), dispatch),
		sessionTypeSet:bindActionCreators(sessionTypeSet(), dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);


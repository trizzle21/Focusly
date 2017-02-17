import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Import specific uncreated actions





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
		workSession:PropTypes.object.isRequired,
		restSession:PropTypes.object.isRequired,
		//redux action hookups
		decreaseSessionCount:PropTypes.func.isRequired,
		tick:PropTypes.func.isRequired,
		stopCounting:PropTypes.func.isRequired,
		setSessionLength:PropTypes.func.isRequired,


	}

	componentWillMount(){
		const tick = this.props.tick; 
		if(this.props.session.working){
			this.props.setSessionLength(this.props.workSession.length)
		} else{
			this.props.setSessionLength(this.props.workSession.length)
		}

		this.interval setInterval(tick, 1000),
	}
	
	tick(){
		//Going to move this to be an action
		if(this.state.secondsRemaining >= 0) { 
			
			this.setState({secondsRemaining: this.state.secondsRemaining - 1, completed: (this.state.secondsRemaining/1500)*100});
		} else {
       		clearInterval(this.state.interval);
       		if(this.state.sessionCount != 0 && this.state.workSession == false){
       			sessionCount--;
       			this.setState({secondsRemaining: 300, completed: (this.state.secondsRemaining/300)*100,workSession: true});
       		} else if (this.state.sessionCount != 0){
       			this.setState({secondsRemaining: 1500, completed: (this.props.secondsRemaining/1500)*100);
       		} else {

       		}
   		}

	}

	pause(){
		//Going to move this to be an action
		if(this.props.isCounting === true){
			clearInterval(this.state.interval);
			this.props.stopCounting();
		} else {
			var intervalID = setInterval(, 1000);
			this.setState({interval:intervalID});
			this.props.stopCounting();
		}

	}

	componentWillUnmount() {
    	clearInterval(this.interval);
  	}

	render() {
		<div>
		 <Timer />
		</div>
	}
}




function mapStateToProps(state) {
	return {
		session: state.session,

	}
}

function mapdispatchtoProps(dispatch){
	return {
		tick: function(secondsRemaining){ dispatch(actions.tick(secondsRemaining))},
		decreaseSessionCount: function(currentSessionCount){},
		stopCounting: function(){dispatch},
		setSessionLength:function(intervalTime){dispatch({type:'setSessionLength', intervalTime})}
	}
}

export default connect(mapStateToProps)(Timer);Timer


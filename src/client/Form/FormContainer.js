import React, {PropTypes} from 'react';

import EntryForm from './form.js'; 

import {	
	sliderChange, workMusicSelect, restMusicSelect, submitSession,closeDialog,
} from './FormActions';

import submitSession from '../Timer/TimerActions';



import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';


class FormContainer extends React.Component {
	static propTypes {
		openDialog:PropTypes.bool.isRequired,
		//
		SessionSlider: PropTypes.number.isRequired,
		WorkMusicType: PropTypes.number.isRequired,
		RestMusicType: PropTypes.number.isRequired,
		SessionSlider: PropTypes.number.isRequired,

		//functions
		sliderChange:PropTypes.func.isRequired,
		workMusicSelect:PropTypes.func.isRequired,
		restMusicSelect:PropTypes.func.isRequired,


		submitSession: PropTypes.func.isRequired,





	}

	render(){
		const {
			openDialog,submitSession
		} = this.props

		const actions = [
  			<RaisedButton
  				label="Submit"
				labelPosition="after"
				primary={true}
				style={styles.button}
				containerElement="label"
				onClick={this.props.submitSession}
			/>
		];
		return (
  		<MuiThemeProvider muiTheme={theme}>
  			<div>
				<Dialog
	    			title="Set Up Tabata Session"
	    			subtitle="To get started, choose Tabata length and number of sessions"
					actions={actions}
	   				modal={true}
	    			open={this.props.openDialog}
				>
				<EntryForm 
					SessionSlider={this.props.SessionSlider}
					WorkMusicType={this.props.WorkMusicType}
					RestMusicType={this.props.RestMusicType}
					workMusicTypeChange={this.prop.workMusicSelect}
					restkMusicTypeChange={this.prop.restMusicSelect}
					sliderChange={this.props.sliderChange}
					closeDialog={this.props.closeDialog}


				/>

				</Dialog>
			</div>
		</MuiThemeProvider>

		);
	}

}

function mapDispatchtoProps(dispatch){

}


function mapStateToProps(state){
	return {
		recommendationSeeds:state.recommendationSeeds,
		openDialog:state.openDialog,
		WorkMusicType: state.WorkMusicType,
		RestMusicType: state.RestMusicType,
		SessionSlider:state.SessionSlider,
	}
}

export default connect(mapStateToProps, {
	sliderChange,
	workMusicSelect,
	restMusicSelect,
	closeDialog,
	submitSession,
})(FormContainer);
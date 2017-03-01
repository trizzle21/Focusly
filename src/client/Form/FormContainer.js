import React from 'react';
import { connect } from 'react-redux';

import EntryForm from './form.js'; 

import {	
	sliderChange, workMusicSelect, restMusicSelect,closeDialog,
} from './FormActions';

import submitSession from '../Timer/TimerActions';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

//import setTokens from '../Spotify/SpotifyActions';
import getCategories from './FormActions';


class FormContainer extends React.Component {

	componentWillMount(){
		//this.props.setTokens(this.props.params.accessToken, this.props.refreshToken);
		console.log(this.props);
		getCategories({
			accessToken:this.props.params.accessToken,
		});
	}

	render(){
		const actions = [
  			<RaisedButton
  				label="Submit"
				labelPosition="after"
				primary={true}
				style={styles.button}
				containerElement="label"
				onClick={this.props.dispatch({type:"SUBMIT_SESSION"})}
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
					isLoading={this.props.isLoading}
					SessionSlider={this.props.SessionSlider}
					WorkMusicType={this.props.WorkMusicType}
					RestMusicType={this.props.RestMusicType}
					sliderChange={this.props.sliderChange}
					closeDialog={this.props.dispatch({type:"CLOSE_DIALOG"})}
					recommendationSeeds={this.props.recommendationSeeds}
				/>

				</Dialog>
			</div>
		</MuiThemeProvider>

		);
	}

}

FormContainer.propTypes ={
	isLoading:React.PropTypes.bool,
	openDialog:React.PropTypes.bool,
	SessionSlider: React.PropTypes.number,
	WorkMusicType: React.PropTypes.string,
	RestMusicType: React.PropTypes.string,
	SessionSlider: React.PropTypes.number,
	recommendationSeeds:React.PropTypes.array,
	getCategories:React.PropTypes.func,

}






function mapStateToProps(state){
	console.log(state);
	return {
		isLoading:state.Form.isLoading,
		recommendationSeeds:state.Form.recommendationSeeds,
		openDialog:state.Form.openDialog,
		WorkMusicType: state.Form.WorkMusicType,
		RestMusicType: state.Form.RestMusicType,
		SessionSlider:state.Form.SessionSlider,
	}
}

export default connect(mapStateToProps, {
	getCategories,
})(FormContainer);
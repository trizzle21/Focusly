import React from 'react';
import { connect } from 'react-redux';

import EntryForm from './form.js'; 
import { bindActionCreators, Dispatch } from 'redux';

import {	
	sliderChange, workMusicSelect, restMusicSelect,
} from './FormActions';

import submitSession from '../Timer/TimerActions';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../Spotify/modules/CustomTheme.js';



//import setTokens from '../Spotify/SpotifyActions';
import {getCategories, closeDialog} from './FormActions';


const styles = {
  button: {
  	margin: 12,
  }

}


class FormContainer extends React.Component {

	componentWillMount(){
		//this.props.setTokens(this.props.params.accessToken, this.props.refreshToken);
		console.log(this.props.params.accessToken);
		this.props.getCategories({
			accessToken:this.props.params.accessToken,
		});
	}

	submit(){
		console.log(this.props);
	}
	render(){
		const actions = [
  			<RaisedButton
  				label="Submit"
				labelPosition="after"
				primary={true}
				style={styles.button}
				containerElement="label"
				//onClick={this.props.submitSession}
				onClick={this.submit.bind(this)}
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
					closeDialog={this.props.closeDialog}
					recommendationSeeds={this.props.recommendationSeeds}
					dispatch={this.props.dispatch}
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
	closeDialog:React.PropTypes.func,
	submitSession:React.PropTypes.func,
}






function mapStateToProps(state){
	console.log(state);
	return {
		isLoading:state.form.isLoading,
		recommendationSeeds:state.form.recommendationSeeds,
		openDialog:state.form.openDialog,
		WorkMusicType: state.form.WorkMusicType,
		RestMusicType: state.form.RestMusicType,
		SessionSlider:state.form.SessionSlider,
	}
}

function mapDispatchToProps(dispatch){
	return {
		dispatch,
		getCategories:bindActionCreators(getCategories, dispatch),
	};
}



export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
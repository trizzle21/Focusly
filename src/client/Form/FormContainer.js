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
import { getUserPlaylists, getPlaylist } from '../Spotify/SpotifyActions';


const styles = {
  button: {
  	margin: 12,
  }

}


class FormContainer extends React.Component {

	componentWillMount(){
		//this.props.setTokens(this.props.params.accessToken, this.props.refreshToken);
		this.props.getUserPlaylists({
			accessToken:this.props.params.accessToken,
		});

	}

	submit(){
		if(Object.keys(this.props.RestMusicType) !== 0 || Object.keys(this.props.WorkMusicType) !== 0){
			this.props.dispatch({type:'SUBMIT_FORM', 
				cycles: this.props.SessionSlider,
				rest: this.props.RestMusicType,
				work: this.props.WorkMusicType,
			});
		this.props.dispatch({type:'CLOSE_DIALOG'});
		this.props.getPlaylist({
				accessToken:this.props.params.accessToken,
				playlist:this.props.WorkMusicType,
				work:true
			});
		this.props.getPlaylist({
				accessToken:this.props.params.accessToken,
				playlist:this.props.RestMusicType,
				work:false,
		});


		}

		// this.props.dispatch({ type: "START_STOP" })
		// var intervalId = setInterval(() => {this.props.dispatch({ type: "TICK" })}, 1000);
		// this.props.dispatch({ type: "SET_INTERVAL", intervalID: intervalId });

	}
	render(){
		
		// if(this.props.error === ""){
			const actions = [
  				<RaisedButton
  					label="Submit"
					labelPosition="after"
					primary={true}
					style={styles.button}
					containerElement="label"
					onClick={this.submit.bind(this)}
				/>
		];
		// } else {
		// 	const actions = [
  // 				<RaisedButton
  // 					label="Refresh Token"
		// 			labelPosition="after"
		// 			primary={true}
		// 			style={styles.button}
		// 			containerElement="label"
		// 		/>
		// ];

		// }
		console.log(actions);
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
					isLoading={this.props.userPlaylistsIsLoading}
					SessionSlider={this.props.SessionSlider}
					WorkMusicType={this.props.WorkMusicType}
					RestMusicType={this.props.RestMusicType}
					sliderChange={this.props.sliderChange}
					closeDialog={this.props.closeDialog}
					UserPlaylists={this.props.UserPlaylists}
					dispatch={this.props.dispatch}
					error={this.props.error}
				/>

				</Dialog>
			</div>
		</MuiThemeProvider>

		);
	}

}

FormContainer.propTypes ={
	userPlaylistsIsLoading:React.PropTypes.bool,
	
	openDialog:React.PropTypes.bool,
	SessionSlider: React.PropTypes.number,
	WorkMusicType: React.PropTypes.object,
	RestMusicType: React.PropTypes.object,

	SessionSlider: React.PropTypes.number,
	UserPlaylists:React.PropTypes.array,
	error:React.PropTypes.string,

	getUserPlaylists:React.PropTypes.func,
	closeDialog:React.PropTypes.func,
	getPlaylist:React.PropTypes.func,
}






function mapStateToProps(state){
	return {
		userPlaylistsIsLoading:state.spotify.userPlaylistsIsLoading,
		UserPlaylists:state.spotify.UserPlaylists,
		error:state.spotify.error,

		openDialog: state.form.openDialog,
		WorkMusicType: state.form.WorkMusicType,
		RestMusicType: state.form.RestMusicType,
		SessionSlider: state.form.SessionSlider,
		userID:state.form.userID
	}
}

function mapDispatchToProps(dispatch){
	return {
		dispatch,
		getUserPlaylists:bindActionCreators(getUserPlaylists, dispatch),
		getPlaylist:bindActionCreators(getPlaylist, dispatch)
	};
}



export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
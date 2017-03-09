import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Drawer from 'material-ui/Drawer';

import SideBar from './SideBar';
import { getPlaylist } from '../Spotify/SpotifyActions';



class SideBarContainer extends React.Component {

	// componentChange(){
	// 	const {dispatch, params} = this.props;
 //    	const {accessToken, refreshToken} = params;
 //   	 	dispatch(setTokens({accessToken, refreshToken}));
 //    	dispatch(getMyRecommendations());
	// }


	render(){
	
		if(this.props.openDialog === true && this.props.isLoading === true){
			return(<div></div>);
		}
		if(this.props.working === true && this.props.isLoading !== true){
			console.log(this.props)
			return(
					<SideBar uri={this.props.workPlaylistUri} />
			);
		} else if (this.props.working === false && this.props.isLoading !== true){
			return(
				<div> 
					<SideBar uri={this.props.restPlaylistUri} />
				</div>
			);
		} else {
			return(<div>WAIT FOR IT</div>);

		}
	}

}

SideBarContainer.propTypes = {
	getPlaylist:React.PropTypes.func,
	openDialog:React.PropTypes.bool,
	working:React.PropTypes.bool,
	userID:React.PropTypes.string,
	isLoading:React.PropTypes.bool,
}


function mapStateToProps(state) {
	return {
		isLoading:state.spotify.playlistUriIsLoading,
		userID:state.form.userID,
		openDialog: state.form.openDialog,
		working:state.timer.working,
		restPlaylistUri:state.spotify.workPlayListUri,
		workPlaylistUri:state.spotify.restPlayListUri,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch,
		getPlaylist: bindActionCreators(getPlaylist, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);




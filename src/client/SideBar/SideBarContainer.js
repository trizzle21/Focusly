import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Drawer from 'material-ui/Drawer';

import SideBar from './SideBar';
import { getPlaylist } from './SideBarActions';



class SideBarContainer extends React.Component {

	// componentChange(){
	// 	const {dispatch, params} = this.props;
 //    	const {accessToken, refreshToken} = params;
 //   	 	dispatch(setTokens({accessToken, refreshToken}));
 //    	dispatch(getMyRecommendations());
	// }

	componentWillMount(){
		if(this.props.openDialog !== true){
			const { getPlaylist } = this.props;
			getPlaylist({
				accessToken:this.props.params.accessToken,
			}, true);
			getPlaylist({
				accessToken:this.props.params.accessToken,
			}, false);
		}
	}

	render(){
		if(this.props.openDialog === true){
			return(<div>TRUE</div>);
		}
		if(this.props.working === true){
			return(
				<div> 
					<SideBar uri={this.props.workPlaylistUri}/>
				</div>
			);
		} else{
			return(
				<div> 
					<SideBar uri={this.props.restPlaylistUri}/>
				</div>
			);
		}
	}

}

SideBarContainer.propTypes = {
	restPlaylistUri: React.PropTypes.number,
	workPlaylistUri: React.PropTypes.number,
	getPlaylist:React.PropTypes.func,
	openDialog:React.PropTypes.bool,
	working:React.PropTypes.bool,
}


function mapStateToProps(state) {
	return {
		restPlaylistUri: state.sidebar.restPlaylistUri,
		workPlaylistUri: state.sidebar.workPlaylistUri,
		openDialog: state.form.openDialog,
		working:state.timer.working,

	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch,
		getPlaylist: bindActionCreators(getPlaylist, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);




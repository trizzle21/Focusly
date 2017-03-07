import React from 'react';
import { connect } from 'react-redux';

import Drawer from 'material-ui/Drawer';

import SideBar from './SideBar';
import getPlaylist from './SideBarActions';



class SideBarContainer extends React.Component {

	// componentChange(){
	// 	const {dispatch, params} = this.props;
 //    	const {accessToken, refreshToken} = params;
 //   	 	dispatch(setTokens({accessToken, refreshToken}));
 //    	dispatch(getMyRecommendations());
	// }

	componentWillMount(){
		const{getPlaylist} = this.props;
		getPlaylist({
			accessToken:this.props.params.accessToken,
		}, true);
		getPlaylist({
			accessToken:this.props.params.accessToken,
		}, false);

	}

	render(){
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
}


function mapStateToProps(state) {
	restPlaylistUri: SideBarState
}



export default connect(mapStateToProps, {
	getPlaylist
})(SideBarContainer);




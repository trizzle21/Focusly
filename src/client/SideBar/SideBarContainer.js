import React from 'react';

import Drawer from 'material-ui/Drawer';

import SideBar from './SideBar';


import {
  getMyRecommendations,
  setTokens,
}   from '../Spotify/SpotifyActions';


class SideBarContainer extends React.Component {

	// componentChange(){
	// 	const {dispatch, params} = this.props;
 //    	const {accessToken, refreshToken} = params;
 //   	 	dispatch(setTokens({accessToken, refreshToken}));
 //    	dispatch(getMyRecommendations());
	// }


	render(){
		return(
			<div> 
				<SideBar />
			</div>
		);
	}

}




export default SideBarContainer;
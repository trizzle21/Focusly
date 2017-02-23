import React, {PropTypes} from 'react';

import Drawer from 'material-ui/Drawer';

import {
  getMyRecommendations,
  setTokens,
}   from '../Spotify/SpotifyActions';


class SideBarContainer extends ReactComponent {
	// static PropTypes = {

	// }

	componentChange(){
		const {dispatch, params} = this.props;
    	const {accessToken, refreshToken} = params;
   	 	dispatch(setTokens({accessToken, refreshToken}));
    	dispatch(getMyRecommendations());
	}


	render(){
		<div> 
			<SideBar />
		</div>

	}

}




export default SideBarContainer;
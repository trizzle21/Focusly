import React, {PropTypes} from 'react';

import Drawer from 'material-ui/Drawer';

import {
  getMyRecommendations,
  setTokens,
}   from '../actions/index';


class SideBar extends ReactComponent {
	static PropTypes = {

	}

	componentChange(){
		const {dispatch, params} = this.props;
    	const {accessToken, refreshToken} = params;
   	 	dispatch(setTokens({accessToken, refreshToken}));
    	dispatch(getMyRecommendations());
	}


	render(){
		
		<Drawer width={250}  open={true} >
		</Drawer>


	}






export default SideBar;
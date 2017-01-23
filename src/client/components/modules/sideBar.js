import React, {PropTypes} from 'react';

import Drawer from 'material-ui/Drawer';


const SideBar = (open}) => (
	<Drawer width={250}  open={open} >
	</Drawer>

)

SideBar.propTypes = {
	open: PropTypes.bool.isRequired,


}

export default SideBar;
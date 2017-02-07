import React,  {PropTypes} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';




export default class MusicMenuItems extends React.Component {
	static propTypes ={
		musicItems: PropTypes.array.isRequired,
	}


	render() {
		{this.props.musicItems.map(function(name, index){
			return <MenuItem value={name}> primaryText={name} />

		})}

	}


}
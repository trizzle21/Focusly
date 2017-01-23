import React, {PropTypes} from 'react';
import { Link } from 'react-router'
 

import { connect } from 'react-redux'

import PresentationalApp from './components'


const styles ={
	appBar: {
		margin:0,
	},
	submit: {
  
  	}

}



class MainApp extends React.Component {
	constructor(props){
		super(props);
		this.state= {
			openDrawer: true,
			openDialog:true,
		}

	}
  	static propTypes = {
    	value: PropTypes.string.isRequired,
    	onChange: PropTypes.func.isRequired
  	}



	submitSession(){
		this.setState({openDialog:false});
	}



  	render() {
  		
	const actions = [
  		<RaisedButton
      		label="Submit"
      		labelPosition="after"
      		primary={true}
      		style={styles.button}
      		containerElement="label"
      		onClick={this.submitSession.bind(this)}
  		/>
    ];
  		//render form here
  		return (
  			<PresentationalApp />
  		)
	}
}

export default MainApp
import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router'

import theme from './customtheme';


const styles = {
  main:{
    marginLeft: 43,
    marginRight: 43,
  },
  slider: {
    marginLeft: 15,
    marginRight: 15,
  },
  counter: {
    marginLeft:15,
    fontSize:16,
  },
  select: {
    marginLeft:15,
  },
  submit: {
  }
};


class EntryForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	
			numOfSessions: 1,
			WorkMusicType: 1,
			RestMusicType: 1,
			SessionSlider: 1.0,

		};
	}
	




   	handleSubmit(event) {
	  	event.preventDefault();	
		  //ajax call?
		  console.log("submitted");
	  }

  	

	// Controls each state change
  	handleSliderChange (event, value) {
  		this.setState({SessionSlider:value});
  	}
	
	RestMusicTypeChange (event, index, value) {
  		this.setState({RestMusicType:value});
  	}

	WorkMusicTypeChange (event, index, value) {
  		this.setState({WorkMusicType:value});
  	}


  	render() {

  		//render form here
  		return (
  <MuiThemeProvider muiTheme={theme}>
 		<form style={styles.main} className="spotify_login" onSubmit={this.handleSubmit}>
  			<Slider step={1.0} value={this.state.SessionSlider} onChange={this.handleSliderChange.bind(this)} min={1} max={10} style={styles.slider}/>
  			<p className="secondaryText" style={styles.counter}>{this.state.SessionSlider} sessions</p>
        
        	<SelectField
          		floatingLabelText="Working Music"
          		value={this.state.WorkMusicType}
          		onChange={this.WorkMusicTypeChange.bind(this)}
              style={styles.select}
        	>
        		<MenuItem value={1} primaryText="Movie Soundtrack" />
        		<MenuItem value={2} primaryText="Relaxing" />
    	    	<MenuItem value={3} primaryText="Classical" />
	        	<MenuItem value={4} primaryText="Surprise Me" />


       	 	</SelectField>

      		<SelectField
          		floatingLabelText="Resting Music"
          		value={this.state.RestMusicType}
          		onChange={this.RestMusicTypeChange.bind(this)}
              style={styles.select}
        	>
        		<MenuItem value={1} primaryText="Rock" />
        		<MenuItem value={2} primaryText="Punk" />
    	    	<MenuItem value={3} primaryText="Top 40" />
	        	<MenuItem value={4} primaryText="Surprise Me" />

        	</SelectField>

          <br />

     

    	</form>
      </MuiThemeProvider>

  		)
  	}


	
}

export default EntryForm
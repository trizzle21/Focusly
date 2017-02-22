import React from 'react';

import SelectField from 'material-ui/SelectField';

import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router'

import theme from './customtheme';
import MusicMenuItems from './musicMenuItems';




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
  	render() {
  		//render form here
  		return (
        <MuiThemeProvider muiTheme={theme}>
 		       <form style={styles.main} className="spotify_login" >
      			<Slider step={1.0} value={this.props.SessionSlider} onChange={this.props.handleSliderChange(data)} min={1} max={10} style={styles.slider}/>
      			<p className="secondaryText" style={styles.counter}>{this.props.SessionSlider}>Cycles</p>
              <SelectField
              		floatingLabelText="Working Music"
              		value={this.props.WorkMusicType}
              		onChange={this.props.WorkMusicTypeChange}
                  style={styles.select}
            	>

              {this.props.recommendationSeeds.map(function(seed){
                  return <MenuItem value={seed} primaryText={seed} />

              })}



           	 	</SelectField>

          		<SelectField
              		floatingLabelText="Resting Music"
              		value={this.prop.RestMusicType}
              		onChange={this.props.RestMusicTypeChange}
                  style={styles.select}
            	>
            		{this.props.recommendationSeeds.map(function(seed){
                  return <MenuItem value={seed} primaryText={seed} />
                })}
            	</SelectField>

              <br />

         

        	</form>
          </MuiThemeProvider>

  		)
  	}


	
}

export default EntryForm
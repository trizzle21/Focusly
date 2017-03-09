import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router'

import theme from '../Spotify/modules/CustomTheme';




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
    marginLeft:30,
    //position:"absolute",
  },
  submit: {
  }
};


class EntryForm extends React.Component {
  	
  handleSliderChange(event, value){
    this.props.dispatch({type:'SLIDER_CHANGE', value: value});
  }

  handleRestChange(event, value, index){
    this.props.dispatch({type:"REST_MUSIC_SELECT", newPlaylist: {
      name: index,
      owner: this.props.UserPlaylists[value].owner.id,
      id:this.props.UserPlaylists[value].id
    }  })
  }

  handleWorkChange(event, value, index){
    this.props.dispatch({type:'WORK_MUSIC_SELECT', newPlaylist: {
      name: index,
      owner: this.props.UserPlaylists[value].owner.id,
      id:this.props.UserPlaylists[value].id
    }});

  }

    render() {
  		//render form here
      if(this.props.error !== ""){
        <MuiThemeProvider muiTheme={theme}>
          <div>Please refresh your token</div>
        </MuiThemeProvider>
      } else if (this.props.isLoading){
        return(
          <MuiThemeProvider muiTheme={theme}>
            <div>Loading... If this lasts longer than 5 seconds, refresh auth token</div>
          </MuiThemeProvider>
        );
      } else {
       return (
        <MuiThemeProvider muiTheme={theme}>
 		       <form style={styles.main} className="spotify_login" >
      			<Slider step={1.0} value={this.props.SessionSlider} onChange={this.handleSliderChange.bind(this)} min={1} max={10} style={styles.slider}/>
      			<p className="secondaryText" style={styles.counter}>{this.props.SessionSlider} Cycles</p>
            <div style={{display: 'inline-block', verticalAlign: 'bottom'}}>
              <SelectField
              		floatingLabelText="Working Music"
              		value={this.props.WorkMusicType.name}
              		onChange={this.handleWorkChange.bind(this)}
                  style={styles.select}
            	>

              {this.props.UserPlaylists.map(function(seed){
                  return <MenuItem value={seed.name} key={seed.id} primaryText={seed.name} />

              })}
           	 	</SelectField>
            </div>
            <div style={{display: 'inline-block', verticalAlign: 'bottom'}}>

          		
              <SelectField
              		floatingLabelText="Resting Music"
              		value={this.props.RestMusicType.name}
              		onChange={this.handleRestChange.bind(this)}
                  style={styles.select}
            	>

              {this.props.UserPlaylists.map(function(seed){
                  return <MenuItem value={seed.name} key={seed.id} primaryText={seed.name} />

              })}
            	</SelectField>
            </div>
              <br />

         

        	</form>
          </MuiThemeProvider>

  		);
  	}
  }


	
}

export default EntryForm
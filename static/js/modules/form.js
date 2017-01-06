import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';

const styles = {
	slider: {
		marginLeft: 12,
		marginRight: 12,
	},
};


class EntryForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	
			numOfSessions: 0,
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
	
	RestMusicTypeChange (event, value) {
  		this.setState({RestMusicType:value});
  	}

	WorkMusicTypeChange (event, value) {
  		this.setState({WorkMusicType:value});
  	}


  	render() {
  		const styles = {
			slider: {
				display: 'flex',
				marginLeft: 50,
				marginRight: 12,
			},
		};

  		//render form here
  		return (
 		
 		<form className="spotify_login" onSubmit={this.handleSubmit}>
  			<Slider step={1.0} value={this.state.SessionSlider} onChange={this.handleSliderChange.bind(this)} min={1} max={10} style={styles.slider}/>
  			<h4>{this.state.SessionSlider}</h4>
        	<SelectField
          		floatingLabelText="Working Music"
          		value={this.state.WorkMusicType}
          		onChange={this.WorkMusicTypeChange.bind(this)}
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
        	>
        		<MenuItem value={1} primaryText="Rock" />
        		<MenuItem value={2} primaryText="Punk" />
    	    	<MenuItem value={3} primaryText="Top 40" />
	        	<MenuItem value={4} primaryText="Surprise Me" />

        	</SelectField>


    		<RaisedButton label="Submit" primary={true} type="submit" value="Post" ontap/>


    	</form>

  		)
  	}


	
}

export default EntryForm
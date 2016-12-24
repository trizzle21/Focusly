import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Slider from 'material-ui/Slider';


class EntryForm extends React.Component {
	constructor() {
		this.state = {
			numOfSessions: 0,
			WorkMusicType: 1,
			RestMusicType: 1,
			SessionSlider: 0.0,

		};
	}
	
   	handleSubmit(event) {
	 	
	}

  	handleSliderChange (event, value) {
  		this.setState({SessionSlider:value})
  	}

  	render() {
  		//render form here
  		return (

  		<Slider step={1.0} value={this.state.SessionSlider} onChange={this.handleSliderChange} min={0} max={10}/>
  		<h4>{this.state.SessionSlider}</h4>
        <SelectField
          floatingLabelText="Working Music"
          value={this.state.WorkMusicType}
          onChange={this.WorkMusicChange}
        >
        	<MenuItem value={1} primaryText="Movie Soundtrack" />
        	<MenuItem value={2} primaryText="Relaxing" />
    	    <MenuItem value={3} primaryText="Classical" />
	        <MenuItem value={4} primaryText="Surprise Me" />

        </SelectField>

      <SelectField
          floatingLabelText="Resting Music"
          value={this.state.RestMusicType}
          onChange={this.RestMusicChange}
        >
        	<MenuItem value={1} primaryText="Rock" />
        	<MenuItem value={2} primaryText="Punk" />
    	    <MenuItem value={3} primaryText="Top 40" />
	        <MenuItem value={4} primaryText="Surprise Me" />

        </SelectField>




    	<IconButton iconClassName="muidocs-icon-custom-spotify" disabled={true} />


  		)
  	}


	}
}
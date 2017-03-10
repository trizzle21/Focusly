import React from 'react';
import { Sound } from 'react-sound';



export default class Alarm extends React.Component {

	handleSongFinishedPlaying(){
		this.props.dispatch({type:"START_STOP_ALARM"});
	}

	render(){
		if(this.props.AlarmSound){
			return (
				<Sound
    			url="../static/TempleBell.mp3"
    			playStatus={Sound.status.PLAYING}
    			onFinishedPlaying={this.handleSongFinishedPlaying} 
    		/>
    	); 

		
		} else {
			return (<div></div>)
		}

	}
}
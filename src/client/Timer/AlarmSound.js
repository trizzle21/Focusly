import React from 'react';
import Sound from 'react-sound';



export default class Alarm extends React.Component {

	handleSongFinishedPlaying(){
		console.log("song Finished");
		this.props.dispatch({type:"STOP_ALARM"});
	}

	render(){
		console.log(this.props.alarmSound);
		if(this.props.alarmSound){
			return (
				<Sound
    			url="../static/TempleBell.mp3"
    			playStatus={Sound.status.PLAYING}
    			onFinishedPlaying={() => this.props.dispatch({type:"STOP_ALARM"})} 
    			/>
    		); 

		
		} else {
			return (<div></div>)
		}

	}
}
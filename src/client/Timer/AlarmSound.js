import React from 'react';
import Sound from 'react-sound';



export default class Alarm extends React.Component {


	render(){
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
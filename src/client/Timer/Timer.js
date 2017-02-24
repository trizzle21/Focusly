import React from 'react';

import { Link } from 'react-router';


import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import CircularProgress from 'material-ui/CircularProgress';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../Spotify/modules/CustomTheme.js';



const styles ={
	appBar: {
		margin:0,
	},  
	circProgress: {
    	position: "absolute",
    	marginTop:20,
    	marginLeft:220,
  	},
 	buttons: {
  		margin: 12,
  	},

}



export default class Timer extends React.Component {
	render() {
		var minutes = Math.floor(this.props.secondsRemaining/60);
		var seconds = this.props.secondsRemaining % 60;
		if(seconds < 10) {
			seconds = '0' + seconds;
		}
		return (
			<MuiThemeProvider muiTheme={theme}>
			   	<div>
			   	<AppBar
                  style={styles.appBar}
                  title="Focusly"
                  iconElementLeft={<Link to="/tabata"><IconButton  ><ArrowBack color={"white"}/></IconButton></Link>}
              	/>

				<h4>Cycles: {this.props.cycles}</h4>



				<div className="count_down_clock">
					<div className="circularProgress">
						<CircularProgress
          					mode="determinate"
          					value={this.props.completed}
          					size={450}
          					thickness={15}
          					style={styles.circProgress}
          					color="#009688"
        				/>
        			</div>
        			<div className="timer_button">
						<div className="time_count">{minutes}:{seconds} </div>	
						<div className="pause_button">
							<RaisedButton label="Start/Start" primary={true} style={styles.buttons} onClick={this.props.pause.bind(this)}/>
						</div>
					</div>
				</div>
				</div>
			</MuiThemeProvider>
		)
	}
}


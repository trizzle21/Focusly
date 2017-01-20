import React from 'react';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardTitle} from 'material-ui/Card';
import { Link } from 'react-router'
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


const styles = {
  button: {
    margin: 12,
    
  },
  iconStyles: {
  	fill: "#323030",
  },
  main:{
  	margin: 12,
  },
  header: {
  	display:"inline-block",
  	marginTop: 50,

    textAlign:"center",

  },
  header_image:{
  	display:"inline-block",
  	height:80,
  	width:80,
  	marginTop:30,
  },
  paper: {
  	  height: 332,
  	  width: 667,
  	  margin: 20,
  	  display: 'inline-block',
  }
}

const sheet = 
		<div style={styles.main}>
		<div className="row">
			<div className="col-3">
				<img 
				style={styles.header_image}
				src='static/images/clock_logo.svg' 
				/>
			</div>
			<div className="col-8">
				<h1 style={styles.header}>Welcome to Focusly</h1>
			</div>
		</div>
			<p>What is Focusly? Focusly is a Spotify powered Tabata Timer that allows you to choose the genre of music you want for both your working 
			and resting time, and converts it into a playlist that changes when each session changes.</p>
			<p>It requires a Spotify Premium account.</p>
	
	<a href="/login">
	<RaisedButton
			label="Sign In to Spotify Premium"
			labelPosition="after"
			primary={true}
			style={styles.button}
			containerElement="label"
			icon={<ActionAndroid />}

	/>
	</a>
	</div>;

const SignIn = () => (
  		<MuiThemeProvider>
			<div className="SignInBody">
				<div className="col-3">
					
				</div>
				<div className="col-6">
					<Paper children={sheet} style={style.paper} zDepth={3}/>
    			</div>
				<div className="col-3"></div>


			</div>
		</MuiThemeProvider>
);




export default SignIn
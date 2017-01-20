import React from 'react';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardTitle} from 'material-ui/Card';
import { Link } from 'react-router'
import Paper from 'material-ui/Paper';

import theme from './components/customtheme';


const styles = {
  iconStyles: {
  	fill: "#323030",
  },
  main:{
  	marginRight: 40,
  	marginLeft:40,
  },
  header_title: {
	marginLeft:20,
	paddingTop:20,
  },
  header_image:{
  	display:"inline-block",
  	height:60,
  	width:65,
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
			<div className="col-9" className="header">
				<div className="header_image">
				<img 
				style={styles.header_image}
				src='static/images/clock_logo.png' 
				/>
				</div>
				<div className="header_title">
				<h1 style={styles.header_title}>Focusly</h1>
				</div>
			</div>
		</div>
			<p className="secondaryText">What is Focusly? Focusly is a Spotify powered Tabata Timer that allows you to choose the genre of music you want for both your working 
			and resting time, and converts it into a playlist that changes when each session changes.</p>
			<p className="secondaryText">It requires a Spotify Premium account.</p>
	
	<div className="signinButton">
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
	</div>
	</div>;

const SignIn = () => (
  		<MuiThemeProvider>
			<div className="SignInBody">
				<div className="col-3">
					
				</div>
				<div className="col-6">
					<Paper className="card" children={sheet} style={styles.paper} zDepth={3}/>
    			</div>
				<div className="col-3"></div>


			</div>
		</MuiThemeProvider>
);




export default SignIn
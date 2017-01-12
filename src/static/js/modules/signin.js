import React from 'react';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardTitle} from 'material-ui/Card';


const styles = {
  button: {
    margin: 12,
    marginLeft:150,
  },
  iconStyles: {
  	fill: "#323030",
  },
  main:{
  	margin: 12,
  },
  header: {
  	display:"inline-block",
  	marginLeft: 50,
    textAlign:"center",

  },
  header_image:{
  	display:"inline-block",
  	height:80,
  	width:80,
  	marginTop:30,
  }
}


const SignIn = () => (
  		<MuiThemeProvider>
			<div className="SignInBody">
				<div className="col-3"></div>
				<div className="col-6">
					<Card>
						<div style={styles.main}>
							<img 
								style={styles.header_image}
								src='static/images/clock_logo.svg' 
							/>
							<h1 style={styles.header}>Welcome to Focusly</h1>
						<p>What is Focusly? Focusly is a Spotify powered Tabata Timer that allows you to choose the genre of music you want for both your working and resting, and converts it into a 
						playlist that changes when each session changes.</p>
						<p>It requires a Spotify Premium account.</p>

						<RaisedButton
      						label="Sign In to Spotify Premium"
      						labelPosition="after"
      						primary={true}
      						style={styles.button}
      						containerElement="label"
      						icon={<ActionAndroid />}

    					/>
    					</div>
					</Card>

    			</div>
				<div className="col-3"></div>


			</div>
		</MuiThemeProvider>
);


export default SignIn
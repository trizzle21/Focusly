import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import EntryForm from './components/form.js'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

import Paper from 'material-ui/Paper';
import theme from './components/customtheme';



const styles = {
  paper: {
	height: 332,
	width: 667,
	margin: 20,
	display: 'inline-block',
  },
  title: {
  	marginLeft: 43,
    marginRight: 43,
    

  }


}

const form = <div><CardTitle style={styles.title} title="Set Up Tabata Session" subtitle="To get started, choose Tabata length and number of sessions" /> 
				<EntryForm /></div>;


const FormCard = () => (
	<MuiThemeProvider muiTheme={theme}>
			<div>

				<div className="col-3"></div>
				<div className="col-6">
					<Paper className="card" children={form} style={styles.paper} zDepth={3}/>
    			</div>
				<div className="col-3"></div>

    		</div>
		</MuiThemeProvider>
);



export default FormCard;
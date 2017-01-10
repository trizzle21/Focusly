import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import EntryForm from './components/form.js'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';




const FormCard = () => (
  		<MuiThemeProvider>
			<div>
				<Card>
					<CardTitle title="Set Up Tabata Session" subtitle="To get started, choose Tabata length and number of sessions" />
					<EntryForm />
    			</Card>


    		</div>
		</MuiThemeProvider>
);



export default FormCard;
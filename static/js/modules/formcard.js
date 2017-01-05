import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import EntryForm from './form.js'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



const FormCard = () => (
  		<MuiThemeProvider>
			<div>
				<h4>Hello</h4>
				<Card>
					<CardTitle title="Card title" subtitle="Card subtitle" />
					<EntryForm />
    			</Card>
    		</div>
		</MuiThemeProvider>
);



export default FormCard;
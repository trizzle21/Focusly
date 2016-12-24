import React from 'react';
import {Card} from 'material-ui/Card';
import EntryForm from './form.js'; 




class FormCard extends React.Component {
  


render() {
  		//render form here
  	return (
		<Card>
			<CardTitle title="Card title" subtitle="Card subtitle" />
			<EntryForm />
    	</Card>

	)
  	}

}

export default FormCard
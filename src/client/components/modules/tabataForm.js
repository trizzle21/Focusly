import React, {PropTypes} from 'react';

import EntryForm from './form.js'; 


import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';


class TabataForm extends React.Component {
	static propTypes {
		openDialog:PropTypes.bool.isRequired,
		submitSession: PropTypes.func.isRequired,
	}

	render(){
		const actions = [
  			<RaisedButton
  				label="Submit"
				labelPosition="after"
				primary={true}
				style={styles.button}
				containerElement="label"
				onClick={this.propssubmitSession.bind(this)}
			/>
		];
		
		return (
  		<MuiThemeProvider muiTheme={theme}>
  			<div>
				<Dialog
	    			title="Set Up Tabata Session"
	    			subtitle="To get started, choose Tabata length and number of sessions"
					actions={actions}
	   				modal={true}
	    			open={this.props.openDialog}
				>
				<EntryForm />

				</Dialog>
			</div>
		</MuiThemeProvider>

		);
	}

}


export default TabataForm
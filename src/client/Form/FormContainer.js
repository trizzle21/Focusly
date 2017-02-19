import React, {PropTypes} from 'react';

import EntryForm from './form.js'; 


import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';


class FormContainer extends React.Component {
	static propTypes {
		openDialog:PropTypes.bool.isRequired,
		submitSession: PropTypes.func.isRequired,
		//
		SessionSlider: PropTypes.number.isRequired,
		WorkMusicType: PropTypes.number.isRequired,
		RestMusicType: PropTypes.number.isRequired,
		SessionSlider: PropTypes.number.isRequired,

		//functions
		submitSession: PropTypes.func.isRequired,





	}

	render(){
		const {
			openDialog,submitSession
		} = this.props

		const actions = [
  			<RaisedButton
  				label="Submit"
				labelPosition="after"
				primary={true}
				style={styles.button}
				containerElement="label"
				onClick={this.props.submitSession}
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
				<EntryForm 
					SessionSlider={this.props.SessionSlider}





				/>

				</Dialog>
			</div>
		</MuiThemeProvider>

		);
	}

}


function mapStateToProps(state){
	return {
		openDialog:state.openDialog,


	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
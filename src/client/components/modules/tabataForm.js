import React from 'react';




export default const TabataForm = ({ openDialog }) => (
	<Dialog
	    title="Set Up Tabata Session"
	    subtitle="To get started, choose Tabata length and number of sessions"
		actions={actions}
	    modal={true}
	    open={this.props.openDialog}
	>
	  
	<EntryForm />

	</Dialog>
);
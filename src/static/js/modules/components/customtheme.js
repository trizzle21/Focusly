import React from 'react';
import {teal500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import RaisedButton from 'material-ui/RaisedButton';




const muiTheme = getMuiTheme({
  raisedButton: {
    primaryColor: teal500,

  },
  slider: {
  	selectionColor: teal500,

  }
});

export default muiTheme
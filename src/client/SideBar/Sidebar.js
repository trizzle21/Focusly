import React from 'react';

import PlayButton from './PlayButton';

import Drawer from 'material-ui/Drawer';
import theme from '../Spotify/modules/CustomTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
  button: {
  	marginTop:10,
  	marginLeft: 50,
  	width:200,
  },
  select: {
  	marginLeft:18,
  }

}


class SideBar extends React.Component {

	render(){
		return(
			<MuiThemeProvider muiTheme={theme}>
				<div>
					<Drawer width={300}  open={true} >
						<h3 style={styles.select}>Focusly</h3>
						<SelectField
              				floatingLabelText="Working Music"
              				value={this.props.WorkMusicType.name}
              				//onChange={this.handleWorkChange.bind(this)}
                  			style={styles.select}
            			>

              			{this.props.UserPlaylists.map(function(seed){
                  			return <MenuItem value={
                      			{		
                        			name:seed.name,
                        			owner:seed.owner.id,
                        			id:seed.id,
                      			}
                    	} key={seed.id} primaryText={seed.name} />

             	 		})}
           	 			</SelectField>

          		
              			<SelectField
              				floatingLabelText="Resting Music"
              				value={this.props.RestMusicType.name}
              				//onChange={this.handleRestChange.bind(this)}
                  			style={styles.select}
            			>

              			{this.props.UserPlaylists.map(function(seed){
                  			return <MenuItem value={
                      		{
                        		name:seed.name,
                        		owner:seed.owner.id,
                        		id:seed.id,
                      		}
                    	} key={seed.id} primaryText={seed.name} />

              			})}
            			</SelectField>
    					
    					<RaisedButton label="Change Playlists"  style={styles.button} />
    					
    					<a href='/refresh_token'>
    						<RaisedButton label="Refresh Auth Token" primary={true} style={styles.button} />
    					</a>

						<PlayButton uri={this.props.uri}/>
					</Drawer>
				</div>
			</MuiThemeProvider>
		);
	}
}





export default SideBar;


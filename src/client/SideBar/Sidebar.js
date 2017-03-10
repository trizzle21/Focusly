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
  	handleRestChange(event, value, index){
    	this.props.dispatch({type:"REST_MUSIC_SELECT", newPlaylist: {
    	  name: index,
    	  owner: this.props.UserPlaylists[value].owner.id,
   	   	  id:this.props.UserPlaylists[value].id
   		 }  })
  	}

 	handleWorkChange(event, value, index){
    	this.props.dispatch({type:'WORK_MUSIC_SELECT', newPlaylist: {
      		name: index,
      		owner: this.props.UserPlaylists[value].owner.id,
      		id:this.props.UserPlaylists[value].id
    	}});

  	}

  	changePlaylists(){
  		this.props.getPlaylist({
				accessToken:this.props.params.accessToken,
				playlist:this.props.WorkMusicType,
				work:true
			});
		this.props.getPlaylist({
				accessToken:this.props.params.accessToken,
				playlist:this.props.RestMusicType,
				work:false,
		});

  	}

	render(){
		return(
			
			<MuiThemeProvider muiTheme={theme}>
				<div>
					<Drawer width={300}  open={true} >
						<h3 style={styles.select}>Focusly</h3>
						<SelectField
              				floatingLabelText="Working Music"
              				value={this.props.WorkMusicType.name}
              				onChange={this.handleWorkChange.bind(this)}
                  			style={styles.select}
            			>

              			{this.props.UserPlaylists.map(function(seed){
                  			return <MenuItem value={seed.name} key={seed.id} primaryText={seed.name} />

             	 		})}
           	 			</SelectField>

          		
              			<SelectField
              				floatingLabelText="Resting Music"
              				value={this.props.RestMusicType.name}
              				onChange={this.handleRestChange.bind(this)}
                  			style={styles.select}
            			>

              			{this.props.UserPlaylists.map(function(seed){
                  			return <MenuItem value={seed.name} key={seed.id} primaryText={seed.name} />

              			})}
            	</SelectField>
    					
    					<RaisedButton label="Change Playlists" onClick={this.changePlaylists.bind(this)}  style={styles.button} />
    					
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


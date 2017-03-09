import React from 'react';

const size = {
  large: {
    width: 300,
    height: 380,
  },
}

export default class PlayButton extends React.Component {
	render(){
		var source= 'https://embed.spotify.com/?uri='+ this.props.uri + '&theme=white';
    return(
			<div>
			   <div className="SpotifyDiv">
          <iFrame
       			className="SpotifyPlayer"
        		src={source}
            width={size.width}
            height={300}
            frameBorder="0"
            allowTransparency="true"
			   />
        </div>
			</div>
		);

	}
}
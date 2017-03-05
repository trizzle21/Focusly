import React from 'react';

const size = {
  large: {
    width: 300,
    height: 380,
  },
}

export default class PlayButton extends React.Component {
	render(){
		return(
			<iFrame
       			className="SpotifyPlayer"
        		src={'https://embed.spotify.com/?uri=${this.props.uri}&view=coverartthis.props.view&theme=blakc'}
        		width={size.large.width}
        		height={size.large.height}
        		frameBorder="0"
        		allowTransparency="true"

			/>
		);

	}
}
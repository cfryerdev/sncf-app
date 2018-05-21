import React from 'react';
import gamemap from '../../Data/gamemap.json';

export default class Cube extends React.Component {
	constructor(props) {
		super(props);
  }

  renderCube = () => {
    switch(this.props.color) {
      case 'red':
        return <img src={gamemap.media.cube_red} />;
      case 'green':
        return <img src={gamemap.media.cube_green} />;
      case 'blue':
        return <img src={gamemap.media.cube_blue} />;
      case 'black':
        return <img src={gamemap.media.cube_black} />;
      case 'yellow':
        return <img src={gamemap.media.cube_yellow} />;
      case 'purple':
        return <img src={gamemap.media.cube_purple} />;
      
      default:
      case 'white':
        return <img src={gamemap.media.cube_white} />;
    }
  }

  render() {
    return this.renderCube();
  }
}
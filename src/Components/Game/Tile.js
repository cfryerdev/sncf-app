import React from 'react';
import styled from 'styled-components';
import EventWrapper from '../../Utilities/EventWrapper';
import gamemap from '../../Data/gamemap.json';
import Cube from './Cube';

export default class Tile extends React.Component {
  constructor(state, props) {
    super(state, props);
    this.state = {
      hasCube: false,
      tileWorth: 0,
      tileCost: 1
    }
  }

  componentDidMount() {
    this.setWorth();
  }

  renderIcon = (type) => {
    switch(this.props.tileType) {
      case 'start':
        return this.renderStart();
      case 'mountain':
        return this.renderMountain();
      case 'null':
        return null;
      default:
        return this.renderCity();
    }
  }

  setWorth = () => {
    switch(this.props.tileType) {
      case 'town':
        this.setState({ tileWorth: 1 });
        break;
      case 'city':
        this.setState({ tileWorth: 2 });
        break;
      case 'capital':
        this.setState({ tileWorth: 3 });
        break;
    }
  }

  renderStart = () => {
    return <img src={gamemap.media.start} />;
  }

  renderMountain = () => {
    return <img src={gamemap.media.mountain} />;
  }

  renderCube = () => {
    if (this.props.tileType != 'null') {
      return <Cube color="blue" />
    }
  }

  renderCity = () => {
    return <img src={gamemap.media.city} />;
  }

  onClickAddCube = () => {
    this.setState({ hasCube: !this.state.hasCube }, () => {
      this.publishAmount();
    });
  }

  publishAmount = () => {
    if (this.state.hasCube) {
      EventWrapper.emit('ADDAMOUNT', { amount: this.state.tileWorth });
    } else {
      EventWrapper.emit('REMOVEAMOUNT', { amount: this.state.tileWorth });
    }
  }

  render() {
    const { tileType } = this.props;
    return (
          <div className={'hexagon ' + tileType } onClick={this.onClickAddCube}>
            <div className="hexagontent">
              { this.state.hasCube 
                ? this.renderCube()
                : (this.props.tileType && this.renderIcon(tileType))
              }
            </div>
          </div>
    ); 
  }
}

import React, { Fragment } from 'react';
import styled from 'styled-components';
import EventWrapper from '../../Utilities/EventWrapper';
import Cube from './Cube';

const token_Add;
const token_Remove;

export default class CubePen extends React.Component {
  constructor(state, props) {
    super(state, props);
    this.state = {
      amount: 30
    }
  }

  componentDidMount() {
    var eventName = 'CUBEPEN_REMOVE_' + this.props.color;
    token_Remove = EventWrapper.addListener(eventName, data => {
      this.setState({ amount: this.state.amount-- });
    });

    if (!this.props.color) {
      this.setState({ amount: 0 });
    }
  }

  componentWillUnmount() {
    token_Remove.remove();
    //token_Add.remove();
  }

  render() {
    var cubes = [];
    for (var i = 0; i < this.state.amount; i++) {
      cubes.push(<Cube key={i}  color={this.props.color} />);
    }
    
    return <div style={{
      background: '#fff',
      display: 'inline-table',
      width: 250,
      height: 200,
      margin: 8,
      padding: 10,
      border: '5px solid #777'
    }}>
      <div style={{ marginBottom: 10 }}>
        {
          this.props.color 
          ? <span>Remaining: {this.state.amount}</span>
          : <span>Discarded: {this.state.amount}</span>
        }
      </div>
      {cubes}
    </div>;
  }
}
import React, { Fragment } from 'react';
import styled from 'styled-components';
import EventWrapper from '../../Utilities/EventWrapper';
import Cube from './Cube';
import ScoreBoard from './ScoreBoard';

const token_Add;
const token_Remove;

export default class StockMarket extends React.Component {
  constructor(state, props) {
    super(state, props);
    this.state = {
      total: 0,
      maxScore: 20,
      market: [
        { 1 : []},
      ],
      red: 0,
      blue: 0,
      green: 0,
      yellow: 0,
      purple: 0,
      black: 0
    }
  }

  componentDidMount() {
    token_Add = EventWrapper.addListener('ADDAMOUNT', data => {
      this.setState({ total: this.state.total + data.amount });
    });
    token_Remove = EventWrapper.addListener('REMOVEAMOUNT', data => {
      this.setState({ total: this.state.total - data.amount });
    });
  }

  componentWillUnmount() {
    token_Add.remove();
    token_Remove.remove();
  }

  renderScoreBox = (num) => {
    return (
      <div key={num} style={{
        background: '#FFF',
        display: 'inline-block',
        width: 80,
        height: 80,
        margin: 4,
        padding: 5, 
        border: '4px solid #777'
      }}>
        {num}
      </div>
    );
  }

  render() {
    var scores = [];
    for (var i = 0; i < (this.state.maxScore + 1); i++) {
      scores.push(this.renderScoreBox(i));
    } 
    return (
        <Fragment>
          <div>{scores}</div>
          <div style={{paddingLeft: 10, paddingBottom: 10 }}>
            Total Market Value: { this.state.total }
          </div>
        </Fragment>
    );
  }
}
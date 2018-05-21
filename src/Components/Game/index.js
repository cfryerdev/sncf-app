import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { render } from 'react-dom';
import StockMarket from './StockMarket';
import CubeRow from './CubeRow';
import Board from './Board';
import CubePen from './CubePen';
import YourTurnBar from './YourTurnBar';

const GameContainer = styled.div`
	padding: 20px;
`;

export default class Game extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <YourTurnBar />

        <GameContainer>
          <h3>Stock Prices</h3>
          <StockMarket />

          <h3>Current Map</h3>
          <Board />

          <h3>Remaining Cubes</h3>
          <CubePen color="purple" />
          <CubePen color="black" />
          <CubePen color="red" />
          <CubePen color="green" />
          <CubePen color="blue" />
          <CubePen color="yellow" />
          <CubePen />
        </GameContainer>

      </Fragment>
    );
  }
}
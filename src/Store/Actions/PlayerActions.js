import {
  START_TURN,
  END_TURN,
  PLACE_CUBES,
  TRADE_CUBES
} from '../Types';

export const StartTurn = data => ({ 
  type: START_TURN, 
  payload: data 
});

export const EndTurn = data => ({ 
  type: END_TURN, 
  payload: data 
});

export const PlaceCubes = data => ({ 
  type: PLACE_CUBES, 
  payload: data 
});

export const TradeCubes = data => ({ 
  type: TRADE_CUBES, 
  payload: data 
});
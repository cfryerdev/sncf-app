import {
  START_GAME,
  END_GAME,
  UPDATE_MARKET,
  UPDATE_PENS
} from '../Types';

export const StartGame = data => ({ 
  type: START_GAME, 
  payload: data 
});

export const EndGame = data => ({ 
  type: END_GAME, 
  payload: data 
});

export const UpdateMarket = data => ({ 
  type: UPDATE_MARKET, 
  payload: data 
});

export const UpdatePens = data => ({ 
  type: UPDATE_PENS, 
  payload: data 
});
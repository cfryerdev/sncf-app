import {
  HOST_GAME,
  JOIN_GAME
} from '../Types';

export const HostGame = data => ({ 
  type: HOST_GAME, 
  payload: data 
});

export const JoinGame = data => ({ 
  type: JOIN_GAME, 
  payload: data 
});
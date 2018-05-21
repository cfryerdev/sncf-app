import IniitialState from '../InitialState';
import {
  START_TURN,
  END_TURN,
  PLACE_CUBE,
  TRADE_CUBE,
  SELECT_COLOR,
  UPDATE_PENS
} from '../Types';

const rootReducer = (state = IniitialState, action) => {
  switch (action.type) {

    case START_TURN:
      return state;

    default:
      return state
  }
}

export default rootReducer;
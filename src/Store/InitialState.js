const InitialState = {
  gameId: '',
  playerId: '',
  remainingCubes: [
    { red: 30 },
    { blue: 30 },
    { black: 30 },
    { green: 30 },
    { yellow: 30 },
    { purple: 30 }
  ],
  myStock: [
    { red: 0 },
    { blue: 0 },
    { black: 0 },
    { green: 0 },
    { yellow: 0 },
    { purple: 0 }
  ],
  stockPrices: [
    { red: 0 },
    { blue: 0 },
    { black: 0 },
    { green: 0 },
    { yellow: 0 },
    { purple: 0 }
  ],
  placedCubes: [
    {}
  ]
};

export default InitialState;
import React from 'react';
import { Switch, Route } from 'react-router';
import Game from './Components/Game';

const Routes = () => (
	<Switch>
		  <Route path='/' exact component={Game} />
	</Switch>
)

export default Routes;
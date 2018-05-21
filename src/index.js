import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './Content/style.bootstrap.css';
import './Content/style.hex.css';
import './Content/style.main.css';


let toastContainer;

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
				<Routes  />
			</BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));


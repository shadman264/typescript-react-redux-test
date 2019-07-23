import React from 'react';

// import Navbar from './module/header/Navbar/Navbar.component';
import App from './App';

import './index.scss';

import {Router, Route} from 'react-router-dom';
import { createBrowserHistory } from "history";

function Root() {
  const history = createBrowserHistory()
  return (
    <Router history={history}>
      <div>
        <Route exact path='/' component={App} />
      </div>
    </Router>
  );
}

export default Root;

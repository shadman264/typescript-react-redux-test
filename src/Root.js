import React from 'react';

import UsersTable from './module/body/components/UsersTable/UsersTable.container';
import Navbar from './module/header/components/Navbar/Navbar.component';

import './index.scss';

import {Router, Route} from 'react-router-dom';
import { createBrowserHistory } from "history";

function Root() {
  const history = createBrowserHistory()
  return (
    <Router history={history}>
      <div>
        <Navbar/>
        <Route exact path='/' component={UsersTable} />
      </div>
    </Router>
  );
}

export default Root;

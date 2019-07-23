import React from 'react';

import UsersTable from './module/body/components/UsersTable/UsersTable.container';

import './index.scss';

import {Router, Route} from 'react-router-dom';
import { createBrowserHistory } from "history";

function Root() {
  const history = createBrowserHistory()
  return (
    <Router history={history}>
      <div>
        <Route exact path='/' component={UsersTable} />
      </div>
    </Router>
  );
}

export default Root;

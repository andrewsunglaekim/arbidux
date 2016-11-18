import React from 'react';

import { Route } from 'react-router'
import App from '../App';

module.exports = (
  <Route path='/'component={App}>
    <Route path='/arbidoo/:size' component={App}/>
  </Route>
)

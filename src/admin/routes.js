import React from 'react';
import { Route } from 'react-router';

import AdminView from "./AdminView";

export default [
  <Route name="React Admin" path="/react-admin/:model" component={AdminView}/>
];

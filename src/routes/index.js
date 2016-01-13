import React                 from 'react';
import { Route, IndexRedirect, IndexRoute, Redirect } from 'react-router';
import App              from '../components/app';
import Add              from '../components/grid';

export default (
  <Route path='/' >
    <IndexRoute component={App} />
    <Route path='/add' component={Add} />
    <Redirect from='*' to='/404' />
  </Route>
);

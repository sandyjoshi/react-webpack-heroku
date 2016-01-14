import React                 from 'react';
import { Route, IndexRedirect, IndexRoute, Redirect } from 'react-router';
import ContactManagerView              from '../components/contactManagerView';

export default (
  <Route path='/' >
    <IndexRoute component={ContactManagerView} />
    <Redirect from='*' to='/' />
  </Route>
);

import React from 'react';
import App from './components/app';
import '../css/app.scss';
import ReactDOM       from 'react-dom';
import Root           from './containers/Root';
import configureStore from './store/configureStore';
import createHistory        from 'history/lib/createBrowserHistory';

let injectTapEventPlugin = require("react-tap-event-plugin");
//Needed for onTouchTap
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const store  = configureStore({}, createHistory);

const node = (
  <Root store={store} />
);

ReactDOM.render(node, document.getElementById('app') );

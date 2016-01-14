import {
  combineReducers
}
from 'redux';
import {
  routerStateReducer
}
from 'redux-router';
import dialog from './dialog';

export default combineReducers({
  dialog,
  router: routerStateReducer
});

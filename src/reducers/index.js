import {
  combineReducers
}
from 'redux';
import {
  routerStateReducer
}
from 'redux-router';
// import list from './list';

export default combineReducers({
  // list,
  router: routerStateReducer
});

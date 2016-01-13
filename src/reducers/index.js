import {
  combineReducers
}
from 'redux';
import {
  routerStateReducer
}
from 'redux-router';
import grid from './grid';

export default combineReducers({
  grid,
  router: routerStateReducer
});

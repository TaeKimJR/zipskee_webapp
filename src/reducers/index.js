import { combineReducers } from 'redux';
import authed from './authed';
import entities from './entities';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  authed,
  entities,
  routing
});

export default rootReducer;

import session from './session_reducer';
import errors from './errors_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  errors,
  session
});

export default rootReducer;

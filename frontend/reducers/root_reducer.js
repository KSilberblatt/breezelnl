import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  errorsReducer,
  sessionReducer
});

export default rootReducer;

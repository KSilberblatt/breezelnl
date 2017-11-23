import sessionErrorsReducer from './session_errors_reducer';
import errorsReducer from './errors_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  errorsReducer,
  sessionErrorsReducer
});

export default rootReducer;

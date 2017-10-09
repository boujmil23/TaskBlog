import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TaskReducer from './TaskReducer';

export default combineReducers({
      form: formReducer,
      Task: TaskReducer
  });

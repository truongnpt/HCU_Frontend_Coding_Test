import { combineReducers } from '@reduxjs/toolkit';
import tasksReducer from '../app/containers/Tasks/slice';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;

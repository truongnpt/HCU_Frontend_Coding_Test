import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../store/rootState';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.tasks || initialState;

export const selectTasks = createSelector(
  [selectDomain],
  (taskState) => taskState
);

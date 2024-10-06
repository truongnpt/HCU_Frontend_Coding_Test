import { takeLatest, call, put } from 'redux-saga/effects';
import { actions } from './slice';
import { getTasks } from '../../services/task';
import { PayloadAction } from '@reduxjs/toolkit';
function* fetchTasksSaga(action: PayloadAction<string>) {
  const filter = action.payload;
  try {
    const data: Task.Item[] = yield call(getTasks, filter);
    yield put(actions.fetchTasksSuccess(data));
  } catch (error) {
    yield put(actions.fetchTasksFailure(error as Error));
  }
}

export function* tasksSaga() {
  yield takeLatest(actions.fetchTasks.type, fetchTasksSaga);
}

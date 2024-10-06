import { all } from 'redux-saga/effects';
import { tasksSaga } from '../app/containers/Tasks/saga';

export default function* rootSaga() {
  yield all([tasksSaga()]);
}

import { spawn } from 'redux-saga/effects';
import watchSearchSkillsSaga from './search-skills-saga';
import watchChangeSearchSaga from './change-search-saga';

export default function* saga() {
  yield spawn(watchChangeSearchSaga);
  yield spawn(watchSearchSkillsSaga);
}
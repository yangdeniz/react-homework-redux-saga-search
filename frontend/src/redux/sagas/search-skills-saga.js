import { cancel, put, retry, takeLatest } from 'redux-saga/effects';
import { ACTIONS } from '../actions/actions';
import { searchSkillsFailure, searchSkillsSuccess } from '../actions/action-creators';
import { searchSkills } from '../../api/search-skills';

function* handleSearchSkillsSaga(action) {
  if (!action.payload.search) {
    yield put(searchSkillsSuccess([]));
    yield cancel();
  }
  try {
    const retryCount = 3;
    const retryDelay = 1000;
    const data = yield retry(retryCount, retryDelay, searchSkills, action.payload.search);
    yield put(searchSkillsSuccess(data));
  }
  catch (e) {
    yield put(searchSkillsFailure(e.message));
  }
}

function* watchSearchSkillsSaga() {
  yield takeLatest(ACTIONS.SEARCH_SKILLS_REQUEST, handleSearchSkillsSaga);
}

export default watchSearchSkillsSaga;
import { debounce, put } from 'redux-saga/effects';
import { ACTIONS } from '../actions/actions';
import { searchSkillsRequest } from '../actions/action-creators';

function* handleChangeSearchSaga(action) {
  yield put(searchSkillsRequest(action.payload.search.trim()));
}

function* watchChangeSearchSaga() {
  yield debounce(100, ACTIONS.CHANGE_SEARCH_FIELD, handleChangeSearchSaga);
}

export default watchChangeSearchSaga;
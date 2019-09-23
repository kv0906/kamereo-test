import TYPE from './AppActionType';
import { takeLatest, takeEvery, put, all} from 'redux-saga/effects';
import { getStoreInfo, editStoreProfile } from '../services/API/Api';
import { toast } from 'react-toastify';

function* fetchStoreInfoSaga(action) {
  const {res}  = yield getStoreInfo(action.payload.id)
  if (res) {
    yield put({ type: TYPE.HANDLE_STORE_FETCH_SUCCESS, payload: res.data});
  }
  else {
    toast('SERVER OCCURS AN ERROR.');
  }
}
function* editStoreProfileSaga(action) {
  yield editStoreProfile(action.payload);
  yield put({type: TYPE.EDIT_STORE_PROFILE_SUCCESS});
  yield toast('EDIT STORE PROFILE SUCCESS');
}

function* watchStoreInfoSaga() {
  yield takeLatest(TYPE.HANDLE_STORE_FETCH, fetchStoreInfoSaga)
  yield takeEvery(TYPE.EDIT_STORE_PROFILE, editStoreProfileSaga)
}

export default function* rootSaga() {
  yield all([
    watchStoreInfoSaga(),
  ]);
}
import {takeLatest, put, call} from 'redux-saga/effects';
import {WEATHER_FORECAST_FETCH, fetchDataSuccess} from '../store/action';
import {fetchData} from '../lib/api';

export function* getAPIData(zipCode) {
  try {
    const zipValue = zipCode.zipCode;
    const data = yield call(fetchData, zipValue);
    yield put(fetchDataSuccess(data));
  } catch (e) {
    console.log(e);
  }
}
export default function* rootSaga() {
  yield takeLatest(WEATHER_FORECAST_FETCH, getAPIData);
}

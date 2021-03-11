import {takeLatest, put, call, take} from 'redux-saga/effects';
import {WEATHER_FORECAST_FETCH, fetchDataSuccess} from '../../store/action';
import rootSaga, {getAPIData} from '../Sagas';
import {fetchData} from '../../lib/api';

describe('rootSaga', () => {
  const genObject = rootSaga();
  //genObject.next();
  it('should wait for every FORECAST_FETCH action and call getAPIData', () => {
    expect(genObject.next().value).toEqual(
      takeLatest(WEATHER_FORECAST_FETCH, getAPIData),
    );
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBe(true);
  });
});

describe('getAPIData', () => {
  const zipCode = {zipCode: '122004'};
  const genObject = getAPIData(zipCode);

  it('should dispatch APIData', () => {
    let mockResponse = [
      {
        id: 15948948,
        dt_text: '2021-03-09 15:00:00',
        wind: {speed: 1.71},
        weather: [{description: 'clear sky'}],
        main: {humidity: 14, temp: 302.07},
      },
    ];
    expect(genObject.next().value).toEqual(call(fetchData, '122004'));

    expect(genObject.next(mockResponse).value).toEqual(
      put(fetchDataSuccess(mockResponse)),
    );
    expect(genObject.next().done).toBe(true);

    // it('should be done on next iteration', () => {
    //   expect(genObject.next().done).toBe(true);
    // });
  });
});

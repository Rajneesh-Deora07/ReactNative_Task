export const WEATHER_FORECAST_FETCH = 'WEATHER_FORECAST_FETCH';
export const WEATHER_FORECAST_SUCCESS = 'WEATHER_FORECAST_SUCCESS';

export const startFetchData = (zipCode) => ({
  type: WEATHER_FORECAST_FETCH,
  zipCode,
});
export const fetchDataSuccess = (data) => ({
  type: WEATHER_FORECAST_SUCCESS,
  data,
});

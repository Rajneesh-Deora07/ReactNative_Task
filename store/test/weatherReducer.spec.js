import weatherReducer from '../weatherReducer';

describe('start fetching weather Data', () => {
  const initialState = {
    data: {},
    isFetching: false,
    error: null,
  };
  it('should return the initial state', () => {
    expect(
      weatherReducer(initialState, {type: 'WEATHER_FORECAST_FETCH'}),
    ).toEqual({
      data: {},
      isFetching: true,
      error: null,
    });
  });

  it('should return the Success state', () => {
    expect(
      weatherReducer(initialState, {
        type: 'WEATHER_FORECAST_SUCCESS',
        data: {},
      }),
    ).toEqual({
      data: {},
      isFetching: false,
      error: null,
    });
  });

  it('should return the error state', () => {
    expect(
      weatherReducer(initialState, {type: 'WEATHER_FORECAST_ERROR', error: {}}),
    ).toEqual({
      data: {},
      isFetching: false,
      error: {},
    });
  });
});

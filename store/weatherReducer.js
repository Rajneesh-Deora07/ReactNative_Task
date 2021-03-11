// Initial State
const initialState = {
  data: {},
  isFetching: false,
  error: null,
};
// Redux: Counter Reducer
const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WEATHER_FORECAST_FETCH': {
      // API stage pending
      console.log('start Fetch');
      return {
        ...state,
        data: {},
        isFetching: true,
        error: null,
      };
    }
    case 'WEATHER_FORECAST_SUCCESS': {
      return {
        ...state,
        data: action.data,
        isFetching: false,
        error: null,
      };
    }
    case 'WEATHER_FORECAST_ERROR': {
      return {
        ...state,
        data: {},
        isFetching: false,
        error: {},
      };
    }
    default: {
      return state;
    }
  }
};
// Exports
export default weatherReducer;

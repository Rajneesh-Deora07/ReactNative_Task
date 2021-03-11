import React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';
import {ForecastWeatherObject} from '../Index';
import * as redux from 'react-redux';

import {View} from 'react-native';
import {
  useSelector as originalUseSelector,
  useDispatch as originalUseDispatch,
} from 'react-redux';

export const useSelector = (state) => originalUseSelector(state);
export const useDispatch = () => originalUseDispatch();
describe('Forecast test cases ------', () => {
  let wrapper;
  let store;
  let data = [
    {
      id: 15948948,
      dt_text: '2021-03-09 15:00:00',
      wind: {speed: 1.71},
      weather: [{description: 'clear sky'}],
      main: {humidity: 14, temp: 302.07},
    },
  ];
  beforeEach(() => {
    store = configureStore()({
      data: data[0],
      isLoading: false,
      error: null,
    });
    jest
      .spyOn(redux, 'useSelector')
      .mockImplementation((state) => store.getState());

    jest.spyOn(redux, 'useDispatch').mockImplementation(() => store.dispatch);

    wrapper = shallow(<ForecastWeatherObject store={store} />);
  });

  it('Snapshot match', () => {
    console.log('wrapper', wrapper);
  });

  it('Render UI of ForecastWeather', () => {
    expect(wrapper.find(View).length).toBe(1);
    expect(wrapper.find('WeatherInput').length).toBe(1);
    expect(wrapper.find('WeatherList').length).toBe(1);
  });
});

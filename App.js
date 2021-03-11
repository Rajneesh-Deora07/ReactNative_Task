/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import ForecastWeather from './lib/Index';
import {Provider} from 'react-redux';
import {configureStore} from './store/configureStore';

const store = configureStore();

export default function App() {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <ForecastWeather />
    </Provider>
  );
}

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Dimensions,
  Alert,
} from 'react-native';

import WeatherInput from './WeatherInput';
import WeatherList from './WeatherList';
import {startFetchData} from '../store/action';

const ForecastWeather = () => {
  const weather = useSelector((state) => state.weather);
  const forecastData = weather.data || {};
  const isDataFetching = weather.isFetching;
  const dispatch = useDispatch();

  const callWeatherAPI = (zipCode) => {
    if (zipCode.length > 0) {
      dispatch(startFetchData(zipCode));
    } else {
      Alert.alert('Please enter valid ZipCode');
    }
  };

  return (
    <View style={styles.containerStyle}>
      <WeatherInput fetchData={callWeatherAPI} />
      <WeatherList data={forecastData} />
      {!isDataFetching ? null : (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#grey" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    top: '50%',
    bottom: '50%',
    position: 'absolute',
  },
  horizontal: {
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
export default ForecastWeather;
export {ForecastWeather as ForecastWeatherObject};

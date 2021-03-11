import React from 'react';
import {View, StyleSheet, FlatList, Text, Dimensions} from 'react-native';

const WeatherList = ({data}) => {
  const renderItem = ({item}) => {
    console.log(item);
    const {dt_txt = ''} = item;
    const {description = ''} = item.weather[0];
    const {speed = 0.0} = item.wind;
    const {humidity = 0.0} = item.main;
    const {temp = 0.0} = item.main;

    return (
      <View style={styles.item}>
        <Text style={styles.title}>Date/Time: {dt_txt}</Text>
        <Text style={styles.title}>Sky: {description}</Text>
        <Text style={styles.title}>Wind: {speed}</Text>
        <Text style={styles.title}>Humidity: {humidity}</Text>
        <Text style={styles.title}>Temp: {temp}</Text>
      </View>
    );
  };
  const {city = {}, list = []} = data;
  const {name = ''} = city;
  const cityName = name;
  return (
    <View style={styles.containerStyle}>
      <View style={styles.topView}>
        <Text style={styles.titleText}>City:{cityName}</Text>
      </View>
      <FlatList
        data={list}
        keyExtractor={(item, index) => item.dt.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'rgba(244,244,244,1)',
    padding: 20,
    marginVertical: 12,
  },
  header: {
    fontSize: 12,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  title: {
    fontSize: 14,
    marginBottom: 5,
  },
  containerStyle: {
    marginTop: 10,
    width: Dimensions.get('window').width - 60,
    flex: 1,
  },
  topView: {
    height: 50,
    backgroundColor: 'rgba(39, 153, 137, 1)',
    paddingTop: 10,
  },
});

export default WeatherList;

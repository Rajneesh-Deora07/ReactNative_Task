import React, {useState} from 'react';
import Strings from './localization';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

const WeatherInput = (props) => {
  const [zipCode, setZipCode] = useState('');

  const fetchWeatherData = () => {
    props.fetchData(zipCode);
  };

  return (
    <View style={styles.containerStyle}>
      <Text>{Strings.how}</Text>
      <Text>{'Enter Zip Code'}</Text>
      <TextInput
        style={styles.inputStyle}
        value={zipCode}
        onChangeText={(text) => setZipCode(text)}
        keyboardType={'number-pad'}
        clearButtonMode={'while-editing'}
      />
      <TouchableHighlight onPress={fetchWeatherData}>
        <View style={styles.buttonStyle}>
          <Text>Check Weather</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 10,
  },
  buttonTitleStyle: {
    fontSize: 20,
    color: 'white',
  },
  inputStyle: {
    height: 40,
    paddingLeft: 20,
    borderWidth: 2,
    borderColor: 'grey',
  },
  containerStyle: {
    marginTop: 50,
    width: Dimensions.get('window').width - 60,
    paddingLeft: 30,
    paddingRight: 30,
    height: 120,
  },
});

export default WeatherInput;

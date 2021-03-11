import React from 'react';
import {shallow} from 'enzyme';
import WeatherInput from '../WeatherInput';
import {View, TextInput, Text, TouchableHighlight} from 'react-native';
describe('WeatherInput test cases ------', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <WeatherInput />,
      //wrapper.setState({zipCode: '122002'}),
    );
  });
  it('Snapshot match', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Render UI of weatherInput', () => {
    expect(wrapper.find(View).length).toBe(2);
    expect(wrapper.find(Text).length).toBe(3);
    expect(wrapper.find(TouchableHighlight).length).toBe(1);
    expect(wrapper.find(TextInput).length).toBe(1);
  });
});

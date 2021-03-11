import React from 'react';
import {shallow} from 'enzyme';
import WeatherList from '../WeatherList';
import {View, FlatList, Text} from 'react-native';
describe('WeatherInput test cases ------', () => {
  let wrapper;
  let item = {
    id: 15948948,
    dt_text: '2021-03-09 15:00:00',
    wind: {speed: 1.71},
    weather: [{description: 'clear sky'}],
    main: {humidity: 14, temp: 302.07},
  };

  beforeEach(() => {
    wrapper = shallow(<WeatherList data={item} />);
  });
  it('Snapshot match', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Render UI of weatherList', () => {
    expect(wrapper.find(View).length).toBe(2);
    expect(wrapper.find(Text).length).toBe(1);
    expect(wrapper.find(FlatList).length).toBe(1);
  });

  it('should render FlatList', () => {
    const flatList = wrapper.find(FlatList);
    const newItem = flatList.props().renderItem({item});
    expect(newItem).toBeDefined();
  });
});

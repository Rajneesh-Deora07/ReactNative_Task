import React from 'react';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

describe('Store provider ------', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('App Snapshot match', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

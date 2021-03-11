import {NativeModules} from 'react-native';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

NativeModules.ReactLocalization = {
  language: 'en',
};
//global.fetch = require('jest-fetch-mock');

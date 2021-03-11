// ES6 module syntax
import LocalizedStrings from 'react-native-localization';

// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');

const Strings = new LocalizedStrings({
  'en-US': {
    how: 'Good Morning , How are you?',
  },
  en: {
    how: 'Good Morning , How are you?',
  },
  it: {
    how: 'Buongiorno, come stai?',
  },
});
module.exports = Strings;

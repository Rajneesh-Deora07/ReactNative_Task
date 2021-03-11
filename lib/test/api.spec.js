import {fetchData} from '../api';
it('fetchData Test', (zipValue = '122004') => {
  const action = fetchData(zipValue);
  expect(action).toBeDefined();
});

import '@shared/utils/jestCustomMatchers';
import '@shared/utils/mock-react-native-third-lib';
import { getEmptyMessage } from '../customerListUtils';

describe('Tests on customerListUtils', () => {
  it('should return empty message', () => {
    const res = getEmptyMessage();
    expect(res).toMatch('Nenhum');
  });
});

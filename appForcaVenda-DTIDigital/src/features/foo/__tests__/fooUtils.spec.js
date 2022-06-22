import '../../../shared/utils/mock-react-native-third-lib';
jest.mock('../../../shared/utils/dateUtils');
import * as dateUtils from '../../../shared/utils/dateUtils';
import { addNumbers, transformDate } from '../fooUtils';

describe('Name of the group', () => {
  it('should return 4 ', () => {
    const response = addNumbers(2, 2);
    expect(response).toEqual(4);
  });
  it('should return a date string 22/05/2021 ', () => {
    const today = new Date();
    dateUtils.formatDate = jest.fn().mockReturnValueOnce('22/05/2021');
    const response = transformDate(today);
    expect(dateUtils.formatDate).toHaveBeenCalledWith(today);
    expect(response).toEqual('22/05/2021');
  });
});

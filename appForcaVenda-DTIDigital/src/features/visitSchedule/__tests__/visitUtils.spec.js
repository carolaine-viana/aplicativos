import '../../../shared/utils/mock-react-native-third-lib';
import { getDateWithTime } from '../../../shared/utils/dateUtils';
import { mountSchedule } from '../visitUtils';

jest.mock('../../../shared/utils/dateUtils', () => ({
  getDateWithTime: jest.fn(),
}));

describe('Tests visitUtils', () => {
  it('should return date with hour and minute from calendar schedule ', () => {
    const hour = 17;
    const minutes = 30;
    const mockDate = new Date(2021, 5, 10);
    const mockSchedule = new Date(2021, 5, 10, hour, minutes);

    getDateWithTime.mockReturnValueOnce('2021-06-10T17:30:00.000Z');

    mountSchedule(mockDate, mockSchedule);
    expect(getDateWithTime).toBeCalledTimes(1);
    expect(getDateWithTime.mock.calls[0][1]).toEqual(17);
    expect(getDateWithTime.mock.calls[0][2]).toEqual(30);
  });
});

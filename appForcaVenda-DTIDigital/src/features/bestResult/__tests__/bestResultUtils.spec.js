import expect from 'expect';
import '@shared/utils/mock-react-native-third-lib';
import { transformBestResultResponse } from '../bestResultUtils';

describe('Name of the group', () => {
  const mockParam = {
    performance_indicators_best_result: [
      {
        customers_best_result: 50,
        customers_best_month: 11,
      },
    ],
  };
  it('should return customers best result: 50 , month: 11', () => {
    const res = transformBestResultResponse(mockParam);
    expect(res.bestResult).toBe(50);
    expect(res.month).toBe(11);
  });
});

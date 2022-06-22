import '../../../shared/utils/jestCustomMatchers';
import * as utils from '../incentiveIndicatorsUtils';
describe('Tests incentiveIndicatorsUtils', () => {
  it('should return an array of incentive indicators', () => {
    const mockData = {
      business_incentive_indicators: [
        {
          mesure: '-',
          criterion: '-',
        },
      ],
    };

    const res = utils.transformIncentiveIndicatorsResponse(mockData);
    expect(res).toHaveLength(1);

    expect(res).toContainObject({
      mesure: '-',
      criterion: '-',
    });
  });
});

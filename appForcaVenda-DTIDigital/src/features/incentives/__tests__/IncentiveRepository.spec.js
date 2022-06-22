import '../../../shared/utils/mock-react-native-third-lib';
import expect from 'expect';
import MOCKAPIBFF from '../../../shared/base/api/APIBFF';
import IncentiveRepository from '../services/IncentiveRepository';

jest.mock('../../../shared/base/api/APIBFF');

describe('Tests IncentiveRespository', () => {
  const MOCK_RCA_ID = '44184';
  const MOCK_GT_ID = '71354';
  const INCENTIVE_ID = '2875';
  const MOCK_YEARMONTH_PARAM = '202201';

  let repository;

  beforeAll(() => {
    const mockApiBff = new MOCKAPIBFF(); // api fake
    repository = new IncentiveRepository();
    repository.apiBff.instance = mockApiBff;
    repository.apiBff.instance.get = jest.fn(); // cria uma função jest
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('Tests fetchIncentives', () => {
    it('should call APIBFF get with RCA_ID and "business-incentives"', async () => {
      repository.fetchIncentives(MOCK_RCA_ID);
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(
        `${MOCK_RCA_ID}/business-incentives`
      );
    });
  });

  describe('Tests fetchIncentivesTerritoryManager', () => {
    it('should call APIBFF get with RCA_ID and "business-incentives"', async () => {
      repository.fetchIncentivesTerritoryManager(MOCK_GT_ID);
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(
        `/territory-managers/${MOCK_GT_ID}/business-incentives`
      );
    });
  });

  describe('Tests fetchIncentivesPerformanceIndicatorsTerritoryManager', () => {
    it('should call APIBFF get with RCA_ID and "business-incentives"', async () => {
      repository.fetchIncentivesPerformanceIndicatorsTerritoryManager(MOCK_GT_ID, INCENTIVE_ID);
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(
        `/territory-managers/${MOCK_GT_ID}/business-incentives/${INCENTIVE_ID}/performance-indicators`
      );
    });
  });

  describe('Tests fetchIncentivesPerformanceIndicators', () => {
    it('should call APIBFF get with userId and "incentiveId"', async () => {
      repository.fetchIncentivesPerformanceIndicators(MOCK_RCA_ID, INCENTIVE_ID);
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(
        `/sales-reps/${MOCK_RCA_ID}/business-incentives/${INCENTIVE_ID}/performance-indicators`
      );
    });
  });

  describe('Tests on fetchIcentivesMartins', () => {
    it('should call api get with correct URL(userId)', async () => {
      await repository.fetchIcentivesMartins(MOCK_RCA_ID);
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(
        `/sales-reps/${MOCK_RCA_ID}/sales-incentives`
      );
    });
  });

  describe('Tests on fetchIcentivesMartinsDetails', () => {
    it('should call api get with correct URL(incentiveId) ', async () => {
      await repository.fetchIcentivesMartinsDetails(INCENTIVE_ID);
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(
        `/sales-incentives/${INCENTIVE_ID}`
      );
    });
  });
  describe('Tests on fetchPerformanceIncentiveMartinsMonth', () => {
    it(`should call api get with correct 
    URL(userId, incentiveId, yearMonth - YYYYMM)`, async () => {
      await repository.fetchPerformanceIncentiveMartinsMonth(
        MOCK_RCA_ID,
        INCENTIVE_ID,
        MOCK_YEARMONTH_PARAM
      );
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(
        `/sales-reps/${MOCK_RCA_ID}/sales-incentives/${INCENTIVE_ID}/month/${MOCK_YEARMONTH_PARAM}/performance-indicators`
      );
    });
  });
  describe('Tests on fetchPerformanceIncentiveMartinsWeeks', () => {
    it(`should call api get with correct 
    URL(userId, incentiveId, yearMonth - YYYYMM)`, async () => {
      await repository.fetchPerformanceIncentiveMartinsWeeks(
        MOCK_RCA_ID,
        INCENTIVE_ID,
        MOCK_YEARMONTH_PARAM
      );
      expect(repository.apiBff.instance.get.mock.calls[0][0]).toMatch(
        `/sales-reps/${MOCK_RCA_ID}/sales-incentives/${INCENTIVE_ID}/month/${MOCK_YEARMONTH_PARAM}/weeks/performance-indicators`
      );
    });
  });
});

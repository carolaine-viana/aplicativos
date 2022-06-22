import expect from 'expect';
import '@shared/utils/jestCustomMatchers';
import { filterGts, joinGTRegions, transformGtListResponse } from '../gtListUtils';
import { MOCK_RESPONSE } from '../__tests__/mocks.mock';

describe('Tests gtListUtils', () => {
  describe('Tests filterGts', () => {
    it('should return only one item from the list', () => {
      const res = filterGts('Ramon', MOCK_RESPONSE.data['territory_managers']);
      expect(res).toHaveLength(1);
      expect(res).toContainObject({
        id: 6,
        name: 'Prata, Ramon',
      });
    });
    it('should return the whole  list if passed no search text', () => {
      const res = filterGts('', MOCK_RESPONSE.data['territory_managers']);
      expect(res).toHaveLength(MOCK_RESPONSE.data['territory_managers'].length);
    });
    it('should return empty array if passed no list', () => {
      const res = filterGts('Ramon');
      expect(res).toStrictEqual([]);
    });
  });

  describe('Tests joinGTRegions', () => {
    it('should mount a single string with regions', () => {
      const res = joinGTRegions([
        {
          name: 'region one',
        },
        {
          name: 'region two',
        },
      ]);

      expect(res).toMatch('region one region two');
    });
  });

  describe('Tests transformGtListResponse', () => {
    it('should return an array og Gts', () => {
      const res = transformGtListResponse(MOCK_RESPONSE.data);
      expect(res).toHaveLength(6);
    });
  });
});

import expect from 'expect';
import '../../../shared/utils/mock-react-native-third-lib';
import { doesArrayHaveContent } from '../arrayUtils';

describe('Tests on arrayUtils', () => {
  describe('Testes on doesArrayHaveContent', () => {
    it('should return true', () => {
      const mockArray = ['1', '2'];
      const res = doesArrayHaveContent(mockArray);
      expect(res).toEqual(true);
    });
    it('should return true', () => {
      const mockArray = [{}, {}];
      const res = doesArrayHaveContent(mockArray);
      expect(res).toEqual(true);
    });

    it('should return false', () => {
      const mockArray = [null];
      const res = doesArrayHaveContent(mockArray);
      expect(res).toEqual(false);
    });
    it('should return false', () => {
      const mockArray = ['1', null];
      const res = doesArrayHaveContent(mockArray);
      expect(res).toEqual(true);
    });
  });
});

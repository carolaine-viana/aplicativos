import jestExpect from 'expect';
import '../../../shared/utils/mock-react-native-third-lib';
import { getEarningsBalace } from '../dashUtils';

describe('Tests dashUtils ', () => {
    describe('Tests getEarningsBalace', () => {
        it('should extract RCA earnings balance', () => {
            const mockResponse = {
                data: {
                    sales_reps: [{
                        id: 1234,
                        name: 'Fulano',
                        earnings_balance: 400,
                    }, ],
                },
            };
            const res = getEarningsBalace(mockResponse);
            jestExpect(res).toEqual(400);
        });
    });
});
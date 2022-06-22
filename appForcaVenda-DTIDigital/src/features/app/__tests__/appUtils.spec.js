import '../../../shared/utils/jestCustomMatchers';
import '../../../shared/utils/mock-react-native-third-lib';
import { extractHierarchicalLevelResponse, mountRoleInfo, filterRoutesByRole } from '../appUtils';

jest.mock('../../../features/dashboard/views/DashStack', () => () => {});

jest.mock('../../../features/custumerRoutes', () => ({
    CustumerRoutes: {},
}));
jest.mock('../../../features/customerList', () => ({
    CustomerList: {},
}));
jest.mock('../../../features/roadMap', () => ({
    RoadMap: {},
}));
jest.mock('../../../features/rcaList/views/RCAListStack', () => ({
    RcaList: {},
}));
jest.mock('../../../features/gtList/views/GtListStack', () => ({
    GTList: {},
}));

describe('Tests appUtils', () => {
    const mockResponse = {
        sales_reps: [{
            hierarchical_level: 'gestor',
        }, ],
    };
    describe('extractHierarchicalLevelResponse', () => {
        it('should return "gestor"', () => {
            const res = extractHierarchicalLevelResponse(mockResponse);
            expect(res).toEqual('gestor');
        });
        it('should return undefined', () => {
            const res = extractHierarchicalLevelResponse();
            expect(res).toBeUndefined();
        });
    });

    describe('Tests mountRoleInfo', () => {
        it('should return role: "RCA" and isRCA: true', () => {
            const res = mountRoleInfo('RCA');
            expect(res).toHaveProperty('role', 'RCA');
            expect(res).toHaveProperty('isRCA', true);
            expect(res).toHaveProperty('isGT', false);
        });
        it('should return role: "GT" and isGT: true', () => {
            const res = mountRoleInfo('GT');
            expect(res).toHaveProperty('role', 'GT');
            expect(res).toHaveProperty('isGT', true);
            expect(res).toHaveProperty('isRCA', false);
        });
        it('should return role: undefined and isGT: false and isRCA: false', () => {
            const res = mountRoleInfo();
            expect(res).toHaveProperty('role');
            expect(res.role).toBeUndefined();
            expect(res).toHaveProperty('isGT', false);
            expect(res).toHaveProperty('isRCA', false);
        });
    });

    describe('Tests filterRoutesByRole', () => {
        it('should return list of tabs for RCA and not GT', () => {
            const res = filterRoutesByRole('RCA');
            expect(res).toContainObject({ name: 'Painel' });
            expect(res).toContainObject({ name: 'Mapa' });
            expect(res).toContainObject({ name: 'Clientes' });
            expect(res).toContainObject({ name: 'Roteiro' });
            expect(res).not.toContainObject({ name: 'RCAs' });
        });
        it('should return list of tabs for RCA and not GT', () => {
            const res = filterRoutesByRole('GT');
            expect(res).toContainObject({ name: 'Painel' });
            expect(res).not.toContainObject({ name: 'Rotas' });
            expect(res).not.toContainObject({ name: 'Clientes' });
            expect(res).not.toContainObject({ name: 'Roteiro' });
        });
        it('should return empty list', () => {
            const res = filterRoutesByRole('');
            expect(res).toHaveLength(0);
        });
    });
});
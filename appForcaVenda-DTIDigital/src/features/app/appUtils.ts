import Dashboard from '@features/dashboard/views/DashStack';
import { CustomerRoutes } from '@features/custumerRoutes';
import { CustomerList } from '@features/customerList';
import { RoadMap } from '@features/roadMap';
import { IUserRoleResponse, TRole, THierarchicalLevel, Profiles } from 'shared/types';
import { IUserCreateDto } from 'shared/models/User/IUserDtos';
import RCAListStack from 'features/rcaList/views/RCAListStack';
import TeamListStack from 'features/teamList/views/TeamListStack';

export const routes = [
  {
    component: Dashboard,
    testID: 'painel',
    name: 'Painel',
    navigateTo: 'Painel',
    iconName: 'user',
    roles: [Profiles.RCA, Profiles.GT, Profiles.GV],
  },
  {
    component: CustomerRoutes,
    testID: 'rotas',
    name: 'Mapa',
    navigateTo: 'Mapa',
    iconName: 'compass',
    roles: [Profiles.RCA],
  },
  {
    component: CustomerList,
    testID: 'listaClientes',
    name: 'Clientes',
    navigateTo: 'Clientes',
    iconName: 'map-pin',
    roles: [Profiles.RCA],
  },
  {
    component: RoadMap,
    testID: 'roteiro',
    name: 'Roteiro',
    navigateTo: 'Roteiro',
    iconName: 'book-open',
    roles: [Profiles.RCA],
  },
  {
    component: RCAListStack,
    testID: 'rcas',
    name: 'RCAs',
    navigateTo: 'RCAs',
    iconName: 'users',
    roles: [Profiles.GT],
  },
  // {
  //   component: GtListStack,
  //   testID: 'gts',
  //   name: 'GTs',
  //   navigateTo: 'GTs',
  //   iconName: 'users',
  //   roles: [Profiles.GV],
  // },
  {
    component: TeamListStack,
    testID: '',
    name: 'Equipe',
    navigateTo: 'Equipe',
    iconName: 'users',
    roles: [Profiles.GV],
  },
];

export const extractHierarchicalLevelResponse = (response: IUserRoleResponse) => {
  if (response) {
    return response.sales_reps[0].hierarchical_level;
  }
};

export const mountRoleInfo = (role: TRole) => ({
  role,
  isRCA: role === Profiles.RCA,
  isGT: role === Profiles.GT,
  isGV: role === Profiles.GV,
});

export const mapUserRole = (hierarchicalLevel: THierarchicalLevel | undefined): TRole | null => {
  switch (hierarchicalLevel) {
    case 'representante':
      return Profiles.RCA;

    case 'gestor':
      return Profiles.GT;

    default:
      return null;
  }
};

export const mountUserInfo = (userResponse: IUserRoleResponse): Partial<IUserCreateDto> | null => {
  const userInfo = userResponse.sales_reps[0];
  const hierarchicalLevel = extractHierarchicalLevelResponse(userResponse);
  const role = mapUserRole(hierarchicalLevel);
  if (role) {
    return {
      id: userInfo.id.toString(),
      name: userInfo.name,
      role,
      earningsBalance: -1,
      cpf: userInfo.cpf,
    };
  }
  return null;
};

export const filterRoutesByRole = (role?: TRole) => {
  if (role) {
    return routes.filter((route) => route.roles.includes(role));
  }
  return [];
};

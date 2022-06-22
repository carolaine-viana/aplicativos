import '../../../shared/utils/mock-react-native-third-lib';
import { filterRcasWithTerritories } from '../rcasListUtils';

const rcasList = [
  {
    id: 1234,
    name: 'Bilbo',
    territories: [{ id: 654, name: 'Shire' }],
  },
  {
    id: 78956,
    name: 'Legolas',
    territories: [{ id: 654, name: 'Northern Mirkwood' }],
  },
  {
    id: 78956,
    name: 'Gandalf',
    territories: [{ id: 654, name: 'Some place - Middle-earth' }],
  },
];

describe('Tests utility functions', () => {
  it('should filter user by name. Return "Bilbo"', () => {
    const res = filterRcasWithTerritories(rcasList, 'bil');
    expect(res).toHaveLength(1);
    expect(res[0].name).toMatch('Bilbo');
  });
  it('should filter user by territory. Return "Gandalf"', () => {
    const res = filterRcasWithTerritories(rcasList, 'earth');
    expect(res).toHaveLength(1);
    expect(res[0].name).toMatch('Gandalf');
  });
});

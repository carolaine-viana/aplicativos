import React from 'react';
import expect from 'expect';
import '@shared/utils/jestCustomMatchers';
import { render } from '@shared/utils/test-utils';
import IncentivesMartinsTabs from '../views/IncentivesMartinsTabs';
import IncentivesMartinsDetailsFake from '../views/IncentivesMartinsDetails';
import IncentivesMartinsPerformanceFake from '../views/IncentivesMartinsPerformance';

jest.mock('@shared/components/TopTabs/TopTabs', () => {
  const { View } = require('react-native');
  return (props) => <View testID="fakeTopTabs" {...props} />;
});

jest.mock('../views/IncentivesMartinsDetails', () => {
  const { View } = require('react-native');
  return (props) => <View testID="IncentivesMartinsDetails" {...props} />;
});
jest.mock('../views/IncentivesMartinsPerformance', () => {
  const { View } = require('react-native');
  return () => <View testID="IncentivesMartinsPerformance" />;
});

// TODO: Desempenho com validação de 2 componentes
describe.skip('Tests on IncentivesMartinsTabs component', () => {
  it('should render tabs "Detalhe" e "Desempenho" ', async () => {
    const screen = render(<IncentivesMartinsTabs />);
    const fakeTabsComponent = screen.queryByTestId('fakeTopTabs');
    expect(fakeTabsComponent.props).toHaveProperty('tabs');
    expect(fakeTabsComponent.props.tabs).toContainObject({
      tabName: 'Detalhes',
      component: IncentivesMartinsDetailsFake,
    });
    expect(fakeTabsComponent.props.tabs).toContainObject({
      tabName: 'Desempenho',
      component: IncentivesMartinsPerformanceFake,
    });
  });
});

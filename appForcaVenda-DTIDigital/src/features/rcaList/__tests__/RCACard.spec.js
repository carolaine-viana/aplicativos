import React from 'react';
import { render } from '@shared/utils/test-utils';
import RCACard from '../views/RCACard';

jest.mock('../../../shared/components/CustomStatusBar/CustomStatusBar', () => {
  const { View } = require('react-native');
  return () => <View testID="CustomStatusBar" />;
});

jest.mock('styled-components', () => {
  return {
    useTheme: jest.fn().mockReturnValue({
      palette: {
        white: '#ffffff',
      },
    }),
  };
});

describe('Tests renderin RCACard', () => {
  const rcaNameMock = 'Marcelo Silva';
  const territoriesMock = [{ id: 1234, name: 'Belo Horizonte' }];
  const rcaMock = {
    name: rcaNameMock,
    territories: territoriesMock,
  };

  it('should.. render RCA name and region', () => {
    const { getByText } = render(<RCACard rca={rcaMock} />);

    const rcaName = getByText(rcaNameMock);
    const territory = getByText(territoriesMock[0].name);
    expect(territory).toBeDefined();
    expect(rcaName).toBeDefined();
  });
  it('should.. render RCA avatar', () => {
    const { getByText } = render(<RCACard rca={rcaMock} />);
    const nameLetters = getByText('MS');
    expect(nameLetters).toBeDefined();
  });
  it('should.. render RCA chevron icon', () => {
    const { getByTestId } = render(<RCACard rca={rcaMock} />);
    const icon = getByTestId('rcaChevronIcon');
    expect(icon).toBeDefined();
  });
});

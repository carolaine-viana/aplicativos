import React from 'react';
import jestExpect from 'expect';
import { render } from '../../../utils/test-utils';
import Success from '../Success';

it('should render with prop text success', () => {
  const screen = render(<Success message="mocked text" />);
  jestExpect(screen.getByText('mocked text')).toBeDefined();
});

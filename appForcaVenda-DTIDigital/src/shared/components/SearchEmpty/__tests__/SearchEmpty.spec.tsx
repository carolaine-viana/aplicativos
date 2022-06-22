import React from 'react';
import jestExpect from 'expect';
import { render } from '../../../utils/test-utils';
import SearchEmpty from '../SearchEmpty';

it('searchempty snapshot', () => {
  const screen = render(<SearchEmpty />).toJSON();
  jestExpect(screen).toMatchSnapshot();
});

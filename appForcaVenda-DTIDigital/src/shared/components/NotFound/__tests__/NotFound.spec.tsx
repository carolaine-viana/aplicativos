import React from 'react';
import jestExpect from 'expect';
import { render } from '../../../utils/test-utils';
import NotFound from '../NotFound';

it('notfound snapshot', () => {
  const screen = render(<NotFound />).toJSON();
  jestExpect(screen).toMatchSnapshot();
});

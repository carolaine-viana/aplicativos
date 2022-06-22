import React from 'react';
import jestExpect from 'expect';
import { render } from '../../../utils/test-utils';
import Error from '../Error';

it('error snapshot', () => {
  const screen = render(<Error />).toJSON();
  jestExpect(screen).toMatchSnapshot();
});

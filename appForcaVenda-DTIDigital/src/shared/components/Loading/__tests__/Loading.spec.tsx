import React from 'react';
import jestExpect from 'expect';
import { render } from '../../../utils/test-utils';
import Loading from '../Loading';

it('loading snapshot', () => {
  const screen = render(<Loading />).toJSON();
  jestExpect(screen).toMatchSnapshot();
});

import React from 'react';
import jestExpect from 'expect';
import { render } from '../../../utils/test-utils';
import Deleted from '../Deleted';

it('deleted snapshot', () => {
  const screen = render(<Deleted />).toJSON();
  jestExpect(screen).toMatchSnapshot();
});

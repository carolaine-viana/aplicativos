import React from 'react';
import jestExpect from 'expect';
import { render } from '../../../utils/test-utils';
import CardColapse from '../CardColapse';

it('CardColapse snapshot', () => {
  const screen = render(<CardColapse />).toJSON();
  jestExpect(screen).toMatchSnapshot();
});

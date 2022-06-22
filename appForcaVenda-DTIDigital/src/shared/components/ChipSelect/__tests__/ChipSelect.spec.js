import React from 'react';
import jestExpect from 'expect';
import { render } from '../../../utils/test-utils';
import ChipSelect from '../ChipSelect';

it('chipselect snapshot', () => {
  const screen = render(<ChipSelect />).toJSON();
  jestExpect(screen).toMatchSnapshot();
});

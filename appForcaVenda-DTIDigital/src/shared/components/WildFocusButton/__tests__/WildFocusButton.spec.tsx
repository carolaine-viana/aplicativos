import React from 'react';
import jestExpect from 'expect';
import { render } from '../../../utils/test-utils';
import WildFocusButton from '../WildFocusButton';

describe('WildFocusButton', () => {
  it('wildfocusbutton with check icon', () => {
    const screen = render(<WildFocusButton onPress={() => {}} icon="check" text="mocked text" />);
    jestExpect(screen.getByText('mocked text')).toBeDefined();
  });

  it('wildfocusbutton with book icon', () => {
    const screen = render(<WildFocusButton onPress={() => {}} icon="book" text="mocked text" />);
    jestExpect(screen.getByText('mocked text')).toBeDefined();
  });
});

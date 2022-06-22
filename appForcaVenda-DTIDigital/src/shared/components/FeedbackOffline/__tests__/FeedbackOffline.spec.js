import React from 'react';
import jestExpect from 'expect';
import { render } from '../../../utils/test-utils';
import FeedbackOffline from '../FeedbackOffline';

it('feedbackoffline snapshot', () => {
  const screen = render(<FeedbackOffline />).toJSON();
  jestExpect(screen).toMatchSnapshot();
});

import React from 'react';
import jestExpect from 'expect';
import { render, waitFor, fireEvent } from '@shared/utils/test-utils';
import ProgressBar from '../ProgressBar';

describe('ProgressBar', () => {
  it('progressbar snapshot', () => {
    const screen = render(<ProgressBar />).toJSON();
    jestExpect(screen).toMatchSnapshot();
  });
});

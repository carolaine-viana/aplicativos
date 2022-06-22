import React from 'react';
import expect from 'expect';
import Typography from '../Typography';
import { render } from '@shared/utils/test-utils';

describe('Tests RcaIndicators', () => {
  const textToVerify = 'Some text';
  it('it should render text passed as children', () => {
    const { getByText } = render(<Typography>{textToVerify}</Typography>);
    expect(getByText(textToVerify)).toBeDefined();
  });
  it('it should render text with font size 11', () => {
    const screen = render(
      <Typography variant="overlineMedium" color="secondary">
        {textToVerify}
      </Typography>
    );
    expect(screen.toJSON().props.style[0]).toHaveProperty('fontSize', 11);
  });
  it('it should render text with font bold', () => {
    const screen = render(
      <Typography variant="overlineMedium" color="secondary" bold>
        {textToVerify}
      </Typography>
    );
    expect(screen.toJSON().props.style[0]).toHaveProperty('fontFamily', 'Rubik-Bold');
  });
});

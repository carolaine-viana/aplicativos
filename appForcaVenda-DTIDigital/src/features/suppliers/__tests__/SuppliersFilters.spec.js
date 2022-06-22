import React from 'react';
import '../../../shared/utils/jestCustomMatchers';
import { render, fireEvent } from '@shared/utils/test-utils';
import expect from 'expect';
import SuppliersFilters from '../views/SuppliersFilters';
import theme from 'shared/constants/theme';

describe('Tests SuppliersFilters', () => {
  const onChangeCategoryMock = jest.fn();
  describe('Tests CORINGA category', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });

    it(`should be active(color = ${theme.palette.gray600}) when category="coringa" `, () => {
      const screen = render(<SuppliersFilters category="coringa" />);
      const wildCardText = screen.getByText('CORINGA');
      expect(wildCardText).toBeDefined();
      expect(wildCardText.props.children).toEqual('CORINGA');
      expect(wildCardText.props.style).toContainObject({
        color: theme.palette.gray600,
      });
    });
    it(`should not be active(color = ${theme.palette.gray200}) when category="foco"`, () => {
      const screen = render(<SuppliersFilters category="foco" />);
      const wildCardText = screen.getByText('CORINGA');
      expect(wildCardText).toBeDefined();
      expect(wildCardText.props.children).toEqual('CORINGA');
      expect(wildCardText.props.style).toContainObject({
        color: theme.palette.gray200,
      });
    });
    it(`should  call onChangeCategory with "coringa" when press CORINGA `, () => {
      const screen = render(
        <SuppliersFilters onChangeCategory={onChangeCategoryMock} category="foco" />
      );
      const wildCardPressable = screen.getByTestId('pressable-wildcard');
      fireEvent.press(wildCardPressable);
      expect(onChangeCategoryMock).toBeCalledTimes(1);
      expect(onChangeCategoryMock).toBeCalledWith('coringa');
    });
  });

  describe('Tests FOCO category', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });
    it(`should be active(color = ${theme.palette.gray600}) when category="foco" `, () => {
      const screen = render(<SuppliersFilters category="foco" />);
      const focusCategory = screen.getByText('FOCO');
      expect(focusCategory).toBeDefined();
      expect(focusCategory.props.children).toEqual('FOCO');
      expect(focusCategory.props.style).toContainObject({
        color: theme.palette.gray600,
      });
    });
    it(`should not be active(color = ${theme.palette.gray200}) when category="coringa" `, () => {
      const screen = render(<SuppliersFilters category="coringa" />);
      const focusCategory = screen.getByText('FOCO');
      expect(focusCategory).toBeDefined();
      expect(focusCategory.props.children).toEqual('FOCO');
      expect(focusCategory.props.style).toContainObject({
        color: theme.palette.gray200,
      });
    });

    it(`should  call onChangeCategory with "foco" when press FOCO `, () => {
      const screen = render(
        <SuppliersFilters onChangeCategory={onChangeCategoryMock} category="foco" />
      );
      const wildCardPressable = screen.getByTestId('pressable-focus');
      fireEvent.press(wildCardPressable);
      expect(onChangeCategoryMock).toBeCalledTimes(1);
      expect(onChangeCategoryMock).toBeCalledWith('foco');
    });
  });
});

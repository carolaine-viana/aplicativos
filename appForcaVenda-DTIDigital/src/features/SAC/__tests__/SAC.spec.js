import React from 'react';
import expect from 'expect';
import '../../../shared/utils/mock-react-native-third-lib';
import { render, fireEvent, act } from '@shared/utils/test-utils';
import SAC from '../views/SAC';
import { Alert } from 'react-native';

jest.spyOn(Alert, 'alert');

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: jest.fn(),
    navigate: jest.fn(),
  }),
}));

describe('Tests SAC', () => {
  describe('Testing screen texts', () => {
    it('should render header with title "SAC"', () => {
      const screen = render(<SAC />);
      expect(screen.queryByText('SAC')).not.toBeNull();
    });

    it('should render label "Criar ocorrência"', () => {
      const screen = render(<SAC />);
      expect(screen.queryByText('Criar ocorrência')).not.toBeNull();
    });

    it('should render label "Histórico"', () => {
      const screen = render(<SAC />);
      expect(screen.queryByText('Histórico')).not.toBeNull();
    });
  });

  describe('Testing events', () => {
    it('should open an alert with text "Ocorrência"', async () => {
      const screen = render(<SAC />);
      await act(async () => {
        const cardOccurrence = screen.getByTestId('occurrence');
        await fireEvent.press(cardOccurrence);
      });
    });
    it('should open an alert with text "Histórico"', async () => {
      const screen = render(<SAC />);
      await act(async () => {
        const cardHistory = screen.getByTestId('history');
        await fireEvent.press(cardHistory);
      });
    });
  });
});

import React from 'react';
import expect from 'expect';
import { fireEvent, render, waitFor, act } from '@shared/utils/test-utils';
import GtList from '../views/GtList';
import GTListManager from '../services/GTListManager';

jest.mock('../services/GTListManager');

describe('Tests GtList', () => {
  let managerInstance;

  beforeAll(() => {
    managerInstance = GTListManager.mock.instances[0];
    managerInstance.getGTs = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render a header with title GTs ', async () => {
    managerInstance.getGTs.mockResolvedValueOnce(MOCK_MANAGER_DATA);
    const screen = render(<GtList />);
    expect(screen.queryByText('GTs')).not.toBeNull();
  });

  it('should render a search input to filter Gts  ', async () => {
    managerInstance.getGTs.mockResolvedValueOnce(MOCK_MANAGER_DATA);
    const screen = render(<GtList />);
    expect(screen.getByTestId('searchTextIpt'));
  });

  it('should render a loading feedback and then a list of GTs', async () => {
    managerInstance.getGTs.mockResolvedValueOnce(MOCK_MANAGER_DATA);
    const screen = render(<GtList />);

    expect(screen.queryByText('Carregando...')).not.toBeNull();

    await waitFor(() => expect(managerInstance.getGTs).toHaveBeenCalled());

    expect(screen.queryByText('GT One')).not.toBeNull();
    expect(screen.queryByText('region gt one')).not.toBeNull();
    expect(screen.queryByText('GT Two')).not.toBeNull();
    expect(screen.queryByText('region gt two')).not.toBeNull();
  });

  it('should render only GT One when filter by name "One"', async () => {
    managerInstance.getGTs.mockResolvedValueOnce(MOCK_MANAGER_DATA);
    const screen = render(<GtList />);

    expect(screen.queryByText('Carregando...')).not.toBeNull();

    await waitFor(() => expect(managerInstance.getGTs).toHaveBeenCalled());
    await act(async () => {
      const searchIpt = screen.getByTestId('searchTextIpt');
      await fireEvent.changeText(searchIpt, 'One');
      expect(screen.queryByText(/One/)).not.toBeNull();
      expect(screen.queryByText(/Two/)).toBeNull();
    });
  });

  it('should render only GT Two when filter by region "region two"', async () => {
    managerInstance.getGTs.mockResolvedValueOnce(MOCK_MANAGER_DATA);
    const screen = render(<GtList />);

    expect(screen.queryByText('Carregando...')).not.toBeNull();

    await waitFor(() => expect(managerInstance.getGTs).toHaveBeenCalled());
    await act(async () => {
      const searchIpt = screen.getByTestId('searchTextIpt');
      await fireEvent.changeText(searchIpt, 'two');
      expect(screen.queryByText(/region gt two/)).not.toBeNull();
      expect(screen.queryByText(/region gt one/)).toBeNull();
    });
  });

  it('should render feedback de erro, when manager throw an error', async () => {
    managerInstance.getGTs.mockImplementationOnce(() => {
      throw new Error('Error from Manager');
    });
    const screen = render(<GtList />);
    expect(screen.queryByText(/Inesperado/)).toBeNull();
  });

  it('should render feedback empty when GT list is empty', async () => {
    managerInstance.getGTs.mockResolvedValueOnce([]);
    const screen = render(<GtList />);

    await waitFor(() => expect(managerInstance.getGTs).toHaveBeenCalled());

    expect(screen.queryByText(/ Nenhuma busca encontrada/)).toBeNull();
  });
});

const MOCK_MANAGER_DATA = [
  {
    id: 0,
    name: 'GT One',
    regions: [
      {
        id: 0,
        name: 'region gt one',
      },
    ],
  },
  {
    id: 1,
    name: 'GT Two',
    regions: [
      {
        id: 1,
        name: 'region gt two',
      },
    ],
  },
];

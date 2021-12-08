import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import HomePage from '.';
import { fetchAllWorldChampionsFromYear } from '../../api/ergastAPI';

jest.mock('../../api/ergastAPI');

jest.mock("../../components/WorldChampionsList", () => ({data}) => {
      return <div data-testid="WorldChampionsList">Champions Page</div>;
    })
test('fetches the data on mount and passes to WorldChampionsList', async () => {
  fetchAllWorldChampionsFromYear.mockResolvedValue({MRData: 'some data'})

  render(<HomePage />);

  await waitFor(() => expect(fetchAllWorldChampionsFromYear).toHaveBeenCalledTimes(1));
  expect(await screen.getByText('Champions Page')).toBeInTheDocument();
});

test('fetch data returns null and shows loading', async () => {
  fetchAllWorldChampionsFromYear.mockResolvedValue(null)

  render(<HomePage />);

  await waitFor(() => expect(fetchAllWorldChampionsFromYear).toHaveBeenCalledTimes(1));
  expect(await screen.getByText('World Champions')).toBeInTheDocument();
  expect(await screen.getByText('loading...')).toBeInTheDocument();
});
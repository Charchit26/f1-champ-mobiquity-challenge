import { render, screen, waitFor } from '@testing-library/react';
import { useLocation } from 'react-router';
import SelectedYearPage from '.';
import { fetchAllWinnersOfSelectedYear } from '../../api/ergastAPI';

jest.mock("react-router", () => ({
    ...jest.requireActual("react-router"),
    useLocation: jest.fn(),
    useParams: () => ({
        year: 2020,
      })
  }));
  
jest.mock('../../api/ergastAPI');

jest.mock("../../components/YearlyWinnersList", () => (props) => {
    return <div>Yearly Page {JSON.stringify(props)}</div>;
})

test('fetches the data on mount and passes to YearlyWinnersList', async () => {
  useLocation.mockReturnValue({
    pathname: "localhost:3000/year/2020",
    state: {selectedDriver: 'SOmeOne'}
  })  
  fetchAllWinnersOfSelectedYear.mockReturnValue({ MRData: {data: 'someData'} })

    render(<SelectedYearPage />);

    await waitFor(() => expect(fetchAllWinnersOfSelectedYear).toHaveBeenCalledTimes(1))
    expect(await screen.getByText('Winners Season 2020')).toBeInTheDocument();
    expect(await screen.getByText('Yearly Page {"data":{"data":"someData"},"selectedDriver":"SOmeOne"}')).toBeInTheDocument();
});

test('fetch data returns null and shows loading screen', async () => {
  useLocation.mockReturnValue({
    pathname: "localhost:3000/year/2020",
    state: {selectedDriver: 'SOmeOne'}
  })  
  fetchAllWinnersOfSelectedYear.mockReturnValue(null)

  render(<SelectedYearPage />);

  await waitFor(() => expect(fetchAllWinnersOfSelectedYear).toHaveBeenCalledTimes(1))
  expect(await screen.getByText('Winners Season 2020')).toBeInTheDocument();
  expect(await screen.getByText('loading...')).toBeInTheDocument();
});

test('List works when no driver is selected', async () => {
  useLocation.mockReturnValue({
    pathname: "localhost:3000/year/2020",
    state: undefined
  })  
  fetchAllWinnersOfSelectedYear.mockReturnValue({ MRData: {data: 'someData'} })

  render(<SelectedYearPage />);

  await waitFor(() => expect(fetchAllWinnersOfSelectedYear).toHaveBeenCalledTimes(1))
  expect(await screen.getByText('Winners Season 2020')).toBeInTheDocument();
  expect(await screen.getByText('Yearly Page {"data":{"data":"someData"}}')).toBeInTheDocument();
});
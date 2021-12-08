import { render, screen, waitFor } from '@testing-library/react';
import YearlyWinnersList from '.';

test('renders the list of cards for the data', () => {
  const mockData = {
    data: {
      RaceTable: {
        Races: [
          {
            "round": "12",
            "Results": [
              {
                "position": "1",
                "Driver": {
                  "driverId": "vettel",
                  "givenName": "Sebastian",
                  "familyName": "Vettel",
                }
              }
            ]
          }
        ]
      }
    }
  }
  render(<YearlyWinnersList data={mockData}/>);

  waitFor(() => expect(screen.getByText('Sebastian Vettel')).toBeInTheDocument())
  waitFor(() => expect(screen.getByText('2010')).toBeInTheDocument())
  expect(screen.queryByTestId('yearlyListItem')).toBeInTheDocument()
});

test('renders `no data` when data is not available', () => {
  render(<YearlyWinnersList />);

  expect(screen.getByText('No Data')).toBeInTheDocument()
  expect(screen.queryByTestId('yearlyListItem')).not.toBeInTheDocument()
});

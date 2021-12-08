import { render, screen, waitFor } from '@testing-library/react';
import WorldChampionsList from '.';

test('renders the list of cards for the data', () => {
  const mockData = {
    data: {
      StandingsTable: {
        StandingsLists: [
          {
            "season": "2010",
            "DriverStandings": [
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
  render(<WorldChampionsList data={mockData}/>);

  waitFor(() => expect(screen.getByText('Sebastian Vettel')).toBeInTheDocument())
  waitFor(() => expect(screen.getByText('2010')).toBeInTheDocument())
  expect(screen.queryByTestId('listItem')).toBeInTheDocument()
});

test('renders `no data` when data is not available', () => {
  render(<WorldChampionsList />);

  expect(screen.getByText('No Data')).toBeInTheDocument()
  expect(screen.queryByTestId('listItem')).not.toBeInTheDocument()
});

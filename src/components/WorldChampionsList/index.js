import React from 'react'
import { Link } from 'react-router-dom';
import { List, Card } from 'semantic-ui-react'

export default function WorldChampionsList({ data }) {
  if (!data) {
    return (<>No Data</>)
  }
  const { StandingsTable } = data;

  return (
    <div className="centeredList">
      <List data-testid="listItem" animated relaxed verticalAlign='middle'>
        {StandingsTable?.StandingsLists.map(({ season, DriverStandings }) => {
          const { Driver } = DriverStandings[0];
          return (
            <List.Item>
              <Link key={season} to={`/year/${season}`} state={{ selectedDriver: Driver }} >
                <Card
                  fluid
                  header={`${Driver.givenName} ${Driver.familyName}`}
                  meta={season}
                />
              </Link>
            </List.Item>
          )
        })
        }
      </List>
    </div>
  )
}

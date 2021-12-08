import React from 'react'
import { List, Card } from 'semantic-ui-react'

export default function YearlyWinnersList({data, selectedDriver}) {
  if (!data) {
    return (<>No Data</>)
  }
  const { RaceTable } = data;

  return (
    <div className="centeredList">
      <List data-testid="yearlyListItem" animated verticalAlign='middle'>
        {RaceTable?.Races.map(({ round, raceName, Results }) => {
          const { Driver } = Results[0];
          return (
            <Card
              key={round}
              fluid
              className={(selectedDriver && Driver.givenName === selectedDriver.givenName) ? "highlightedItem" : ""}
              header={`${Driver.givenName} ${Driver.familyName}`}
              meta={`Race Number ${round} - ${raceName}`}
            />
          )
        })
        }
      </List>
    </div>
  )
}
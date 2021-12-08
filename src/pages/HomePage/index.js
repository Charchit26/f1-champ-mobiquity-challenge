import { useEffect, useState } from "react"
import { render } from "react-dom";
import { Header } from "semantic-ui-react";
import { fetchAllWorldChampionsFromYear } from "../../api/ergastAPI"
import WorldChampionsList from "../../components/WorldChampionsList";

export default function HomePage() {
    const [winnersData, setWinnersData] = useState();
    useEffect(() => {
        async function fetchData() {
            const data = await fetchAllWorldChampionsFromYear(2005);
            if (data)
                setWinnersData({ ...data.MRData })
        }
        fetchData();
    }, [])

    return(
        <>
            <Header className="subHeading">World Champions</Header>
            {winnersData ? <WorldChampionsList data={winnersData} /> : <div>loading...</div>}
        </>
    )
}
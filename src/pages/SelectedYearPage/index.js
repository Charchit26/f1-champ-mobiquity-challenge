import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Header } from "semantic-ui-react";
import { fetchAllWinnersOfSelectedYear } from "../../api/ergastAPI";
import YearlyWinnersList from "../../components/YearlyWinnersList";

export default function SelectedYearPage() {
    let { year } = useParams();
    let { state } = useLocation();
    let selectedDriver = state? state.selectedDriver : undefined

    const [winnersData, setWinnersData] = useState();
    useEffect(() => {
        async function fetchData() {
            const data = await fetchAllWinnersOfSelectedYear(year);
            if (data)
                setWinnersData({ ...data.MRData })
        }
        fetchData()
    }, [year])

    return (
        <>
            <h1>Winners Season {year}</h1>
            {winnersData ? <YearlyWinnersList data={winnersData} selectedDriver={selectedDriver} />
                : <div>loading...</div>}
        </>
    )
}
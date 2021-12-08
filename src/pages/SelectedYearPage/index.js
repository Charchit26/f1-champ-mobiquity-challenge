import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Header } from "semantic-ui-react";
import { fetchAllWinnersOfSelectedYear } from "../../api/ergastAPI";
import YearlyWinnersList from "../../components/YearlyWinnersList";

export default function SelectedYearPage() {
    let { year } = useParams();
    let { state: { selectedDriver } } = useLocation();

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
            <Header className="subHeading">Winners Season {year}</Header>
            {winnersData ? <YearlyWinnersList data={winnersData} selectedDriver={selectedDriver} />
                : <div>loading...</div>}
        </>
    )
}
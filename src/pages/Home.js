import { useQuery } from "@tanstack/react-query" /* This hook will be used to make requests that you get data from an API */
/* There is an another hook used to CHANGE data from an API */
import Axios from "axios";

export const Home = () => {
    const { data: catData, isLoading, isError, refetch } = useQuery(["cat"], () => {
       return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
    });

    if (isError) {
        return <h1>Sorry there was an error...</h1>
    }

    if (isLoading) {
        return <h1> Loading...</h1>
    }

    return (
        <h1>
            THIS IS THE HOME PAGE<p>{catData?.fact}</p>
            <button onClick={refetch} >Update Data</button>
        </h1>
    )
    
}
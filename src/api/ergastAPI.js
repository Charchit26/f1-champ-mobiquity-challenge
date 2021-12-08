import axios from "axios"
import { SESSION_STORAGE_ALL_WINNERS_KEY, SESSION_STORAGE_SELECTED_YEAR } from "../constants";
import { ALL_WINNERS_URL, BASE_URL } from "../constants/urlConstants";

export const fetchAllWorldChampionsFromYear = async(year = 2005) => {
    //check cache
    const cacheContent = sessionStorage.getItem(`${SESSION_STORAGE_ALL_WINNERS_KEY}-${year}`)
    
    //cache hit
    if(cacheContent)
        return JSON.parse(cacheContent)

    //cache miss
    const offset=year-1950;

    try {
        const response = await axios.get(`${ALL_WINNERS_URL}?offset=${offset}`)
        sessionStorage.setItem(`${SESSION_STORAGE_ALL_WINNERS_KEY}-${year}`, JSON.stringify(response.data))
        return response.data
    } catch(err) {
        // Log error here
        // console.error('Error calling the API', err)
        return undefined;
    }
}

export const fetchAllWinnersOfSelectedYear = async(year) => {
    //check cache
    const cacheContent = sessionStorage.getItem(`${SESSION_STORAGE_SELECTED_YEAR}-${year}`)
    
    //cache hit
    if(cacheContent)
        return JSON.parse(cacheContent)

    //cache miss
    try {
        const response = await axios.get(`${BASE_URL}/${year}/results/1.json`)
        sessionStorage.setItem(`${SESSION_STORAGE_SELECTED_YEAR}-${year}`, JSON.stringify(response.data))
        return response.data
    } catch(err) {
        // Log error here
        // console.error('Error calling the API', err)
        return undefined;
    }
}


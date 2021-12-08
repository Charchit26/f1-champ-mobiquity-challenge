import axios from "axios";
import { SESSION_STORAGE_ALL_WINNERS_KEY, SESSION_STORAGE_SELECTED_YEAR } from "../constants";
import { ALL_WINNERS_URL, BASE_URL } from "../constants/urlConstants";
import { fetchAllWinnersOfSelectedYear, fetchAllWorldChampionsFromYear } from "./ergastAPI";

jest.mock('axios')

const localStorageMock = (() => {
    let store = {};

    return {
        getItem(key) {
            return store[key] || null;
        },
        setItem(key, value) {
            store[key] = value.toString();
        },
        removeItem(key) {
            delete store[key];
        },
        clear() {
            store = {};
        }
    };
})();

Object.defineProperty(window, 'sessionStorage', {
    value: localStorageMock
});

beforeEach(() => {
    window.sessionStorage.clear();
    jest.restoreAllMocks();
});

test('fetchAllWorldChampionsFromYear calls the correct URL with offset', async () => {
    const setItemSpy = jest.spyOn(window.sessionStorage, 'setItem');
    axios.get.mockResolvedValue({ data: 'someMockData' })

    await expect(fetchAllWorldChampionsFromYear(2020)).resolves.toEqual('someMockData');
    expect(setItemSpy).toHaveBeenCalledWith(`${SESSION_STORAGE_ALL_WINNERS_KEY}-2020`, JSON.stringify('someMockData'))
    expect(axios.get).toHaveBeenCalledWith(`${ALL_WINNERS_URL}?offset=70`)
});

test('fetchAllWorldChampionsFromYear uses the cache when available', async () => {
    const getItemSpy = jest.spyOn(window.sessionStorage, 'getItem');
    sessionStorage.setItem(`${SESSION_STORAGE_ALL_WINNERS_KEY}-2020`, JSON.stringify('someMockData'))

    await expect(fetchAllWorldChampionsFromYear(2020)).resolves.toEqual('someMockData');
    expect(getItemSpy).toHaveBeenCalledWith(`${SESSION_STORAGE_ALL_WINNERS_KEY}-2020`)
    expect(axios.get).not.toHaveBeenCalled()
});

test('fetchAllWorldChampionsFromYear handles API failure', async () => {
    axios.get.mockRejectedValue({ error: 'some error' })
    await expect(fetchAllWorldChampionsFromYear(2020)).resolves.toEqual(undefined);
});

test('fetchAllWinnersOfSelectedYear calls the correct URL with offset', async () => {
    const setItemSpy = jest.spyOn(window.sessionStorage, 'setItem');
    axios.get.mockResolvedValue({ data: 'someMockDataForSelectedYear' })

    await expect(fetchAllWinnersOfSelectedYear(2020)).resolves.toEqual('someMockDataForSelectedYear');
    expect(setItemSpy).toHaveBeenCalledWith(`${SESSION_STORAGE_SELECTED_YEAR}-2020`, JSON.stringify('someMockDataForSelectedYear'))
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/2020/results/1.json`)
});

test('fetchAllWinnersOfSelectedYear uses the cache when available', async () => {
    const getItemSpy = jest.spyOn(window.sessionStorage, 'getItem');
    sessionStorage.setItem(`${SESSION_STORAGE_SELECTED_YEAR}-2020`, JSON.stringify('someMockDataForSelectedYear'))

    await expect(fetchAllWinnersOfSelectedYear(2020)).resolves.toEqual('someMockDataForSelectedYear');
    expect(getItemSpy).toHaveBeenCalledWith(`${SESSION_STORAGE_SELECTED_YEAR}-2020`)
    expect(axios.get).not.toHaveBeenCalled()
});

test('fetchAllWinnersOfSelectedYear handles API failure', async () => {
    axios.get.mockRejectedValue({ error: 'some error' })
    await expect(fetchAllWinnersOfSelectedYear(2020)).resolves.toEqual(undefined);
});
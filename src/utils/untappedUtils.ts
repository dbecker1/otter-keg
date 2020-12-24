import { Beer, GetBeerDetailsResponse } from "../types/GetBeerDetailsResponse";

const base_url = "https://api.untappd.com/v4"
const client_id = "C8305503E9B12A5EBC3829BDEF8C547A2572EF2D"
const client_secret = "162B6383E2AB7C1635D4D3E90C348A956B3F2F64"

function get(path: String): Promise<any> {
    console.log("Calling Untappd API: ", path);
    let url = base_url + path
    if (path.indexOf("?") <  0) {
        url = url + "?"
    } else {
        url = url + "&"
    }
    url = url + "client_id=" + client_id + "&client_secret=" + client_secret;

    return fetch(url).then(response => {
        if (!response.ok) {
            response.text().then(text => {
                console.log("Request error. Response body: ", text)
            })
            throw new Error(response.statusText)
        }
        return response.json();
    })
}

function getAndSave(path: string): Promise<any> {
    return get(path).then(response => {
        let cachedData = {
            data: response,
            expiration: new  Date()
        }
        cachedData.expiration.setDate(cachedData.expiration.getDate() + 1);
        localStorage.setItem(path, JSON.stringify(cachedData));
        return Promise.resolve(response);
    })
}

function getCached(path: string): Promise<any> {
    let rawCachedResponse = localStorage.getItem(path);
    if (!rawCachedResponse) {
        return getAndSave(path);
    } else {
        let cachedResponse = JSON.parse(rawCachedResponse);
        if (new Date(cachedResponse.expiration) < new Date()) {
            console.log("Expired API response in cache for path: ", path)
            return getAndSave(path);
        } else {
            console.log("Fetching Untappd API request from cache: ", path);
            return Promise.resolve(cachedResponse.data);
        }
    }
}

export function getBeerDetails(bid: String): Promise<Beer> {
    return getCached("/beer/info/" + bid).then((rawResponse: any) => {
        let response : GetBeerDetailsResponse = rawResponse as GetBeerDetailsResponse;
        let beer: Beer = response.response.beer;
        return Promise.resolve(beer);
    })
}

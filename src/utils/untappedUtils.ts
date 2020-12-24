
const base_url = "https://api.untappd.com/v4"
const client_id = "C8305503E9B12A5EBC3829BDEF8C547A2572EF2D"
const client_secret = "162B6383E2AB7C1635D4D3E90C348A956B3F2F64"

function get(path: String): Promise<any> {
    
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
                console.log("Request error. Text: ", text)
            })
            throw new Error(response.statusText)
        }
        return response.json();
    })
}

export function getBeerDetails(bid: String): Promise<any> {
    return new Promise((resolve, reject) => {
        let key = "/beer/info/" + bid
        let cachedResponse = localStorage.getItem(key);
        if (!!cachedResponse) {
            console.log("Fetching Untappd API request from cache:  ", key);
            resolve(JSON.parse(cachedResponse));
        } else {
            console.log("Calling Untappd API: ", key);
            get(key).then(response => {
                localStorage.setItem(key, JSON.stringify(response));
                resolve(response);
            })
        }
    })
}

export const getLocations = async function () {
    return fetch('http://127.0.0.1:8080/locations')
        .then(res => 
            {return res.json()})
        
    }

export const getLocation = async function (locationId) {
    return fetch ('http://localhost:8080/locations/{locationId}')
    .then(res => {return res.json()})
}


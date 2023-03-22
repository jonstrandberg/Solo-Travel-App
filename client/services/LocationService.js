export const getLocations = async function () {
    try {
        const res = await fetch('http://127.0.0.1:8080/locations');
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching locations:', error);
        throw error;
    }
}

// export const getLocations = async function () {
//     return fetch('http://127.0.0.1:8080/locations')
//         .then(res => 
//             {return res.json()})

//     }


export const getLocation = async function (locationId) {
    try {
        const res = await fetch(`http://127.0.0.1:8080/locations/${locationId}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    } catch (error) {
        console.error(`Error fetching location with ID ${locationId}:`, error);
        throw error;
    }
}

export const getLocationByName = async function (locationName) {
    return fetch ('http://localhost:8080/locations/{locationName}')
    .then(res => {return res.json()})
}



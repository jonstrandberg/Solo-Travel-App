export const getCountries = async function () {
        try {
        const res = await fetch('http://localhost:8080/countries');
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
        } catch (error) {
        console.error('Error fetching countries:', error);
        throw error;
        }
    }

// export const getCountries = async function () {
//     return fetch('http://localhost:8080/countries')
//         .then(res => 
//             {return res.json()})
//     }

export const getCountry = async function (countryId) {
    try {
        const res = await fetch(`http://localhost:8080/countries/${countryId}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
        } catch (error) {
        console.error(`Error fetching country with ID ${countryId}:`, error);
        throw error;
        }
    }

// export const getCountry = async function (countryId) {
//     return fetch ('http://localhost:8080/countries/{countryId}')
//     .then(res => {return res.json()})
// }

export const getLocationsByCountryId = async function(countryId) {
    try {
        const response = await fetch('http://localhost:8080/countries?country_id=' + id.toString(countryId), {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the request:', error);
        throw error;
    }
};

// export const getLocationsByCountryId = async function(countryId) {
//     return fetch('http://localhost:8080/countries?country_id=' + id.toString(countryId), {
//         method: 'GET',
//     })
//         .then((res) => {
//             {return res.json()};
//         });
//     }
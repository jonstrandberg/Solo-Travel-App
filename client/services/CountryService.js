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
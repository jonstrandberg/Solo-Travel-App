export const getCountries = async function () {
    return fetch('http://localhost:8080/countries')
        .then(res => 
            {return res.json()})
        
    }

export const getCountry = async function (countryId) {
    return fetch ('http://localhost:8080/countries/{countryId}')
    .then(res => {return res.json()})
}
export const getUserProfiles = async function () {
    return fetch('http://localhost:8080/user_profiles')
        .then(res => 
            {return res.json()})
        
    }

export const getUserProfile = async function (userProfileId) {
    return fetch ('http://localhost:8080/countries/{userProfileId}')
    .then(res => {return res.json()})
}
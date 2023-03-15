export const getSignUps = async function () {
    return fetch('http://localhost:8080/sign_ups')
        .then(res => 
            {return res.json()})
        
    }

export const getSignUp = async function (signUpId) {
    return fetch ('http://localhost:8080/countries/{signUpId}')
    .then(res => {return res.json()})
}
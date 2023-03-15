export const getSignUps = async function () {
    try {
        const res = await fetch('http://localhost:8080/sign_ups');
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
        } catch (error) {
        console.error('Error fetching sign-ups:', error);
        throw error;
        }
    }

// export const getSignUps = async function () {
//     return fetch('http://localhost:8080/sign_ups')
//         .then(res => 
//             {return res.json()})
//     }

export const getSignUp = async function (signUpId) {
    try {
        const res = await fetch(`http://localhost:8080/sign_ups/${signUpId}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
        } catch (error) {
        console.error(`Error fetching sign-up with ID ${signUpId}:`, error);
        throw error;
        }
    }


// export const getSignUp = async function (signUpId) {
//     return fetch ('http://localhost:8080/countries/{signUpId}')
//     .then(res => {return res.json()})
// }


export const addSignUp = async function (signUp) {
    try {
        const res = await fetch('http://localhost:8080/sign_ups', {
            method: 'POST',
            body: JSON.stringify(signUp),
            headers: {
            "Accept":"application/json",
            "Content-Type":"application/json",
            }
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
        } catch (error) {
        console.error(`Error adding sign-up:`, error);
        throw error;
        }
    }

// export const addSignUp = async function (signUp) {
//     return fetch('http://localhost:8080/events', {
//         method: 'POST',
//         body: JSON.stringify(signUp),
//         headers: {
//             "Accept":"application/json",
//             "Content-Type":"application/json",
//         }
//     })
//     .then(res => 
//         {return res.json()})
// }
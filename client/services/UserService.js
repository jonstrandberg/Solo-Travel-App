export const getUserProfiles = async function () {
    try {
        const res = await fetch('http://localhost:8080/user_profiles');
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
        } catch (error) {
        console.error('Error fetching user profiles:', error);
        throw error;
        }
    }
    
// export const getUserProfiles = async function () {
//     return fetch('http://localhost:8080/user_profiles')
//         .then(res => 
//             {return res.json()})
        
//     }

export const getUserProfile = async function (userProfileId) {
    try {
        const res = await fetch(`http://localhost:8080/user_profiles/${userProfileId}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
        } catch (error) {
        console.error(`Error fetching user profile with ID ${userProfileId}:`, error);
        throw error;
        }
    }

// export const getUserProfile = async function (userProfileId) {
//     return fetch ('http://localhost:8080/countries/{userProfileId}')
//     .then(res => {return res.json()})
// }


export const addUserProfile = async function (userProfile) {
    try {
        const res = await fetch('http://localhost:8080/userProfiles', {
            method: 'POST',
            body: JSON.stringify(userProfile),
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
        console.error(`Error adding user profile:`, error);
        throw error;
        }
    }


// export const addUserProfile = async function (userProfile) {
//         return fetch('http://localhost:8080/userProfiles', {
//             method: 'POST',
//             body: JSON.stringify(userProfile),
//             headers: {
//                 "Accept":"application/json",
//                 "Content-Type":"application/json",
//             }
//         })
//         .then(res => 
//             {return res.json()})
//     }
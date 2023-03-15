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

export const getUserProfilesByLocationId = async function(locationId) {
    try {
        const response = await fetch('http://localhost:8080/userProfiles?location_id=' + id.toString(locationId), {
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


// export const getUserProfilesByLocationId = async function(locationId) {
//     return fetch('http://localhost:8080/userProfiles?location_id=' + id.toString(locationId), {
//         method: 'GET',
//     })
//         .then((res) => {
//             {return res.json()};
//         });
//     }

export const getUserProfilesByEventId = async function(eventId) {
    try {
        const response = await fetch('http://localhost:8080/userProfiles?event_id=' + id.toString(eventId), {
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

// export const getUserProfilesByEventId = async function(eventId) {
//     return fetch('http://localhost:8080/userProfiles?event_id=' + id.toString(eventId), {
//         method: 'GET',
//     })
//         .then((res) => {
//             {return res.json()};
//         });
//     }
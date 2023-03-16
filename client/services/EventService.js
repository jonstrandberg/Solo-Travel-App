export const getEvents = async function () {
    try {
        const res = await fetch('http://localhost:8080/events');
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
        } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
        }
    }
    

// export const getEvents = async function () {
//     return fetch('http://localhost:8080/events')
//         .then(res => 
//             {return res.json()})
        
//     }

export const getEvent = async function (eventId) {
    try {
        const res = await fetch(`http://localhost:8080/events/${eventId}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
        } catch (error) {
        console.error(`Error fetching event with ID ${eventId}:`, error);
        throw error;
        }
    }

// export const getEvent = async function (eventId) {
//     return fetch ('http://localhost:8080/events/{eventId}')
//     .then(res => {return res.json()})
// }

export const addEvent = async function (event) {
    try {
        const res = await fetch('http://localhost:8080/events', {
            method: 'POST',
            body: JSON.stringify(event),
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
        } catch (error) {
        console.error('Error adding event:', error);
        throw error;
        }
    }
    
// export const addEvent = async function (event) {
//     return fetch('http://localhost:8080/events', {
//         method: 'POST',
//         body: JSON.stringify(event),
//         headers: {
//             "Accept":"application/json",
//             "Content-Type":"application/json",
//         }
//     })
//     .then(res => 
//         {return res.json()})
// }

export const getEventsBookedByUserProfileId = async function(userProfileId) {
    try {
        const response = await fetch('http://localhost:8080/events?user_profile_id=' + id.toString(userProfileId), {
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


// export const getEventsByUserProfileId = async function(userProfileId) {
//     return fetch('http://localhost:8080/events?user_profile_id=' + id.toString(userProfileId), {
//         method: 'GET',
//     })
//         .then((res) => {
//             {return res.json()};
//         });
//     }

export const getEventsByLocationId = async function(locationId) {
    try {
        const response = await fetch('http://localhost:8080/events?location_id=' + id.toString(locationId), {
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


// export const getEventsByLocationId = async function(locationId) {
//     return fetch('http://localhost:8080/events?location_id=' + id.toString(locationId), {
//         method: 'GET',
//     })
//         .then((res) => {
//             {return res.json()};
//         });
//     }



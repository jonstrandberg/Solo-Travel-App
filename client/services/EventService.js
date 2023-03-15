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

export const getEventsByUserProfileId = async function(userProfileId) {
    return fetch('http://localhost:8080/events?user_id=' + id.toString(userProfileId), {
        method: 'GET',
    })
        .then((response) => response.json())
        .then((res) => {
            {return res.json()};
        });
    }
    

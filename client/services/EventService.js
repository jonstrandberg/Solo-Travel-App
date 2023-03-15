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

// Replace YOUR_LOCATION_ID with the actual location ID you want to search for
const locationId = "YOUR_LOCATION_ID";
const apiUrl = `https://www.eventbriteapi.com/v3/events/search/?location.id=${locationId}&token=YOUR_EVENTBRITE_API_TOKEN`;

// Make a GET request to the Eventbrite API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // The list of events is available in the "events" array
        const events = data.events;
        
        // Do something with the events (e.g. display them on a webpage)
        console.log(events);
    })
    .catch(error => {
        console.error("Error fetching events", error);
    });

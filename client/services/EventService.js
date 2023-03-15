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

export const updateEventTitle = async function (eventId, newTitle){
    try {
        const response = await fetch("http://127.0.0.1:8080/events/" + eventId.toString() + "/update-title", {
            method: "PUT",
            body: JSON.stringify(newTitle),
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        const res = await response.json();
        return res;
    } catch (error) {
        console.error("Error updating event title:", error);
        return null;
    }
}

// export const updateEventTitle = async function (eventId, newTitle){
//     return fetch("http://127.0.0.1:8080/events/" + eventId.toString() + "/update-title",
//         {
//             method: "PUT",
//             body: JSON.stringify(newTitle),
//             headers: { "Content-Type": "application/json" },
//         }
//         ).then((response) => response.json())
//         .then((res) => {
//             {return res.json()};
//         });
//     }

export const updateEventTime = async function (eventId, newTime) {
    try {
        const response = await fetch("http://127.0.0.1:8080/events/" + eventId.toString() + "/update-time", {
            method: "PUT",
            body: JSON.stringify(newTime),
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        const res = await response.json();
        return res;
    } catch (error) {
        console.error("Error updating event time:", error);
        return null;
    }
}


// export const updateEventTime = async function (eventId, newTime){
//         return fetch("http://127.0.0.1:8080/events/" + eventId.toString() + "/update-time",
//             {
//                 method: "PUT",
//                 body: JSON.stringify(newTime),
//                 headers: { "Content-Type": "application/json" },
//             }
//             ).then((response) => response.json())
//             .then((res) => {
//                 {return res.json()};
//             });
//         }

export const updateEventDate = async function (eventId, newDate) {
    try {
        const response = await fetch("http://127.0.0.1:8080/events/" + eventId.toString() + "/update-date", {
            method: "PUT",
            body: JSON.stringify(newDate),
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        const res = await response.json();
        return res;
    } catch (error) {
        console.error("Error updating event date:", error);
        return null;
    }
}

// export const updateEventDate = async function (eventId, newDate){
//             return fetch("http://127.0.0.1:8080/events/" + eventId.toString() + "/update-date",
//                 {
//                     method: "PUT",
//                     body: JSON.stringify(newDate),
//                     headers: { "Content-Type": "application/json" },
//                 }
//                 ).then((response) => response.json())
//                 .then((res) => {
//                     {return res.json()};
//                 });
//             }

export const updateEventDuration = async function (eventId, newDuration) {
    try {
        const response = await fetch("http://127.0.0.1:8080/events/" + eventId.toString() + "/update-duration", {
            method: "PUT",
            body: JSON.stringify(newDuration),
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        const res = await response.json();
        return res;
    } catch (error) {
        console.error("Error updating event duration:", error);
        return null;
    }
}

export const updateEventDescribtion = async function (eventId, newDescribtion) {
    try {
        const response = await fetch("http://127.0.0.1:8080/events/" + eventId.toString() + "/update-description", {
            method: "PUT",
            body: JSON.stringify(newDescribtion),
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        const res = await response.json();
        return res;
    } catch (error) {
        console.error("Error updating event description:", error);
        return null;
    }
}

export const updateEventLocation = async function (eventId, newLocation) {
    try {
        const response = await fetch("http://127.0.0.1:8080/events/" + eventId.toString() + "/update-location", {
            method: "PUT",
            body: JSON.stringify(newLocation),
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        const res = await response.json();
        return res;
    } catch (error) {
        console.error("Error updating event location:", error);
        return null;
    }
}

// export const deleteEvent = function (eventId) {
//     return fetch('http://127.0.0.1:8080/events/' + eventId.toString() + "/delete", {
//         method: 'DELETE'
//     });
// }

export const deleteEvent = async function (eventId) {
    try {
        const response = await fetch('http://127.0.0.1:8080/events/' + eventId.toString() + "/delete", {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        return true;
    } catch (error) {
        console.error("Error deleting event:", error);
        return false;
    }
}




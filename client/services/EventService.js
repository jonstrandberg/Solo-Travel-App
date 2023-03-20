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

    export const getEventsBookedByUserProfileId = async function(userProfileId) {
        try {
            const res = await fetch('http://localhost:8080/events?user_profile_id=' + userProfileId.toString());
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        } catch (error) {
            console.error('Error fetching events:', error);
            throw error;
        }
    }

export const getEventsByLocationId = async function(locationId) {
    try {
        const response = await fetch('http://localhost:8080/events?location_id=' + locationId.toString(), {
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

export const updateEventTitle = async function (eventId, newTitle){
    try {
        const response = await fetch("http://127.0.0.1:8080/events/" + eventId.toString() + "/set_title", {
            method: "PUT",
            body: JSON.stringify({ new: newTitle }),
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

export const updateEventTime = async function (eventId, newTime) {
    try {
        const response = await fetch("http://127.0.0.1:8080/events/" + eventId.toString() + "/set_time", {
            method: "PUT",
            body: JSON.stringify({ new: newTime }),
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

export const updateEventDate = async function (eventId, newDate) {
    try {
        const response = await fetch("http://127.0.0.1:8080/events/" + eventId.toString() + "/set_date", {
            method: "PUT",
            body: JSON.stringify({ new: newDate }),
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

export const updateEventDuration = async function (eventId, newDuration) {
    try {
        const response = await fetch("http://127.0.0.1:8080/events/" + eventId.toString() + "/set_duration", {
            method: "PUT",
            body: JSON.stringify({ new: newDuration }),
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
        const response = await fetch("http://127.0.0.1:8080/events/" + eventId.toString() + "/set_description", {
            method: "PUT",
            body: JSON.stringify({ new: newDescribtion }),
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
        const response = await fetch("http://127.0.0.1:8080/events/" + eventId.toString() + "/set_location", {
            method: "PUT",
            body: JSON.stringify({ new: newLocation }),
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

export const updateEventCapacity = async function (eventId, newCapacity) {
    try {
        const response = await fetch("http://127.0.0.1:8080/events/" + eventId.toString() + "/set_capacity", {
            method: "PUT",
            body: JSON.stringify({ new: newCapacity }),
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        const res = await response.json();
        return res;
    } catch (error) {
        console.error("Error updating event capacity:", error);
        return null;
    }
}

export const updateEventCreator = async function (eventId, newCreator) {
    try {
        const response = await fetch("http://127.0.0.1:8080/events/" + eventId.toString() + "/set_creator", {
            method: "PUT",
            body: JSON.stringify({ new: newCreator }),
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        const res = await response.json();
        return res;
    } catch (error) {
        console.error("Error updating event creator:", error);
        return null;
    }
}

export const deleteEvent = async function (eventId) {
    try {
        const response = await fetch('http://localhost:8080/events/' + eventId.toString(), {
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

export const getEventsCreatedByUserProfileId = async function (user_profile_id) {
    try {
        const response = await fetch(`http://localhost:8080/sign_ups/events/${user_profile_id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
        } catch (error) {
        console.error('There was an error fetching events:', error);
        throw error;
        }
};





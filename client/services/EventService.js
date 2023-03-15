export const getEvents = async function () {
    return fetch('http://localhost:8080/events')
        .then(res => 
            {return res.json()})
        
    }

export const getEvent = async function (eventId) {
    return fetch ('http://localhost:8080/events/{eventId}')
    .then(res => {return res.json()})
}

export const addEvent = async function (event) {
    return fetch('http://localhost:8080/events', {
        method: 'POST',
        body: JSON.stringify(event),
        headers: {
            "Accept":"application/json",
            "Content-Type":"application/json",
        }
    })
    .then(res => 
        {return res.json()})
}
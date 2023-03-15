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

export const getUserProfilesByLocationId = async function(locationId) {
    try {
        const response = await fetch('http://localhost:8080/userProfiles?location_id=' + locationId.toString(), {
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

export const getUserProfilesByEventId = async function(eventId) {
    try {
        const response = await fetch('http://localhost:8080/userProfiles?event_id=' + eventId.toString(), {
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

export const updateUserProfileName = async function (userProfileId, newName) {
    try {
        const response = await fetch("http://127.0.0.1:8080/userProfiles/" + userProfileId.toString() + "/update_display_name", {
            method: "PUT",
            body: JSON.stringify(newName),
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        const res = await response.json();
        return res;
    } catch (error) {
        console.error("Error updating user profile name:", error);
        return null;
    }
}

export const updateUserProfileHomeTown = async function (userProfileId, newHomeTown) {
    try {
        const response = await fetch("http://127.0.0.1:8080/userProfiles/" + userProfileId.toString() + "/update_hometown", {
            method: "PUT",
            body: JSON.stringify(newHomeTown),
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        const res = await response.json();
        return res;
    } catch (error) {
        console.error("Error updating user profile :", error);
        return null;
    }
}

export const updateUserProfileNationality = async function (userProfileId, newNationality) {
    try {
        const response = await fetch("http://127.0.0.1:8080/userProfiles/" + userProfileId.toString() + "/update_nationality", {
            method: "PUT",
            body: JSON.stringify(newNationality),
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        const res = await response.json();
        return res;
    } catch (error) {
        console.error("Error updating user nationality :", error);
        return null;
    }
}

export const updateUserProfileAge = async function (userProfileId, newAge) {
    try {
        const response = await fetch("http://127.0.0.1:8080/userProfiles/" + userProfileId.toString() + "/update_age", {
            method: "PUT",
            body: JSON.stringify(newAge),
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        const res = await response.json();
        return res;
    } catch (error) {
        console.error("Error updating user age :", error);
        return null;
    }
}

export const updateUserProfileAvatarUrl = async function (userProfileId, newAvatarUrl) {
    try {
        const response = await fetch("http://127.0.0.1:8080/userProfiles/" + userProfileId.toString() + "/update_avatar_url", {
            method: "PUT",
            body: JSON.stringify(newAvatarUrl),
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        const res = await response.json();
        return res;
    } catch (error) {
        console.error("Error updating user profile photo :", error);
        return null;
    }
}

export const updateUserProfileLocation = async function (userProfileId, newLocation) {
    try {
        const response = await fetch("http://127.0.0.1:8080/userProfiles/" + userProfileId.toString() + "/update_location", {
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
        console.error("Error updating user location :", error);
        return null;
    }
}
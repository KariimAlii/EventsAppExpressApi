// event.js

// Initial data
let data = {
    events: [
        {
            id: "e1",
            title: "A dummy event",
            date: "2023-02-22",
            image: "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
            description: "Join this amazing event and connect with fellow developers."
        }
    ],
    users: [
        {
            id: "u1",
            email: "karim@gmail.com",
            password: "$2a$12$XPAxICR7bPltLAbGPcZh.eIWg.8XVN6ND5iIRV2bldwxxUelwgMEq"
        }
    ]
};

// Functions to interact with data
function getEvents() {
    return data.events;
}

function getUsers() {
    return data.users;
}

function getStoredData() {
    return data;
}

function setStoredData(newData) {
    data = newData;
}
function addEvent(event) {
    data.events.push(event);
}

function addUser(user) {
    data.users.push(user);
}

// Export everything you need
module.exports = {
    getEvents,
    getUsers,
    addEvent,
    addUser,
    getStoredData,
    setStoredData
};

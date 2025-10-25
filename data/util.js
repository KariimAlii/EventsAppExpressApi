const fs = require('node:fs/promises');
const path = '/tmp/events.json';

async function readData() {
    try {
        let data = await fs.readFile(path, 'utf8');
        if(!data) {
            data = {
                events: [
                    {
                        title: "title 2",
                        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
                        date: "2025-10-04",
                        description: "jajaja",
                        id: "d0b63435-cdf7-4338-81c1-198438bb8fb3"
                    },
                    {
                        title: "aaa1111111",
                        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
                        date: "2025-10-17",
                        description: "aaaaaaaaa",
                        id: "c905454c-ecd3-4de4-bef2-e0ce5fdc5e8f"
                    },
                    {
                        title: "Event 1",
                        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
                        date: "1996-10-20",
                        description: "hhhhhhhhhhhhhhhhhhh",
                        id: "8af31b5a-8ad6-4739-9efe-141dbe9205ea"
                    },
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
                        email: "karim@gmail.com",
                        password: "$2a$12$XPAxICR7bPltLAbGPcZh.eIWg.8XVN6ND5iIRV2bldwxxUelwgMEq",
                        id: "b8f3a25a-ba00-4c3c-b31a-de7a3e754179"
                    }
                ]
            };

        }
        return JSON.parse(data);
    } catch (err) {
        if (err.code === 'ENOENT') {
            // File does not exist, return empty array
            return [];
        } else {
            throw err; // rethrow other errors
        }
    }
}

async function writeData(data) {
    try {
        await fs.writeFile(path, JSON.stringify(data, null, 2), 'utf8');
    } catch (err) {
        console.error('Error writing to /tmp/events.json:', err);
        throw err;
    }
}

module.exports = { readData, writeData };


exports.readData = readData;
exports.writeData = writeData;
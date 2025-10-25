const fs = require('node:fs/promises');
const db = require("./data");
const path = '/tmp/events.json';

async function readData() {
    try {
        const db = require('./data');
        const data = db.getStoredData();
        return data;
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
        const db = require('./data');
        db.setStoredData(data);
    } catch (err) {
        console.error('Error writing to /tmp/events.json:', err);
        throw err;
    }
}

module.exports = { readData, writeData };


exports.readData = readData;
exports.writeData = writeData;
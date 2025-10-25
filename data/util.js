const fs = require('node:fs/promises');
const path = '/tmp/events.json';

async function readData() {
    try {
        const data = await fs.readFile(path, 'utf8');
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
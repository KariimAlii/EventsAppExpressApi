const fs = require('node:fs/promises');
const path = '/tmp/events.json';

async function readData() {
    try {
        const data = await fs.readFile(path, 'utf8');
        return JSON.parse(data);
    } catch {
        // If file does not exist, return empty array
        return [];
    }
}

async function writeData(data) {
    await fs.writeFile(path, JSON.stringify(data));
}
const fs = require('node:fs/promises');
const path = '/tmp/events.json';

async function readData() {
    try {
        const data = await fs.readFile(path, 'utf8');
        return JSON.parse(data);
    } catch {
        // If file does not exist, return empty array
        return [];
    }
}

async function writeData(data) {
    await fs.writeFile(path, JSON.stringify(data));
}

exports.readData = readData;
exports.writeData = writeData;
const path = require('path')
const fs = require('fs').promises

async function readIncrement() {
    const data = await fs.readFile(path.resolve(__dirname, 'increment.json'))
    return JSON.parse(data)
}

async function writeIncrement(inc) {
    const data = JSON.stringify({"inc":inc})
    await fs.writeFile(path.resolve(__dirname,'increment.json'), data)
}

async function readDatabase() {
    const data = await fs.readFile(path.resolve(__dirname,'database.json'))
    return JSON.parse(data)
}

async function writeDatabase(usuarios) {
    const data = JSON.stringify(usuarios)
    await fs.writeFile(path.resolve(__dirname,'database.json'), data)
}

module.exports = {
    readIncrement, writeIncrement, readDatabase, writeDatabase
}
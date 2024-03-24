const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const { uri } = require('./conf.json');

function findMatches(items, regex) {
    const matches = []
    for (i in items) {
        const item = items[i]

        // Partial match found
        if (regex.test(item.itemName.toLowerCase())) {
            matches.push(item)
        }
    }
    return matches
}

function findFirstMatch(items, regex) {
    const matches = []
    for (i in items) {
        const item = items[i]

        // Partial match found
        if (regex.test(item.itemName.toLowerCase())) {
            return [item]
        }
    }
    return []
}

async function main() {
    await mongoose.connect(uri)
    console.log('\x1b[32mSuccessfully connected to MongoDB!\x1b[0m')

    const itemSchema = new mongoose.Schema({
        itemName: {
            type: String,
            required: true
        },
        itemDesc: {
            type: String,
            required: true
        },
        esgURL: {
            type: String,
            required: true
        },
        imageLine: {
            type: String,
            required: true
        },
        brandName: {
            type: String,
            required: false
        },
        timeStamp: {
            type: Number,
            required: false
        },
        hidden: {
            type: Boolean,
            required: false
        }
    })

    const Item = mongoose.model('items', itemSchema)

    // Express back-end
    const app = express()
    console.log('\x1b[34mExpress app listening to port 5000\x1b[0m')
    app.use(express.json())
    app.use(cors())

    app.get('/', (req, resp) => {
        resp.send('Back-end app functional')
    })

    // HTTP GET
    // Return an array of items from the database whose itemName is similar to the given input query
    app.get('/search', async (req, resp) => {
        try {
            const input = req.query.q.toLowerCase()
            const limit = req.query.l
            const regex = new RegExp(`^${input}+`)

            Item.find()
            .then(items => {
                return (!limit ? findMatches(items, regex) : findFirstMatch(items, regex))
            })
            .then(matches => {
                resp.json(JSON.stringify(matches))
                console.log(`\x1b[32m[GET] Supplied client with search results for '${input}' (${!matches ? 1 : matches.length})\x1b[0m`)
            })
            .catch(e => console.error(e))
        } catch (e) {
            resp.send('Something went wrong')
        }
    })

    app.listen(5000)
}

main().catch(err => console.log(err))
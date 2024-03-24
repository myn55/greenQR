const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

async function main() {
    await mongoose.connect('mongodb+srv://preilly103:4Vb46gqaAMSsjWGo@greeninventory.8hh4cxh.mongodb.net/?retryWrites=true&w=majority&appName=GreenInventory')
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
        esgScore: {
            type: Number,
            required: true
        },
        additionalRisks: {
            type: Array,
            required: false
        },
        riskScores: {
            type: Array,
            required: false
        },
        brandName: {
            type: String,
            required: false
        }
    })

    const Item = mongoose.model('items', itemSchema, 'green-inventory')

    // Express back-end
    const app = express()
    console.log('\x1b[34mExpress app listening to port 5000\x1b[0m')
    app.use(express.json())
    app.use(cors())
    app.get('/', (req, resp) => {
        resp.send('App functional')
    })

    app.post('/register', async (req, resp) => {
        try {
            console.log(req)
        } catch (e) {
            resp.send('Something went wrong')
        }
    })

    app.listen(5000)
}

main().catch(err => console.log(err))
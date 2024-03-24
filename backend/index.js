const mongoose = require('mongoose');

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
            required: false
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

    const Item = mongoose.model('items', itemSchema)

    const laysChips = new Item({
        itemName: 'Original Lays Chips',
        itemDesc: 'A bag of original-flavored Lays chips.',
        esgScore: 7,
        
    });
}

main().catch(err => console.log(err))
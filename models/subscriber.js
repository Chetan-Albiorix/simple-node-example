const mongoose = require('mongoose')
const subScribeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    subscribedToChannel: {
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: new Date()
    }
}) 

module.exports = mongoose.model('Subscriber', subScribeSchema)
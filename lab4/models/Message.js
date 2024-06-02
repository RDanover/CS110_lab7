const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    nickname:String,
    messageID: String,
    roomID: String,
    body: String
})

const Message = mongoose.model('Message', MessageSchema)

module.exports = Message
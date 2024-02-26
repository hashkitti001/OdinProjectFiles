const mongoose = require("mongoose")
const {ObjectId} = require("mongoose").Schema.Types
const User = require("../models/user")
const messageSchema = new mongoose.Schema(
    {
        title: {type: String},
        timestamp: {type: Date, default:Date.now},
        text: {type:String},
        sender: {type: ObjectId, ref: User}
    }
)
const Message = mongoose.Model("messages", userSchema);
module.exports = Message;
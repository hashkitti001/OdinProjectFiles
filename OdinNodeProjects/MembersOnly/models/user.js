const mongoose = require("mongoose")
const userSchema = new mongoose.Schema(
    {
        fullname: {type: String, required: true},
        username: {type: String, required: true},
        password: {type:String, required: true},
        membershipStatus: {type: Boolean}
    }
)
const User = mongoose.Model("users", userSchema);
module.exports = User;
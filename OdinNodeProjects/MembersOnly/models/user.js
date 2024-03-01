const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String, 
            required: true
        },
        username: {
            type: String,
             required: true,
              unique: true
            },
        password: {
            type:String,
             required: true
            },
        membershipStatus: {
            type: Boolean
        },
        role: {
            type: String, 
            enum: ['user', 'admin'],
            default: 'user'
        }
    
    }
)
userSchema.pre('save', async function (next) {
    //Gets the context of the User object
    const user = this
    //checks if the password
    if(!user.isModified('password')) return next()
    try{
       const salt  = await bcrypt.genSalt()
       user.password = await bcrypt.hash(user.password, salt)
       next()
    } catch (e) {
        return next(e)
    }
})
userSchema.methods.comparePassword = async function (password) {
    //
    return bcrypt.compare(password, this.password)
}
const User = mongoose.model("users", userSchema);
module.exports = User;
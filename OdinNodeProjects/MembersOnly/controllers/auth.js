//Handles authentication requuests
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const registerUser = async (req, res, next) => {
    const {username, email, password } = req.body
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({user, email, password: hashedPassword})
        await user.save()
        res.json({"message": "Registration successful"})

    } catch (e){
        next(e)
    }
         
}

const loginUser = async (req, res, next) => {
    const {username, password} = req.body
    try {
        const user = User.findOne({username})
        if(!user){
            res.status(404).json({"message": "User doesn't exist"})
        }
        const passwordMatch = await user.comparePassword(password)
        if(!passwordMatch){
            return res.status(401).json({"message": "Incorrect password"})
        }
        const token = jwt.sign({userId: user._id}, process.env.SECRET_KEY, {
            expiresIn: '1 hour'
        })
        res.json({token})
    } catch(e){
        next(e)
    }
}
module.exports = {registerUser, loginUser}


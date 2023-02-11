import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import User from "../models/User.js"
dotenv.config()

const signup = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (user) {
            return res.json({ success: false, message: 'Account Already Exists.' })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            email: email,
            password: hashedPassword
        })
        if (!newUser) {
            return res.json({ success: false, message: 'Error Creating Account.' })
        }
        return res.json({ success: true, message: 'Account Created Successfully.' })
    } catch (err) {
        console.log(err.message)
        res.json({ success: false, message: "Some Internal Server Error Occured" })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: 'User Not Found.' })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({ success: false, message: 'Incorrect Password.' })
        }
        const data = { user: { _id: user._id } }
        const token = jwt.sign(data, process.env.JWT_SECRET)
        return res.json({ success: true, message: 'User Logged In Successfully.', token: token })
    } catch (err) {
        console.log(err.message)
        res.json({ success: false, message: "Some Internal Server Error Occured" })

    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user._id }).select('-password')
        if (!user) {
            return res.json({ success: false, message: 'User Not Found.' })
        }
        return res.json({ success: true, message: 'User Found Successfully.', user })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: 'Some Internal Server Error Occured.' })
    }
}

export default { signup, login, getUser }
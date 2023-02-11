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

export default { signup }
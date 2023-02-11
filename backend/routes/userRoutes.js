import express from "express"
import userController from "../controllers/userController.js"
import fetchUser from "../middleware/fetchUser.js"
const router = express.Router()

router.get('/', fetchUser, userController.getUser)
router.post('/signup', userController.signup)
router.post('/login', userController.login)

export default router

import express from "express"
import multer from "multer"
import imageController from "../controllers/imageController.js"
import fetchUser from "../middleware/fetchUser.js"
const router = express.Router()
const upload = multer({ storage: multer.memoryStorage() })

router.post('/upload', [upload.single("filename"), fetchUser], imageController.uploadImage)

export default router
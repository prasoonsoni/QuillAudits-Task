import express from "express"
import multer from "multer"
import imageController from "../controllers/imageController.js"
import fetchUser from "../middleware/fetchUser.js"
const router = express.Router()
const upload = multer({ storage: multer.memoryStorage() })

router.post('/upload', [upload.single("filename"), fetchUser], imageController.uploadImage)
router.get('/', fetchUser, imageController.getAllImages)
router.post('/block/:imageId', fetchUser, imageController.blockUser)
// router.get('/:image_id', fetchUser, imageController.likeImage)

export default router
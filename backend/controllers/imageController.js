import firebaseConfig from "../database/firebase.js"
import { initializeApp } from "firebase/app"
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import multer from "multer"
import User from "../models/User.js"
import Image from "../models/Image.js"
import { ObjectId } from "mongodb"

initializeApp(firebaseConfig)

const storage = getStorage()
const upload = multer({ storage: multer.memoryStorage() })

const uploadImage = async (req, res) => {
    try {
        const user_id = new ObjectId(req.user._id)
        const user = await User.findOne({ _id: user_id }).select('-password')
        if (!user) {
            return res.json({ success: false, message: 'User Not Found.' })
        }
        const image = await Image.findOne({ user_id: user_id })
        if (image) {
            return res.json({ success: false, message: "Image Already Uploaded" })
        }
        const storageRef = ref(storage, `files/${user_id}`)
        const metadata = {
            contentType: req.file.mimetype
        }
        const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata)
        if (!snapshot) {
            return res.json({ success: false, message: "Error Uploading Image" })
        }
        const downloadURL = await getDownloadURL(snapshot.ref)
        const addImage = await Image.create({ user_id: user_id, link: downloadURL })
        if (!addImage) {
            return res.json({ success: false, message: "Error Uploading Image" })
        }
        res.send({ success: true, message: "Image Uploaded Successfully", link: downloadURL })
    } catch (err) {
        console.log(err.message)
        res.json({ success: false, message: 'Some Internal Server Error Occured.' })
    }
}

export default { uploadImage }
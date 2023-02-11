import mongoose from "mongoose"
const { Schema } = mongoose

const ImageSchema = new Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    link: {
        type: String,
        required: true
    }
})

export default mongoose.model('Image', ImageSchema)
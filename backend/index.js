import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectToDatabase from "./database/connection.js"
import userRoutes from "./routes/userRoutes.js"
import imageRoutes from "./routes/imageRoutes.js"
import http from 'http'
import Image from "./models/Image.js"
import { Server } from 'socket.io'
import { ObjectId } from "mongodb"
import fetchUser from "./middleware/fetchUser.js"
dotenv.config()

const app = express()
const port = 5000 || process.env.PORT
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectToDatabase()
app.get('/', (req, res) => {
    res.send("QuillAudits Backend Working")
})


const users = {}
io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('register-user', (userId) => {
        users[userId] = socket.id;
    });
    console.log(users)
    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
        Object.keys(users).forEach((key) => {
            if (users[key] === socket.id) {
                delete users[key];
            }
        });

    });
});

app.use('/api/user', userRoutes)
app.use('/api/image', imageRoutes)


app.post('/api/image/like/:imageId', (req, res) => {
    const { imageId } = req.params;

    const recipientSocketId = users[imageId];
    if (recipientSocketId) {
        io.to(recipientSocketId).emit('receive-like-notification', {
            message: `User liked your image: ${imageId}`,
        });
    }

    res.send({
        success: true,
        message: 'Image Liked',
    });
});

app.post('/api/image/superlike/:imageId', fetchUser, async (req, res) => {
    const { imageId } = req.params;
    const user_id = new ObjectId(req.user._id)
    const image = await Image.findOne({ user_id })
    const recipientSocketId = users[imageId];
    if (recipientSocketId) {
        io.to(recipientSocketId).emit('receive-superlike-notification', {
            message: `User liked your image: ${imageId}`,
            link: image.link
        });
    }
    res.send({
        success: true,
        message: 'Image Super Liked',
    });
});


server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})


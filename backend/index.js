import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectToDatabase from "./database/connection.js"
import userRoutes from "./routes/userRoutes.js"
import imageRoutes from "./routes/imageRoutes.js"

dotenv.config()
const app = express()
const port = 5000 || process.env.PORT
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectToDatabase()

app.get('/', (req, res) => {
    res.send("QuillAudits Backend Working")
})

app.use('/api/user', userRoutes)
app.use('/api/image', imageRoutes)

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})


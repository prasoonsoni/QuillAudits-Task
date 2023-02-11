import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const port = 5000 || process.env.PORT
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("QuillAudits Backend Working")
})

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})


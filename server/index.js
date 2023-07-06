import express from 'express'
import bodyParser from 'body-parser'

import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import api from './routes/api.js'
import http from 'http'

dotenv.config()
const app = express()

// MongoDB connection
connectDB()

app.use(cors())
app.use(bodyParser.json())



// Routes

app.use('/api', api)

// use this to see what Mongoose is doing behind the scenes, comment out when done
// mongoose.set('debug', true)
const port = 3001;
const httpServer = http.createServer(app);
httpServer.listen(port,"192.168.0.185", () => {
  console.log(`HTTP Server running on port ${port}`);
});
// const PORT = process.env.PORT || 80
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

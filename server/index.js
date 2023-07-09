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



const port = process.env.port||3001;
const httpServer = http.createServer(app);
httpServer.listen(port,"0.0.0.0", () => {
  console.log(`HTTP Server running on port ${port}`);
});


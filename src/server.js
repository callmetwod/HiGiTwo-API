import express from "express";
import cors from "cors"
import { testConnection } from "./database/connection.js";
const app = express()

app.use(express.json())
app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(80, async () => {
    await testConnection()
  console.log('CORS-enabled web server listening on port 80')
})
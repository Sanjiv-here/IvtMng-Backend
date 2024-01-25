const express = require('express');
const cors = require('cors');
const connectDB = require('./Config/db')
const errorHandler = require('./Middlewares/error')
require('dotenv').config()

const app = express();
connectDB()

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000
  
app.use('/api/orgSignIn',require('./Routes/signin'))
app.use(errorHandler)
  
const server = app.listen(PORT,() => console.log(`Server running on ${PORT}`))
process.on("unhandledRejection",(err,promise) => {
  console.log(`Logged Error: ${err}`)
  server.close(() => process.exit(1))
})

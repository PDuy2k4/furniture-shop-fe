const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const app = express()
dotenv.config()

const connectToMongo = async () => {
  console.log(process.env.MONGODB_URL)
  await mongoose.connect(process.env.MONGODB_URL)
  console.log('Connected to MongoDB ')
}

connectToMongo()

app.use(cors())
app.use(cookieParser()) //create and assign cookies
app.use(express.json()) //all express muse be convert to json

app.listen(8000, () => {
  console.log('server 8000 is running')
})

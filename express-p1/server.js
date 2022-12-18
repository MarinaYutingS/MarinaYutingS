// run in development settings
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

// require libararies
const express = require('express')
const app = express() //configure server use app variable
const cors = require('cors');  //cross site scripting
const mongoose = require('mongoose') // require mongoose to connect to mongoDB

// define the routers
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')

// set up connection with mongodb
mongoose.connect(process.env.DATABASE_URL,{ 
    useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))


// app.use() allow to use any middleware 

app.use(cors());                     // allows cross site scripting - client communication with db
app.use(express.json())              // set up the server to accept json as a body instead of a POST element or GET

// set up routers
app.use('/',indexRouter)             //for login page
app.use('/users',userRouter)         // for CRUD

// listen on 3001
app.listen(3001, ()=> console.log('Server Started'))
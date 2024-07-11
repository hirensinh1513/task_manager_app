const express = require("express")
const app = express();
const tasks = require("./routes/tasks.js")
const connectDB = require('./db/connect.js')
require('dotenv').config()
const notFound = require('./middleware/not-found.js')
const errorHandlermiddleware = require('./middleware/error-handler.js')


//middleware
app.use(express.static('./public'))
app.use(express.json())


//routes

app.use('/api/v1/tasks',tasks)
app.use(notFound)

const port = process.env.PORT || 3000


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is Listening on port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()

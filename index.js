const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

//DB Connection
const db = require('./DB/connection/db')
const dbConnect = async () => {
    const connectionMessage = await db();
    console.log(connectionMessage);
};
// dbConnect();

//Routers
const demoRouter = require('./routes/Demo')


app.use('/', (req, res) => {
    res.json({ message: "Hi this application working!" })
})

const PORT = 5008;

app.listen(PORT, () =>
    console.log(`Server listening on port ${PORT}`)
)
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const patientRoutes = require('./routes/patients')

const app = express()

//enables cors
app.use(cors({'origin': '*',}));
app.use(express.json())
app.use(bodyParser.json())

app.use('/patients', patientRoutes)

const PORT = 5000 || process.env.PORT
app.listen(PORT,()=> console.log(`listening at port ${PORT}`))
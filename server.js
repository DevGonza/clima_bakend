const cors = require('cors')
const express = require('express')
const city = require('./routes/cityRoutes')
const temperature = require('./routes/temperatureRoutes')

const app = express()

const port = process.env.PORT || 5000

app.use(express.json())

app.use(cors())

app.use('/city', city)
app.use('/temperature', temperature)

app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`)
})
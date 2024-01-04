const express = require('express')
const app = express()
const mainRoutes = require('./routes/mainRoutes')

app.use(mainRoutes)

app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`)
})
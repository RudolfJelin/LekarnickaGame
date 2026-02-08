/*TUTORIAL CONTENT*/

const express = require('express')
const app = express()
const http = require('http').createServer(app)

app.use(express.static('public'))

http.listen(3001, () => {
    console.log('listening on *:3001')
})

const express = require('express')
const cors = require('cors')
const path = require('path');
const app = express()

app.use(express.static(path.join(__dirname, 'frontend/build')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.listen(5000, () => {
    console.log('listening on 5000')
})

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
})
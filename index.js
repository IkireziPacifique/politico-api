const  express = require('express'),
app = express()

require('dontenv').config()

app.get('/', (req, res) => {
    res.send('hello')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`lili : ${PORT}`)
})
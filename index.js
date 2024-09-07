require('dotenv').config()// we are requiring the dotenv package
const express = require('express')//
const app = express()
const port = 3000// we made a variable called port and assigned it the value of 3000

app.get('/', (req, res) => {// we made a get request to the root of the server
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{//=> means a callback function that is called when the get request is made 
    res.send('Twitter')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2> this is youtube request man</h2>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
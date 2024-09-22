//console.log("prateek mittal");
require('dotenv').config()
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/prateek',(req,res)=>{
    res.send('hello prateek chutiya');
})
app.get('/ch',(req,res)=>{
    res.send('<h1>prateek mitta is now in london')
})

app.get('/youtube',(req,res)=>{
    res.send("hey this is youtube");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})




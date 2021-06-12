const express = require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')


require('dotenv').config();

const app = express()
const port = process.env.port || 5000

app.use(bodyParser.urlencoded(true))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())




const uri=process.env.ATLAS_URI;


try {
  mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true})
  }catch (error) { 
  console.log("could not connect");    
  }


const notesRouter=require('./routes/notes.route')
app.get('/',(req,res)=>{
    res.send('Hello from home page')
})

app.use('/notes',notesRouter)
app.use((req,res,next)=>{
  res.status(404)

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`) 
} )
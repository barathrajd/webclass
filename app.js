const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser,)

app.use(express.static("views"))

app.get('/',(req,res)=>{
    res.render("index.ejs")
})

app.post('/test',(req,res)=>{
    console.log(req.body);
    res.redirect('/')
    
})


//listen
app.listen(8000,()=>{
    console.log("Server started @PORT 8000");
})
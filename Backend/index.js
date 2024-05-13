const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()
var json
app.use(bodyparser.json())
app.use(cors())
app.get('/',(req,res)=>{
    res.send("aaa")
})

app.post('/post',(req,res)=>{
    console.log(req.body)
    json=req.body
    res.send(req.body)
})

app.get('/get',(req,res)=>{
    res.send(json)
})

app.listen(3004,()=>{
    console.log("Server is running on port 3004")
})
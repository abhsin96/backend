import express from "express";
import cors from 'cors'
import "dotenv/config"

console.log(process.env.MONGO_DB_URI)

const app = express()
app.use(cors())
app.use(express.json())

app.use('/getData',(req,res)=>{
console.log(req.body)

res.status(200).json(req.body)
})

app.listen(3001, ()=>{
    console.log("server is live")
})
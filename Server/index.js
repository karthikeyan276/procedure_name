const express = require("express");
const app = express()
const mysql = require("mysql")
const cors= require("cors")

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"root",
    database:"newdata"
})

db.connect((err)=>{
    err?console.log(err):console.log("connected")
})

app.get('/getbyerlevel',(req,res)=>{
    db.query("call getbyerlevel()",(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send({ message : "success", results : result[0]})
            console.log("output",result[0]);
        }
    })
})

app.listen(4001,()=>{
    console.log("server running port 4001")
})
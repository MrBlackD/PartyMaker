const express = require("express");
const uuid = require('uuid/v4')
const app = express();

const fakeData = {
    users:{
        "user":{password:"123"}
    }
}

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    console.log("fakeData",fakeData)
    next()
})

app.get("/auth",(req,res)=>{
    const {login,password} = req.query;
    const userByLogin = fakeData.users[login];
    console.log(req.query)
    if(userByLogin && userByLogin.password === password){
        res.send(JSON.stringify({authToken:uuid()}))
    }else{
        console.log("BAD")
        res.status(401).send();
    }
})

app.get("/reg",(req,res)=>{
    console.log("HERE")
    const {login,password} = req.query;
    const alredyExist = fakeData.users[login];
    if(alredyExist){
        res.status(400).send("Login is busy");
    } else {
        fakeData.users[login] = {password};
        res.send("OK");
    }
})
app.listen(8080);

console.log("Server started")
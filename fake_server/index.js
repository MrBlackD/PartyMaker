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
app.listen(8080);

console.log("Server started")
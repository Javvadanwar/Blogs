const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
const cors=require("cors");
app.use(cors());
const database={
    users:[
        {
            id:123,
            name:'john',
            email:'john@gmail.com',
            password:'hello'
        },
        {
            id:124,
            name:'sally',
            email:'sally@gmail.com',
            password:'apple'
        }
    ]
}
app.get('/',(req,res)=>{
    res.send('helo');
})

app.post('/signin',(req,res)=>{
   if(req.body.email==database.users[0].email&&req.body.password===database.users[0].password){
       res.send('success');
   } 
   else{
       res.status(400).json('error logging in');
   }
})

app.post('/register',(req,res)=>{
   database.users.push({
    id:124,
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
   })
   res.json(database.users);
})
app.listen(3001,()=>{
    console.log('helo');
})
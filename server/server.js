const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

const fs = require("fs");
var data = fs.readFileSync("db.json");
var myObject = JSON.parse(data);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.get('/products/:id', function(req, res) {
  var id = +req.params.id;
  var prod = myObject.products.find(p => (+p.id) === id);
  res.send(prod)
});

app.use((req, res, next)=>{  
    res.setHeader("Access-Control-Allow-Origin", "*");  
    res.setHeader(  
        "Access-Control-Allow-Headers",  
        "Origin, X-Requested-With, Content-Type, Accept");  
    res.setHeader("Access-Control-Allow-Methods",  
        "GET, POST, PATCH, DELETE, OPTIONS");  
    next();  
});  

app.post("/products",(req, res)=>{  
    const post = req.body; 
    console.log(post);
    myObject.products.push(post);
    let json = JSON.stringify(myObject, null, 3);
    fs.writeFileSync('db.json',json);
    res.status(201).json({
        message: 'Post added successfully'  
    });  
    // res.send(json)
});  

app.patch("/products/:id", function(req,res,next){
  var newProd = req.body;
  var id = +req.params.id;
  console.log(newProd);
  myObject.products[id-1]=newProd;
  let json = JSON.stringify(myObject, null, 3);
  fs.writeFileSync('db.json',json);
  res.send(newProd)
});

app.delete("/products/:id", function(req,res,next){
  var newProd = req.body;
  var id = +req.params.id;
  myObject.products.splice(id-1,1);
  let json = JSON.stringify(myObject, null, 3);
  fs.writeFileSync('db.json',json);
  res.send(newProd)
});

app.get('/products', function (req, res) {
  res.json(myObject.products);
})
  
// app.use((req, res, next) =>{  
//     res.send('Hello from express');  
//  });  

  app.listen(4001, function () {
    console.log('Example app listening on port 4001!')
  })

  module.exports = router;
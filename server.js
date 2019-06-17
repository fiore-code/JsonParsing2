var express = require('express');
const bodyParser=require('body-parser');
const JsonRouteData=require('./routes/JsonInputRoute');

var app = express();

app.use(bodyParser.json())

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
  next();
});

// app.post('/', (req,res,next)=>{
//   console.log(req.body);      // your JSON
//    res.send(req.body);    // echo the result back
// });

app.use(JsonRouteData);

app.listen(9000);
const express = require('express');
const app = express();
app.use("/public", express.static(__dirname + '/public'));
app.use((req, res, next)=> {
    const string = req.method + " " + req.path + " - " + req.ip;
    console.log(string)
    next();
  });

app.get("/", (req, res)=>{
    const absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
  })

  app.get("/json", (req, res)=>{
    if (process.env.MESSAGE_STYLE ==="uppercase"){
        res.json({"message": "HELLO JSON"});
      } else{
        res.json({"message": "Hello json"});
      }
  })

  console.log("Hello World");
  












 module.exports = app;

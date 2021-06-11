const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use("/public", express.static(__dirname + '/public'));
app.use((req, res, next)=> {
    const string = req.method + " " + req.path + " - " + req.ip;
    console.log(string)
    next();
  });
  app.use(bodyParser.urlencoded({extended: false}));

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

  app.get("/now", (req, res, next) => {
    req.time = new Date().toSrting();
     next();
   },
   (req, res) => { 
     res.send({time: req.time});
   }
 );
   

 app.get("/:word/echo", (req, res)=>{
    const {word} = req.params;
    res.json({echo: word})
  });

  app.get("/name", (req, res)=>{ 
    const { first: firstName, last: lastName } = req.query;
    res.json({
      name: `${firstName} ${lastName}`
    });
  })

  console.log("Hello World");
  












 module.exports = app;

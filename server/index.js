'use strict';
const express = require('express');
const mongoose = require("mongoose");

const authRouter = require("./routes/auth");

const PORT = 8080;
const HOST = '0.0.0.0';
const DB = "mongodb://root:example@mongo:27017/";

const app = express();
app.use(express.json());
app.use(authRouter);

mongoose.connect(DB, {useNewUrlParser: true})
.then(()=>{
  console.log("Connection Successful");
})
.catch(e=>{
  console.log(e);
});

app.listen(PORT, HOST, ()=>{
  console.log(`Running on http://${HOST}:${PORT}`);
});


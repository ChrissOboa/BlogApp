//const express = require('express');
import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
//using the router exported
app.use("/api/user",router);
app.use("/api/blog",blogRouter);

//connections and port
mongoose
  .connect(
    "mongodb+srv://ChrissOboa:Newstart2022@cluster0.lsy7udt.mongodb.net/?retryWrites=true&w=majority",
  )
  .then(() => app.listen(5000))
  .then(() => console.log("Connected to Database and listening to localhost 5000")).catch((err)=>console.log(err));
 
 

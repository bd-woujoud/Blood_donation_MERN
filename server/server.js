const express = require("express");
const app = express();
const port = 4000;
const fs = require("fs");
const database = require("./config/bd");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
app.use(cookieParser()); //<----- This middleware is needed to read Cookie from request. Without it, we'll get no req.cookie...
app.use(express.json()); //<----- this middleware is needed to read JSON from request. Without it, we'll get req.body == undefined.
app.use(express.urlencoded({ extended: true }));


app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/file/:avatar", function (req, res) {
  res.sendFile(__dirname + "/upload/" + req.params.avatar);
});
const userRouter = require("./routers/userRouter");

app.use("/users", userRouter);
const annonceRouter = require("./routers/annonceRouter");

app.use("/annonces", annonceRouter);

app.use(function (req, res, next) {
  let err = new Error();
  err.status = 404;
  next(err);
});
// handle errors
app.use(function (err, req, res, next) {
  console.log(err);
  if (err.status === 404) res.status(404).json({ message: " Path Not found" });
  else res.status(500).json({ message: "Something looks wrong " });
});

app.listen(port, console.log(`server is running at http//localhost:${port}`));

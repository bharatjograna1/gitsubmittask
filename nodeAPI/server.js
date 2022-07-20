/**
 * Author : Bharat Jograna
 * Created : 20 July 2022
 * File Comment : server index file...
*/
const express = require("express");
const bodyParser = require("body-parser");
const CommonData = require("./controller/api/CommonData");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));


app.all("/*", function (req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "http://192.168.43.129:7100"); // restrict it to the required domain
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  // Set custom headers for CORS
  res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Access-Token,X-Key, authorization");

  if (req.method == "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});

// Use Routes
app.use("/api/list", CommonData);

const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`Server running on port ${port}`));
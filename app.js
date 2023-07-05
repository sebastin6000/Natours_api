import express from "express";

// creating the app
const app = express();

///listening for request
const PORT = 3000;
app.listen(PORT, () => {});

// implementing tours route
const fs = require("fs");
const tours = fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`);
app.get("api/v1/tours", (request, response) => {
  // here the json responce is coded in jsend standard format
  response
    .status(200)
    .json({ status: "sucess", results: tours.length, data: { tours } });
});

app.post("/", (request, response) => {
  response.status(200).json({ message: "you can post to this route" });
});

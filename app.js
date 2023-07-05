import express from "express";

// creating the app
const app = express();

//json middleware for parse the data from the client
app.use(express.json());

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

app.post("api/v1/tours", (request, response) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, request.body);
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/tours-simple.json`,
    JSON.stringify(tours),
    (error) => {
      response.status(201).json({ status: "success", data: { tour: newTour } });
    }
  );
});

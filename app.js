import express from "express";

// creating the app
const app = express();

///listening for request
const PORT = 3000;
app.listen(PORT, () => {});

// defining simple route
app.get("/", (request, response) => {
  response.status(200).json({ message: "hello from the server" });
});

app.post("/", (request, response) => {
  response.status(200).json({ message: "you can post to this route" });
});

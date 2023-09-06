// Import required modules
const express = require("express");
const path = require("path");
const Subscriber = require("./models/subscribers");

// Create an instance of the Express application
const app = express();

// To use static files we need to give permission of the public folder
app.use(express.static("public"));

// Routes
// API to render html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// API to get all data of subscribers
app.get("/subscribers", async (req, res) => {
  try {
    let subscribers = await Subscriber.find();
    //Response data
    res.status(200).send(subscribers);
  } catch (error) {
    res.status(404);
  }
});

// API to get all subscribers by name and subscribedChannel
app.get("/subscribers/names", async (req, res) => {
  try {
    let subscribers = await Subscriber.find(
      {},
      { name: 1, subscribedChannel: 1, _id: 0 }
    );
    //Response data
    res.status(200).send(subscribers);
  } catch (error) {
    res.status(404)
    .send({ // Error Message
      Error_message: "No Subscriber name." });
  }
});

// API to get subscribers by id
app.get("/subscribers/:id", async (req, res) => {
  try {
    let subscribers = await Subscriber.findById(req.params.id);
    // Response data
    res.status(200).send(subscribers);
  } catch (error) {
    // Error status and message
    res
      .status(400)  //Error status code
      .send({ // Error Message
        Error_message: "No Subscriber found related to this id." });
  }
});

// Handles all the unwanted request
app.use((req, res) => {
    res.status(404).json({ message: "Error - Route not found" }); // Send a JSON response with a status of 404 (Not Found)
});

module.exports = app;

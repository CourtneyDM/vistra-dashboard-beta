// Import dependencies
const bodyParser = require("body-parser");
const express = require("express");
// const mongoose = require("mongoose");

// Configure Express
const app = express();

// Assign PORT
const PORT = process.env.PORT || 3001;

// Setup Body-Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));

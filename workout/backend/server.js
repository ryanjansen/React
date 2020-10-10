const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(compression());

app.use(helmet({ contentSecurityPolicy: false }));

app.use(cors());

app.options("*", cors());

require("./database");

app.use(bodyParser.json());

//APIs

const workoutsAPI = require("./api/workouts");
const usersAPI = require("./api/users");
app.use("/api/workouts", workoutsAPI);
app.use("/api/users", usersAPI);

app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

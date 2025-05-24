const express = require("express");
const cors = require("cors");
const db = require("./models");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/tasks", require("./routes/task.routes"));

db.sequelize.sync();

module.exports = app;

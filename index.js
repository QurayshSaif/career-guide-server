require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const questionRoutes = require("./routes/questions.js");
const scoringRoutes = require("./routes/scoringSystem.js");
const jobsRoutes = require("./routes/jobsRoutes.js");

//environment variables
const PORT = process.env.PORT || 5050;
const CLIENT_URL = process.env.CLIENT_URL;

// Allow requests from client url
app.use(
  cors({
    origin: CLIENT_URL,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/questions", questionRoutes);
app.use("/scoring", scoringRoutes);
app.use("/jobs", jobsRoutes);

app.listen(PORT, () => {
  console.log("server started");
});

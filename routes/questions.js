const express = require("express");
const router = express.Router();
const fs = require("fs");

const FILE_PATH = "./data/quiz.json";

const quiz = JSON.parse(fs.readFileSync(FILE_PATH));

// GET Quiz Questions
router.get("/", (_req, res) => {
  res.send(quiz);
});

module.exports = router;

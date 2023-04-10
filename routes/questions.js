const express = require("express");
const router = express.Router();
const fs = require("fs");

const FILE_PATH = "./data/quiz.json";

const quiz = JSON.parse(fs.readFileSync(FILE_PATH));

// GET Quiz Questions
router.get("/", (_req, res) => {
  res.send(quiz);
});

// GET First 3 quiz questions
router.get("/quick", (_req, res) => {
  res.send(quiz.slice(0, 5));
});

module.exports = router;

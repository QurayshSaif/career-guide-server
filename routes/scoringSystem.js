const express = require("express");
const router = express.Router();
const fs = require("fs");

const FILE_PATH = "./data/scoring-system.json";

const scoringSystem = JSON.parse(fs.readFileSync(FILE_PATH));

// GET scoring system
router.get("/", (_req, res) => {
  res.send(scoringSystem);
});

module.exports = router;

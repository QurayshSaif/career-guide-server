const express = require("express");
const router = express.Router();

// GET Quiz Questions
router.get(
  "/",
  async (
    { query: { job = "developer", location = "toronto", country = "canada" } },
    res
  ) => {
    const response = await fetch(
      `https://api.indeed.com/ads/apisearch?publisher=${process.env.CLIENT_KEY}&q=${job}&l=${location}&co=${country}&v=2&format=json&radius=25&limit=15`
    ).then((res) => res.json());
    res.send(response);
  }
);

module.exports = router;

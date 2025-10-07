import express from "express";

const router = express.Router();

router.route("/").get((req, res) => {
  res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
});

// https://expressjs.com/en/guide/routing.html
// NOTE: использовать для самого чата	

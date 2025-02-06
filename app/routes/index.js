const express = require("express");
const router = express.Router();
// example w/ array
const todos = [];

/* 
http: status codes:
200 = success
300 = redirecting
400 = rejection 
500 = crashed server/virus
*/

("localhost:3000/api/");
router.get("/", (req, res) => {
  res.status(200).json({ message: "From the API" });
});

("localhost:3000/api/:id");
router.delete("/:id", (req, res) => {
  // example array
  const todo = todos.find((element) => element > 10);
  const id = req.params.id;
  console.log("params >>>", id);
});

("localhost:3000/api/:city");
router.get("/:city", (req, res) => {
  const city = req.params.city;
  console.log("params >>>", city);
  res.status(200).json({ message: "From the API" });
});

// specific endpoints
router.post("/", (req, res) => {
  console.log("Request body >>>", req.body);
  const { data } = req.body.data;
  // bringing array
  todos.push(data);
  res.status(200).json({ message: "We got the request", data });
});

// import your router
module.exports = router;

const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree", "userFour"] });
});

app.listen(5001, () => {
  console.log("server live on port 5000");
});

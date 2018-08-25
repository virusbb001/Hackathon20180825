import express from "express";

const app = express();

app.get("/", function(_req, res) {
  res.send("hello world");
});

app.listen(10810);

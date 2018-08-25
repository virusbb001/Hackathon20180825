import express from "express";

const app = express();

app.set("port", (process.env.PORT || 10810));

// CORS Setting
app.use(function(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get("/", function(_req, res) {
  res.send("hello world");
});

app.listen(app.get("port"), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

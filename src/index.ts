import express from "express";

const app = express();

app.set("port", (process.env.PORT || 10810));

interface Quiz {
  question: string;
  choices: string[];
  correct: number;
  commentary: string;
}

interface Quizzes {
  quizzes: Quiz[];
}

const questions: Quizzes = {
  "quizzes": [{
    question: "問題文",
    choices: [
      "選択肢1",
      "選択肢2",
      "選択肢3",
      "選択肢4"
    ],
    correct: 1,
    commentary: "解説文"
  }, {
    question: "○×クイズ問題文",
    choices: [
      "○",
      "×"
    ],
    correct: 0, // 🙆
    commentary: "解説文"
  }]
}

// CORS Setting
app.use(function(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get("/", function(_req, res) {
  res.send("hello world");
});

app.get("/quiz", function(_req, res) {
  res.json(questions);
});

app.listen(app.get("port"), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

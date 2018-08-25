import express from "express";

const app = express();

app.set("port", (process.env.PORT || 10810));

interface Quiz {
  question: string;
  choices: string[];
  correct: number;
  commentary: string;
  twoChoice: boolean; // 二択の○×か
}

interface Quizzes {
  quizzes: Quiz[];
}

export const quizzesList: Quiz[] = [...Array(10)].map((_, i) => ({
  question: `問題文${i+1}`,
  choices: [
    `選択肢${i+1}-1`,
    `選択肢${i+1}-2`,
    `選択肢${i+1}-3`,
    `選択肢${i+1}-4`
  ],
  correct: i % 4,
  commentary: `解説文 ${i+1}`,
  twoChoice: false
})).concat([...Array(10)].map((_, i) => ({
  question: `○×問題文${i+1}`,
  choices: [
    "○",
    "×"
  ],
  correct: i % 2,
  commentary: `○×解説文 ${i+1}`,
  twoChoice: true
})));

// CORS Setting
app.use(function(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", function(_req, res) {
  res.send("hello world");
});

app.get("/quiz", function(_req, res) {
  const questions: Quizzes = {
    "quizzes": quizzesList.sort(() => Math.floor(Math.random()*3) -1).slice(0,8)
  };
  res.json(questions);
});

app.listen(app.get("port"), function() {
  console.log("Node app is running at localhost:" + app.get("port"));
});

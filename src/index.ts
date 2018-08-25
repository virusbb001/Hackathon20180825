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

export const realQuzzesList: Quiz[] = [{
  question: "福井国体では高等学校野球が特別競技として行われます。今年の甲子園で大活躍し、福井国体にも参加する金足農業の吉田輝星選手の好物は？",
  choices: [
    "チョコバナナ",
    "唐揚げ",
    "リンゴ飴",
    "焼きそば"
  ],
  correct: 0,
  commentary: "",
  twoChoice: false
}, {
  question: "メガネで有名な福井県鯖江市の名物「鯖江ドッグ」とは？",
  choices: [
    "ホットドッグ",
    "焼き鳥",
    "ハンバーガー",
    "ソースカツ丼"
  ],
  correct: 3,
  commentary: "",
  twoChoice: false
}, {
  question: "「福井しあわせ元気」国体・障スポに向けて、開催気運をより高めるとともに、県民のみなさんの健康・体力づくりにもつながる国体・障スポダンスの名前は？",
  choices: [
    "ラッキーダンス",
    "ハッピーダンス",
    "ハピネスダンス",
    "元気ダンス"
  ],
  correct: 2,
  commentary: "",
  twoChoice: false
}, {
  question: "福井国体で競技として行われる「ビーチバレー」の種目はいつから五輪の正式種目となったか",
  choices: [
    "1964年 東京大会",
    "1972年 ミュンヘン大会",
    "1996年 アトランタ大会",
    "2016年 リオデジャネイロ大会"
  ],
  correct: 2,
  commentary: "",
  twoChoice: false
}, {
  question: "福井国体で競技として行われる「ホッケー」の種目は1チーム何人で行われるか",
  choices: [
    "5人",
    "7人",
    "9人",
    "11人"
  ],
  correct: 3,
  commentary: "",
  twoChoice: false
}, {
  question: "福井国体で行われる競技のうち、特別競技となっているのは次のうちどれでしょう？",
  choices: [
    "ゲートボール",
    "スーパーボール",
    "高校学校野球",
    "小学生金魚すくい"
  ],
  correct: 2,
  commentary: "解説する文 解説する文 解説する文 解説する文 解説解説。",
  twoChoice: false
}, {
  question: "トライアスロンでは遠泳（スイム）～自転車ロードレース（バイク）～マラソン（ラン）という3種のスポーツを連続して行う耐久競技ですが、福井国体で行われるマラソン（ラン）の距離は42.195kmである",
  choices: [
    "○",
    "×"
  ],
  correct: 1,
  commentary: "",
  twoChoice: true
}, {
  question: "福井国体で競技として行われる「レスリング」の種目では3分間を1ピリオドと呼び、2ピリオド制で行われる",
  choices: [
    "○",
    "×"
  ],
  correct: 0,
  commentary: "",
  twoChoice: true
}, {
  question: "福井国体で行われる競技のうち、特別競技となっているのは小学生金魚すくいである。マルかバツか",
  choices: [
    "○",
    "×"
  ],
  correct: 0,
  commentary: "",
  twoChoice: true
}];

export const dummyQuizzesList: Quiz[] = [...Array(10)].map((_, i) => ({
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
  const random = () => Math.floor(Math.random()*3) -1;
  const quizzesList = realQuzzesList.sort(random).concat(dummyQuizzesList.sort(random)).slice(0,8);
  const questions: Quizzes = {
    "quizzes": quizzesList
  };
  res.json(questions);
});

app.listen(app.get("port"), function() {
  console.log("Node app is running at localhost:" + app.get("port"));
});

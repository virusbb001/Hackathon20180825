# クイズ国体

雑に書いたフォーマット

## GET /quiz

### Header

特にしていなし

### Response

#### Header

```
Content-Type: application/json
```

#### Body

```json
{
  "quizzes": [{
    "question": "国体の問題をここに",
    "choices": [
      "選択肢1",
      "選択肢2",
      "選択肢3",
      "選択肢4"
    ],
    "correct": 0,
    "commentary": "解説とか豆知識とか"
  }]
}
```

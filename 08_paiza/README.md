# paiza 練習コード集

 paiza 練習コード


## C170 目標ポイント
- 複数人のポイントを100ポイント＝1円に換算し、
  目標額に到達しているかどうかを判定する。


### 解答コード
```js
// c170_goal_point.js
const [N, M] = lines[0].split(" ").map(Number);      // N: 人数, M: 目標ポイント(単位: 円)
const numbers = lines[1].split(" ").map(Number);     // 各人のポイント（pt単位）
const pointList = numbers.map(p => Math.floor(p / 100)); // 100pt = 1円 に換算して切り捨て
const total = pointList.reduce((a, b) => a + b, 0);       // 円の合計
const rest = (M - total) * 100;                      // 目標との差を再びpt単位に戻す

console.log(total >= M ? '0' : rest);
```

### 学び
1. split と map(Number) の組み合わせで入力を処理できる。
2. reduce で合計できる。
3. Math.floor で切り捨て処理が必要。
4. 複数行の入力の受け取り方
5. 今日学んだ条件演算子を使って出力できた。
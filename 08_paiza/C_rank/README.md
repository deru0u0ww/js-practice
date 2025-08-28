# paiza 練習コード集

 p

# C019 完全数判定

## 問題の要約
与えられた数が
- perfect: 真の約数の和がその数に等しい
- nearly: その数 - 1 に等しい
- neighter: それ以外  
を判定して出力する。

### 解答コード
```js
// paiza(Node.js)想定：標準入力から読み取り
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();
const lines = input.split('\n');

// 1行目：件数 N
const N = Number(lines[0]);

/**
 * n の「真の約数」（n自身を除く）合計を返す
 * 例：n=12 → 真の約数 {1,2,3,4,6} の和 = 16
 *
 * 実装ポイント：
 * - 1 は常に真の約数なので最初から sum=1 にしておく（n>1の場合）
 * - ループは i*i <= n（√n まで）でOK。見つけたらペア n/i も加算
 * - 平方数のときは i と n/i が同じになるので二重加算を避ける
 * - n<=1 のときは真の約数が無いので 0 を返す
 */
function sumProperDivisors(n) {
  if (n <= 1) return 0;

  let sum = 1; // 1 は必ず真の約数（n>1の場合）

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      sum += i;              // 片側の約数 i
      const pair = n / i;    // ペア側の約数 n/i
      if (pair !== i) sum += pair; // 平方数なら重複加算しない
    }
  }
  return sum;
}

// 各数値を1つずつ判定して出力
for (let i = 1; i <= N; i++) {
  const n = Number(lines[i]);            // ← 文字列→数値に必ず変換
  const s = sumProperDivisors(n);        // 真の約数の合計

  // ルールに従って分類
  if (s === n) {
    console.log('perfect');              // 完全数
  } else if (s === n - 1) {
    console.log('nearly');               // ほぼ完全数（n-1）
  } else {
    console.log('neighter');             // それ以外
  }
}
```

## 学んだこと
- for文で約数を探す方法
- `reduce` で合計を求める方法
- 複数入力をループで判定する必要があった

## 躓いたところ
- 出力するときにifを用いたが一行しか表示されずその出力の仕方が難しかった

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
-  split と map(Number) の組み合わせで入力を処理できる。
-  reduce で合計できる。
-  Math.floor で切り捨て処理が必要。
-  複数行の入力の受け取り方
-  今日学んだ条件演算子を使って出力できた。
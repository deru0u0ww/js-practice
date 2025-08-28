
// 5 80
// 2240 3200 1090 500 660


const [N, M] = lines[0].split(" ").map(Number);      // N: 人数, M: 目標ポイント(単位: 円)
const numbers = lines[1].split(" ").map(Number);     // 各人のポイント（pt単位）
const pointList = numbers.map(p => Math.floor(p / 100)); // 100pt = 1円 に換算して切り捨て
const total = pointList.reduce((a, b) => a + b, 0);       // 円の合計
const rest = (M - total) * 100;                      // 目標との差を再びpt単位に戻す

console.log(total >= M ? '0' : rest); // 目標に達していれば0、達していなければ差をpt単位で出力
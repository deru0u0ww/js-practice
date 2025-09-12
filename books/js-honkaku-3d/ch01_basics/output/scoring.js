//点数評価
//ifを使った条件分岐　>=　←これ
const score = Math.floor(Math.random()*100);

console.log(score);
if ( score >= 80 ) {
    console.log('たいへん素晴らしい!!');
} else if ( score >=60 ) {
    console.log('素晴らしい！！');
} else if ( score >= 40 ) {
    console.log('もう少し頑張ろう');
} else {
    console.log('頑張ろう');
}
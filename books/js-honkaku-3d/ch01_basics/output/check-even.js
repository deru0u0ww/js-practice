//偶数か奇数かの判定

const index = Math.floor(Math.random()*100);

//0で割り切れるなら偶数
if ( index % 2 === 0 ) {
    console.log(`${index}は偶数です`);
} else {
    console.log(`${index}は奇数です`);
}

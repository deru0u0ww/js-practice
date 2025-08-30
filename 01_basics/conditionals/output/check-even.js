//偶数か奇数か

const index = Math.floor(Math.random()*100);

if ( index % 2 === 0 ) {
    console.log(`${index}は偶数です`);
} else {
    console.log(`${index}は奇数です`);
}
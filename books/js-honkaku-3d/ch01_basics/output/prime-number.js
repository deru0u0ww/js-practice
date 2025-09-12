//素数かどうかチェック

function isPrime(num) {
    if ( num < 2 ) return false; //0と1は素数ではない、引数から与えられた数値が0,1以下ならすぐ返す。
    for ( let i = 2; i <= Math.sqrt(num);i++ ) { //Math.sqrt 指定した値の平方根をチェック
        if ( num % 1 === 0 ) return false;
    }
    return true;
}

let number = Math.floor(Math.random()*100);
if ( isPrime(number)) {
    console.log( number + 'は素数です');
} else {
    console.log( number + 'は素数ではありません');
}
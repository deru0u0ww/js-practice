
//if
const scoe = 85;
if ( score => 80 ) {
    console.log('80点以上です');
}else if ( score => 60 ) {
    console.log('60点以上です');
} else {
    console.log('60点未満です');
}

const even = 10;
if ( even % 2 === 0 ) {
    console.log('偶数です');
} else {
    console.log('奇数です');
}

const flag = true;
if ( flag ) {
    console.log('trueです');
}
if ( !flag ) {
    console.log('falseです');
}
const str = '';
console.log( str == !flag ? '空文字です' : '空文字じゃないよ');

if ( str !== undefined && str !== null ) {
    console.log('strはundefinedでもnullでもないよ');
}

//switch
//===で厳密に評価される
const rank = 'A';
switch ( rank ) {
    case 'S':
        console.log('すごい');
        break;
    case 'A':
        console.log('まあまあすごい');
        break;
    case 'B':
        console.log('普通');
        break;
    default:
        console.log('その他');
        break;
}
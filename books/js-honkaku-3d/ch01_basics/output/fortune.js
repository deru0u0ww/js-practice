//おみくじ

//Math.floorで小数点以下の切り捨て
//Math.ramdomで０以上１未満を生成、今回の場合は0以上7未満
//0~の場合は*~、1~の場合は~に+1をするといい
const index = Math.floor(Math.random()*7+1);

if ( index === 1 ) {
    console.log('大吉');
} else if ( index === 2 ) {
    console.log('中吉"');
} else if ( index === 3 ) {
    console.log( '末吉');
} else if ( index === 4 ) {
    console.log( '凶' );
} else {
    console.log(' 大凶... ');
}


switch ( index ) {
    case '1':
        console.log('大吉');
        break;
    case '2':
        console.log('中吉');
        break;
    case '3':
        console.log('末吉');
        break;
    case '4':
        console.log('凶');
        break;
    case '5':
        console.log('大凶');
        break;
    case '6':
        console.log('やばい');
        break;
}
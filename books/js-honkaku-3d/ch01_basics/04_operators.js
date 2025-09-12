'use strict';

//算術演算子
console.log( 1 + 2 ); //3
console.log( '田中' + '太郎'); //田中太郎
console.log( '田中' - '山田'); //NaN
console.log( '32' + 8 ); //40

//インクリメント、デクリメント
//x++ → x = x + 1
//x-- → x = x - 1

let x = 1;
console.log(x); //1
console.log(x++); //1 (後置)
console.log(x); //2

let y = 1;
console.log(++y); //2 (前置)
console.log(y); //2 (前置)

//代入演算子
let a = 1;
a += 2; //a = a + 2
console.log(a); //3
a -= 1; //a = a - 1
console.log(a); //2
a *= 3; //a = a * 3
console.log(a); //6
a /= 2; //a = a / 2
console.log(a); //3
a %= 2; //a = a % 2
console.log(a); //1

//分割代入
//オブジェクトから必要なプロパティを取り出す　
const user = {
    name: '山田太郎',
    age: 28,
    country: 'Japan',
    birthday: '1998/05/19'
}
//分割代入しない場合
const user1 = user.name; //山田太郎

//分割代入
const { name, age } = user;
console.log(name); //山田太郎
console.log(age); //28

//配列から必要な要素を取り出す
const fruts = ['りんご', 'みかん', 'ぶどう'];
//分割代入しない
const fruts1 = fruts[0]; //りんご
//分割代入
const [frutsA, frutsB, frutsC] = fruts;
console.log(frutsA); //りんご

//デフォルト値を設定
const { userName = 'Guest', userAge = 10} = {};
console.log(userName,userAge); //Guest 10

//比較演算子
console.log( 1 < 2 ); //true
console.log( 1 <= 1 ); //true
console.log( 2 > 1 ); //true
console.log( 2 >= 2 ); //true
console.log( 1 == '1' ); //true (型変換あり)
console.log( 1 === '1' ); //false (型変換なし)
console.log( 1 != '1' ); //false (型変換あり) 左辺と右辺の値が等しくない時にtrue
console.log( 1 !== '1' ); //true (型変換なし) 左辺と右辺も値が等しくない、またはデータ型が異なる場合にtrue
console.log( 1 == true ); //true (型変換あり)
console.log( 1 === true ); //false (型変換なし) 左辺も右辺も値が等しくてデータ型も同じ場合にtrue
console.log( 0 == false ); //true (型変換あり)
console.log( 0 === false ); //false (型変換なし)
console.log( 10 === 1 ?10 : 0); //条件式 ? trueの時 : falseの時　
console.log( null ?? 5); //nullまたはundefinedの場合に右辺を返す
console.log( undefined ?? 5); //nullまたはundefinedの場合に右辺を返
//条件式がfalsyは値の場合には特定の値をセットしたい場合に使用する |=の方が良い
//falsyな値 false,0,'',null,undefined,NaN
//falsyな値の場合に右辺に規定値をセットするといい
console.log( value |= '規定値'); //valueがnullまたはundefinedの場合に右辺を返す この場合は規定値を返す

//|=では全てのfalsy値を拾ってしまう。ゼロ、空文字を除外できない場合に??=を使う
//??=はnullまたはundefinedの場合に右辺をセットする
console.log( value ??= '規定値'); //valueがnullまたはundefinedの場合に右辺を返す この場合は規定値を返す


let score = 60;
console.log( score >= 70 ? '合格' : '不合格' ); //不合格

//倫理演算子
console.log( true && true ); //true
console.log( true && false ); //false
console.log( false && true ); //false
console.log( false && false ); //false
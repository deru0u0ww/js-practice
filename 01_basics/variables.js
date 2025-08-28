'use strict';

//変数の宣言と代入
let msg = 'こんにちは';
console.log(msg);

msg = 'こんばんは';
console.log(msg);

//変数の宣言のみ→undefined
let msg1;
console.log(msg1);

//定数の宣言と代入
//再代入不可
const TAX = 1.1;
const BIRTHDAY = '1998/05/19';
console.log(100 * TAX);
console.log(BIRTHDAY);

// TAX = 1.2; //エラー

//--------------------------------
const playerName = '山田太郎';
const age = 32;
console.log('私の名前は' +playerName+ 'です。年齢は' + age + '歳です');

//--------------------------------
const a = 1;
const b = 23;

console.log('a + b = ' + (a + b)); //24
console.log('a - b = ' + (a - b)); //-22
console.log('a * b = ' + (a * b)); //23
console.log('a / b = ' + (a / b)); //0.043478260869565216
console.log('a % b = ' + (a % b)); //1

//--------------------------------
const m = 1;
const n = 2;
console.log('入れ替え前は：m = ' + m + ', n = ' + n); //m = 1, n = 2

const tmp = m;
console.log( tmp ); //1
//入れ替え

 m = n;
 console.log( m ); //2 ;
// n = tmp;
// console.log('入れ替え後は：m = ' + m + ', n = ' + n); //m = 2, n = 1

//--------------------------------
console.log ( n**3); //8
console.log ( n**4); //16
console.log ( n**5); //32
console.log ( n**6); //64
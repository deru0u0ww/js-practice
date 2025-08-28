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

TAX = 1.2; //エラー
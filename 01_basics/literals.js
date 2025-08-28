//数値、文字列、真偽値、null、undefinedなどのリテラル

//string
//エスケープシーケンス
let msg = 'こんにちは \n今日もいい天気ですね';
console.log(msg);

let data = ['Javascript','Java','Python'];
console.log(data[0]); //Javascript

//配列要素の追加
data[3] = 'Ruby';
console.log(data); //['Javascript', 'Java', 'Python', 'Ruby']

//配列の要素の変更
data[0] = 'C++';
console.log(data); //['C++', 'Java', 'Python', 'Ruby']

//オブジェクト
let obj = {
    name: '山田太郎',
    age: 32,
    birthday: '1998/050/19'
}
console.log(obj.name); //山田太郎
console.log(obj['age']); //32
console.log(typeof obj['age']); //number

//undefinedとnull

let x;
console.log(x); //undefined
//宣言済みだけど値が設定されていない場合
//未定義の変数を参照しようとした
//関数で値が返されない

let y = null;
console.log(y); //null

let z = 123;
z = null; //値が存在しないことを明示的に示す場合に使用
console.log(z); //null
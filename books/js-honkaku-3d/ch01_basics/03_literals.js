// //算術演算子
// let n = 12 + '2';
// console.log(n); //122
// console.log(typeof n); //string

// let m = 12 + 2;
// console.log(m) //14
// console.log(typeof m); //number

// let i = 3;
// let j = ++i;

// console.log(i); //4
// console.log(j); //4

// let x = 3;
// let y = x++;
// console.log(x); //4
// console.log(y); //3

// console.log(1 + '2'); //12
// console.log(typeof (1 + '2')); //string

// //0.2を3倍する
// let p = 1.234;
// let q = (0.2*10)*3/10; //0.6

//代入演算子
// let x = 1;
// let y = x;
// x = 2;
// console.log(y); //1

// let data1 = [1,2,3];
// let data2 = data1;
// data1[0] = 5;
// console.log(data2); //[5,2,3]

//分割代入
// let data = [1,2,3,4,5,6]
// let [x0,x1,x2,x3,x4,x5,x6] = data;
// console.log(x0); //1
// console.log(x6); //undefined

// let [y0,y1,y2, ...other] = data;
// console.log(y2); //3
// console.log(other); //[4,5,6]
// let x = 1;
// let y = 2;
// [x,y] = [y,x];
// console.log(x); //x=2

// let book = {
//     title: 'Javascript',
//     price: '2980'
// }
// let { title, price } = book;
// console.log(`本のタイトル：${title}です。値段は${price}円です。`)
// //本のタイトル：Javascriptです。値段は2980円です

//比較演算子
// let data1 = [1,2,3];
// let data2 = [1,2,3];
// console.log(data1 == data1); //true
// console.log(data1 == data2); //false

//倫理演算子
// let flag = true;
// if(flag) console.log('yes'); //yes
// if(!flag) console.log('yes'); //falseの場合trueなのでコードが実行されない。
let data1 = [1,2,3];
console.log(data1.length); //3
console.log(delete data1[0]); //true

let data2 = { primary: 'Japanese', secondary:'English'}
console.log(delete data2.primary); //true

let title = 'Japanese';
console.log(delete title); //false　変数は削除できない

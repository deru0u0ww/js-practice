//##巻き上げ、関数の巻き上げ
//letやconstを利用する
//関数内で変数、定数を指定する場合は先頭で宣言する
let temp = 25;
function displayTemperature() {
    console.log(`Current temperature: ${ temp } °C `);
}
function forecastTemperature() {
    console.log(`Expected temperature: ${ temp } °C`);
    var temp = 28;
}
displayTemperature(); //25
forecastTemperature(); //undefiend

var a = 10;
function fn() {
    console.log(a); //undefined
    var a = 20;
    console.log(a); //20
}
fn();
//varキーワードでは、変数が宣言されう前にその変数を取得しようとすると、undefinedが返される。
//ただし、let、constではエラーメッセージが返される。

//var a;
//console.log(a) //undefined ←こういう処理になってしまっている
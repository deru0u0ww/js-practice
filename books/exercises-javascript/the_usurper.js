//関数のオーバーロード
//名前が同じで異なるパラメータリストを持つ複数卯の関数を定義できる機能、指定された引数に基づいて正しい関数が呼び出される。
//JSでは同じ名前の関数を複数定義した場合に、最後に定義した関数が呼び出される。
//四角形の面積を計算
// function calculateArea(length, width ) { return length * width; }
//24

//正方形の面積
// function calculateArea(length) { return length*length } 
//16
// console.log(calculateArea(4,6)); 
//16のみ

function calculateArea(length, width) {
    if( width === undefined ) {
        return length * length;
    } else {
        return length * width;
    }
}
console.log(calculateArea(5)); //25
console.log(calculateArea(4,6));//24
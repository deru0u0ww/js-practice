//条件式によってループ
//while
//前置判断　条件によっては一回も実行されない
let i = 5;
while ( i < 10 ) {
    console.log(i);
    i++;
}
//56789

//do...while
//後置判断　必ず一回は実行される
i = 5;
do {
    console.log(i);
    i++;
}while ( i < 10);
//5678910



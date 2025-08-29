//--------------------------------
//指定回数だけループする
for ( let j = 0; j < 5; j++) {
    console.log(j);
} //01234

for ( let k = 5; k > 0; k--) {
    console.log(k);
} //54321

for ( let n = 0; n <= 10; n+=2) {
    console.log(n);
} //0246810

for ( let m = 10; m >= 0; m-=2) {
    console.log(m);
} //1086420

for ( let a = 0; a < 10; a++ ) {
    if ( a % 2 === 0 ) {
        console.log('aは偶数です：' + a);
    } else {
        console.log('aは奇数です：' + a)
    }
}

//--------------------------------
//for...in
//オブジェクトのプロパティを順番に取り出す キーを取り出す
//配列にも使えるが、インデックス番号が返ってくる
const obj = {
    name: '山田太郎',
    age: 32,
    hobby: '野球'
};

for ( let key in obj ) {
    console.log( key + '：' + obj[key] );
}
//name：山田太郎
//age：32
//hobby：野球

const player = {
    status: {
        hp: 100,
        mp:50,
        power:20
    }
}
for ( let prop in player.status ) {
    console.log( prop + '：' + player.status[prop] );
}
//hp：100
//mp：50
//power：20

//--------------------------------
//for...of
//配列や文字列など「反復可能(iterable)」な値そのものを取り出す
//オブジェクトに使うとエラー
const arr = [ 'りんご', 'みかん', 'ぶどう' ];
for ( let fruit of arr ) {
    console.log( fruit );
}
//りんご
//みかん
//ぶどう

const str = 'JavaScript';
for ( let char of str ) {
    console.log( char );
}
//一文字ずつ表示
//J
//a
//v
//a
//S
//c
//r
//i
//p
//t

// ユーザーのリスト
const users = [
  { name: "Taro", age: 27 },
  { name: "Hanako", age: 22 },
  { name: "Ken", age: 30 },
  { name: "Mika", age: 25 }
];

// for...of で配列を回す → 要素は user オブジェクト
console.log("=== 名前と年齢を出力 ===");
for (let user of users) {
//   console.log(`${user.name}: ${user.age}歳`);
    if ( user.age >= 25 ) { // 25歳以上のユーザーだけ表示
        console.log(`${user.name}: ${user.age}歳`);
    }
}
//配列は順番付きの仕組みを持っているので、for...in よりも for...of の方が自然に使える
//配列のみだと一種類の情報しか持てないが、オブジェクトの配列にすることで複数の情報を持てる
//user.name,nuser.ageでアクセスできるので可読性が高い

users.push ({name: '山田', age: 2});
for ( let user of users ) {
    console.log(`${user.name}さん：${user.age}歳です`);
}
// Taroさん：27歳です
// Hanakoさん：22歳です
// Kenさん：30歳です
// Mikaさん：25歳です
// 山田さん：2歳です
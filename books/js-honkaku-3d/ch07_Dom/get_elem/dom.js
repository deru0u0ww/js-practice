//要素ノードの取得
//id値での取得、重複は許されない
// let current = new Date();
// let result = document.getElementById('result');
// result.textContent = current.toLocaleString();

//querySelector() セレクター式で取得
let result = document.querySelector('#list .external');
console.log(result.href);


//queySelectorAll(); Nodelistを返す。
let list = document.querySelectorAll('#list .external');
for(let elem of list ) {
    console.log(elem.href);
}

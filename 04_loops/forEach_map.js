//forEach
//配列の内容を取り出しながら、決められた順番に処理をしていく

const date = [
    'apple',
    'orange',
    'banana',
]
date.forEach(function(value,index,array) {
    console.log(`${index}:${value}`);
})
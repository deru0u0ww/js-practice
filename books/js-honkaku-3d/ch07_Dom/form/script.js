// let food = document.querySelector('#food');
// document.querySelector('#btn').addEventListener('click', ()=>{
//     console.log(food.value);
// })

document.querySelector('#btn').addEventListener('click', ()=> {
    let result = [];
    let foods = document.querySelectorAll('input[name="food"]');

    for(let food of foods ) {
        if( food.checked) { result.push(food.value);}
    }
    console.log(result);
})
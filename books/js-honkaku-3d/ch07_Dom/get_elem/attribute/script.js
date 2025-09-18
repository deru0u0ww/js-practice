let member = document.querySelector('#name');
document.querySelector('#btn').addEventListener('click' ,()=> {
    console.log(member.value);//クリック時の入力値
    console.log(member.getAttribute('value')); //初期値
})
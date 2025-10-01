const diceValue = [null, null, null];
const diceImages = [
    './images/saikoro-illust1.png',
    './images/saikoro-illust2.png',
    './images/saikoro-illust3.png',
    './images/saikoro-illust4.png',
    './images/saikoro-illust5.png',
    './images/saikoro-illust6.png',
]
function rollDice(index) {
    const $dice = document.getElementById(`dice${index}`);
    let rolling;
    rolling = setInterval(()=>{
        const temp = Math.floor(Math.random()*6);
        $dice.src = diceImages[temp];
    },150);
    setTimeout(()=> {
        clearInterval(rolling);
        const finalNum = Math.floor(Math.random()*6);
        $dice.src = diceImages[finalNum];
        diceValue[index - 1] = finalNum + 1;
        
        if( diceValue.every(v => v !== null)) {
            if( diceValue[0] === diceValue[1 && diceValue[1] === diceValue[2]]) {
                document.getElementById('result').textContent = '3つ揃った';
            } else {
                document.getElementById('result').textContent = 'バラバラ';
        }
    }
    },600);
}
for( let i = 1; i <= 3; i++ ) {
    document.getElementById(`rollBtn${i}`).addEventListener('click', ()=> {
        rollDice(i);
    })
}
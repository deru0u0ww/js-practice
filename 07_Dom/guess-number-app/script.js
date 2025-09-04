//状態
const MIN = 1;
const MAX = 100;
const history = [];
let prevGuess = null; //未入力
//定数→変数
let isFinished = false;
//定数→変数
let tries = 0;
const MAX_TRIES = 10;
let answer = Math.floor(Math.random()*100)+1;

//UI
const $inputBtn = document.querySelector('#input-button');
const $enterNumber = document.querySelector('#input-number')
const $resetBtn = document.querySelector('#reset-button');
const $lists = document.querySelector('#list');
//推測ボタンイベント
$inputBtn.addEventListener('click', ()=> {
    checkForm();
    
});
//Enterキーでも判定
$enterNumber.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') checkForm();
});
$resetBtn.addEventListener('click', ()=> {
    //ゲーム状態をリセット
    isFinished = false;
    tries = 0;
    prevGuess = null;
    answer = Math.floor(Math.random()*100)+1; //再生成
    history.length = '';
    // UIをリセット
    $inputBtn.disabled = false;
    $resetBtn.disabled = true;
    $lists.replaceChildren();
    $enterNumber.value = '';
    $enterNumber.focus();
    return;
})
$resetBtn.disabled = true;
//入力フォームが正しいか
//入力の数値が正しければその数値をチェック関数に入れる
function checkForm() {
    if( isFinished ) return; //終了後は何もしない
    const guess = Number($enterNumber.value);
    if ( !Number.isInteger(guess) || guess < MIN || guess > MAX ) {
        console.log(`${MIN} ~ ${MAX}の整数を入れてください`);
        $enterNumber.value = '';       // 入力を消す
        $enterNumber.focus();          // フォーカスを戻す
        return;
    }
    if (prevGuess === guess) {
        console.log('同じ数だよ'); // or showMessage('同じ数だよ');
        $enterNumber.value = '';
        $enterNumber.focus();
        return;
        }
    prevGuess = guess;
    tries++;
    
    const finishedNow = judgeNumber(guess); //true/falseを返すように
    if( finishedNow ) {
        isFinished = true;
    } else if( tries >= MAX_TRIES ) {
        isFinished = true;
        console.log(`ゲームオーバー！正解は ${answer}`);
        $inputBtn.disabled = true;
        $resetBtn.disabled = false;
    }
    update();
    $enterNumber.value = '';
    $enterNumber.focus();
}

//数値が合っているか判定関数
   function judgeNumber(guess) {
    const diff = Math.abs(answer - guess);
    if ( tries === 3 || tries === 7) { console.log(`ヒント：${diff - 20}~${diff + 20 }の範囲です。`);} 
    let result = '';
    if ( diff === 0 ) {
        result = '正解！！';
        console.log(`${tries}回でクリアできたよ！！`)
        $inputBtn.disabled = true;
        $resetBtn.disabled = false;
        return true;
    }
    if ( diff <= 10 ) {
        result = 'おしい！';
    } else {
        result = 'ハズレ！';
    }
    history.unshift( {tries, guess, result});
    //履歴の表示を配列で行うときに一回毎にクリアしないと重複してしまう。
    $lists.innerHTML = '';
    history.forEach((h)=> {
    const li = document.createElement('li');
    li.textContent = `${tries}回目 / 入力:${h.guess} / 結果:${h.result}`;
    $lists.appendChild(li);
    })
    console.log(result);
    console.log(`答え${guess}, ${answer}`);
    return false;
}
 function update() {
    console.log(`${tries}:回目`);
 }
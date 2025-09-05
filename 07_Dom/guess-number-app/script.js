//状態
const MIN = 1;
const MAX = 100;
const history = [];
let prevGuess = null; //未入力
let answer = Math.floor(Math.random()*100)+1;
const low = Math.min(MIN,answer - 20);
const high = Math.max(MAX, answer + 20);
const MAX_HISTORY = 5;
//定数→変数
let isFinished = false;
//定数→変数
let tries = 0;
const MAX_TRIES = 2;



//UI
const $inputBtn = document.querySelector('#input-button');
const $enterNumber = document.querySelector('#input-number')
const $resetBtn = document.querySelector('#reset-button');
const $lists = document.querySelector('#list');
const $status = document.querySelector('#status'); 
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
    $status.innerHTML = '';
    $lists.replaceChildren();
    $enterNumber.value = '';
    $enterNumber.focus();
    // UIをリセット
    setPlaying(true);
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
        setPlaying(false);
    }
    update();
    $enterNumber.value = '';
    $enterNumber.focus();
}

//数値が合っているか判定関数
   function judgeNumber(guess) {
    const diff = Math.abs(answer - guess);
    if ((tries % 3 === 0 && !isFinished)) { console.log(`ヒント：${low}~${high}の範囲です。`);} 
    let result = '';
    if ( diff === 0 ) {
        result = '正解！！';
        console.log(`${tries}回でクリアできたよ！！`)
        setPlaying(false);
        return true;
    }
    if ( diff <= 10 ) {
        result = 'おしい！';
    } else {
        result = 'ハズレ！';
    }
   
    $lists.innerHTML = '';
    pushHistory({ guess, result });
    return false;
}
function pushHistory(entry) {
  history.unshift(entry);
  if (history.length > MAX_HISTORY) history.pop();
  renderHistory();
}
function renderHistory() {
  $lists.innerHTML = '';
  history.forEach(h => {
    const li = document.createElement('li');
    li.textContent = `入力:${h.guess} / 結果:${h.result}`;
    $lists.appendChild(li);
  });
}
function setPlaying(enabled) {
  $inputBtn.disabled = !enabled;
  $enterNumber.disabled = !enabled;
  $resetBtn.disabled = enabled;
}

function update() {
  const remain = Math.max(0, MAX_TRIES - tries);
  $status.textContent = `${tries}回目 / 残り${remain}回`;
}
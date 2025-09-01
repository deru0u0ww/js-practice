'use script';
const JankenGame = {
    enemyHands: [ 'rock' , 'scissors' , 'paper'],
    elements: {},
    _inited: false,
    roundCount: 0,
    winCount: 0,
    rng: Math.random,
    init( options = { }){
        if( this._inited ) { return };
        if( options.rng ) { this.rng = options.rng }

        if(!Array.isArray(this.enemyHands) || this.enemyHands.length === 0 ) {
            console.warn('enemy-handsが空です');
        } 
        this.cacheEls();
        this.bindBtn();
        this.update();
        this.reset();
        this._inited = true;
    },
    cacheEls(){
        const get =(sel)=> {
            const el = document.querySelector(sel);
            if(!el) throw new Error(`必要な情報がありません: ${sel}`);
            return el;
        }
        this.elements = {
            rockBtn: get('#rock-hand'),
            scissorsBtn: get('#scissors-hand'),
            paperBtn: get('#paper-hand'),
            enemyHandText: get('#enemy-hands'),
            resultText: get('#enemy-text'),
            myHandText: get('#my-hand'),
            finalResult: get('#final-result'),
            retryBtn: get('#retry-btn'),
            progressText: get('#progress-text'),
            
        }
    },
    bindBtn() {
        const { rockBtn, scissorsBtn, paperBtn, retryBtn } = this.elements;
        rockBtn.addEventListener('click', () => this.playRound('rock'));
        scissorsBtn.addEventListener('click', () => this.playRound('scissors'));
        paperBtn.addEventListener('click', () => this.playRound('paper'));
        retryBtn.addEventListener('click', () => this.reset());

        retryBtn.disabled = true;
        
    },
    getRandomHand() {
        return this.enemyHands[Math.floor(this.rng() * this.enemyHands.length)];
    },
    playRound( myHand ) {
        if (this.roundCount >= 5) return;
        const { enemyHandText, myHandText, resultText } = this.elements;
        const enemyHand = this.getRandomHand();

        myHandText.textContent = myHand;
        enemyHandText.textContent = enemyHand;

        let result = '';

        if (myHand === enemyHand) {
        result = 'あいこ';
        } else if (
        (myHand === 'rock' && enemyHand === 'scissors') ||
        (myHand === 'scissors' && enemyHand === 'paper') ||
        (myHand === 'paper' && enemyHand === 'rock')
        ) {
        result = '勝ち';
        this.winCount++;
        } else {
        result = '負け';
        }

        resultText.textContent = result;
        this.roundCount++;
        this.update();
    },
    
    update(){
        const { rockBtn, scissorsBtn, paperBtn, finalResult, retryBtn, progressText} = this.elements;
// 途中経過（勝率・進捗）
    const played = this.roundCount;
    const wins = this.winCount;
    const winRate = played === 0 ? 0 : Math.round((wins / played) * 100);
    progressText.textContent = `進捗：${played}/5戦 現在：${wins}勝（勝率 ${winRate}%）`;

    if (this.roundCount >= 5) {
      // ラウンド終了：出し手ボタンを無効・リトライを有効
      rockBtn.disabled = true;
      scissorsBtn.disabled = true;
      paperBtn.disabled = true;
      retryBtn.disabled = false;

      finalResult.textContent =
        this.winCount >= 3
          ? `あなたの勝ち！(${this.winCount}勝 / 5戦)`
          : `あなたの負け…(${this.winCount}勝 / 5戦)`;
    } else {
      // 進行中：出し手ボタンを有効・リトライは無効のまま
      rockBtn.disabled = false;
      scissorsBtn.disabled = false;
      paperBtn.disabled = false;
      retryBtn.disabled = true;
      finalResult.textContent = '';
    }
  },

  reset() {
    const {
      rockBtn, scissorsBtn, paperBtn,
      enemyHandText, myHandText, resultText, finalResult, retryBtn, progressText
    } = this.elements;

    this.roundCount = 0;
    this.winCount = 0;

    // 出し手ボタンは再び有効、リトライは不活性に戻す
    rockBtn.disabled = false;
    scissorsBtn.disabled = false;
    paperBtn.disabled = false;
    retryBtn.disabled = true;

    // 表示クリア
    enemyHandText.textContent = '';
    myHandText.textContent = '';
    resultText.textContent = '';
    finalResult.textContent = '';
    progressText.textContent = '進捗：0/5戦 現在：0勝（勝率 0%）';
  }
};
document.addEventListener('DOMContentLoaded', ()=> { JankenGame.init()});
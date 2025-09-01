'use script';
const Obj = {
    ene_hands: [ 'rock' , 'scissors' , 'paper'],
    els: {},
    _inited: false,
    count: 0,
    winCount: 0,
    rng: Math.random,
    init( options = { }){
        if( this._inited ) { return };
        if( options.rng ) { this.rng = options.rng }

        if(!Array.isArray(this.ene_hands) || this.ene_hands.length === 0 ) {
            console.warn('enemy-handsが空です');
        } 
        this.cacheEls();
        this.bindBtn();
        this.update();
        this._inited = true;
    },
    cacheEls(){
        const get =(sel)=> {
            const el = document.querySelector(sel);
            if(!el) throw new Error(`必要な情報がありません: ${sel}`);
            return el;
        }
        this.els = {
            rockBtnEl : get('#rock-hand'),
            scissorsBtnEl : get('#scissors-hand'),
            paperBtnEl : get('#paper-hand'),
            enemy_handsEl: get('#enemy-hands'),
            e_txEl: get('#enemy-text'),
            my_handEl: get('#my-hand'),
        }
    },
    bindBtn() {
        const { rockBtnEl, scissorsBtnEl, paperBtnEl } = this.els;
        rockBtnEl.addEventListener('click', () => {
            this.check('rock')
        });
        scissorsBtnEl.addEventListener('click', () => {
            this.check('scissors')
        });
        paperBtnEl.addEventListener('click', () => {

            this.check('paper')
        });
    },
    getRandomIndex() {
        return Math.floor(this.rng()*this.ene_hands.length);
    },
    check(hands) {
        const { e_txEl , enemy_handsEl ,my_handEl} = this.els;
        const e_hand = this.ene_hands[this.getRandomIndex()];
        console.log(e_hand);
         if ( hands === e_hand ) {
            enemy_handsEl.textContent = e_hand;
            my_handEl.textContent = hands;
            e_txEl.textContent = 'あいこ';
            this.count++;
            this.update();
         } else if ( hands === 'rock' && e_hand === 'scissors') {
            enemy_handsEl.textContent = e_hand;
            my_handEl.textContent = hands;
            e_txEl.textContent = '勝ち';
            this.count++;
            this.winCount++;
            this.update();
            
         } else if ( hands === 'scissors' && e_hand === 'paper') {
            enemy_handsEl.textContent = e_hand;
            my_handEl.textContent = hands;
            e_txEl.textContent = '勝ち';
            this.winCount++;
            this.count++;
            this.update();
         } else if ( hands === 'paper' && e_hand === 'rock') {
            enemy_handsEl.textContent = e_hand;
            my_handEl.textContent = hands;
            e_txEl.textContent = '勝ち';
            this.count++;
            this.winCount++;
            this.update();
         } else {
            enemy_handsEl.textContent = e_hand;
            my_handEl.textContent = hands;
            e_txEl.textContent = '負け';
            this.count++;
            this.update();
         }
    },
    update(){
        const { rockBtnEl, scissorsBtnEl, paperBtnEl,} = this.els;
        
        
        if ( this.count === 3 ) { 
            
            rockBtnEl.disabled = true;
            scissorsBtnEl.disabled = true;
            paperBtnEl.disabled = true;
        }
        
    }
}
document.addEventListener('DOMContentLoaded', ()=> { Obj.init()});
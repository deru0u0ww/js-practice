'use strict';

const fortuneApp = {
    fortunes: [
        { 
            result: "大吉",
            love: "理想の出会いが近い予感！素直さが鍵。",
            work: "新しい挑戦が成功するチャンス。積極的に動こう！",
            money: "思わぬ収入あり。買い物は計画的にすればさらに吉。"
        },
        {
            result: "中吉",
            love: "気になる人と距離が縮むかも。焦らず自然体で。",
            work: "努力が評価される日。周囲への感謝を忘れずに。",
            money: "小さな節約が大きな実りに。お得な情報をチェック！"
        },
        {
            result: "小吉",
            love: "友達から恋が芽生える可能性。人とのつながりを大事に。",
            work: "こつこつ続けることで成果が出る。焦らず進もう。",
            money: "財布のひもを締めると後で助かる。無駄遣いに注意。"
        },
        {
            result: "吉",
            love: "穏やかな日常が心を満たす。相手に優しくできる日。",
            work: "学びが役立つタイミング。小さな成功を積み重ねよう。",
            money: "必要な出費は吉。自己投資を意識してみよう。"
        },
        {
            result: "末吉",
            love: "まだチャンスは先。自分磨きを楽しむ時間に。",
            work: "準備の期間。焦らず知識やスキルを蓄えよう。",
            money: "コツコツ貯金が後に花開く。節約が吉。"
        },
        {
            result: "凶",
            love: "無理に動くと裏目に出るかも。今日は待ちの姿勢で。",
            work: "疲れが出やすい日。休息をしっかり取ろう。",
            money: "投資やギャンブルは控えた方が安心。"
        },
        {
            result: "大凶",
            love: "誤解が生まれやすい日。言葉選びに気をつけて。",
            work: "トラブル回避が最優先。大きな決断は控えよう。",
            money: "予想外の出費に注意。無駄遣いは厳禁。"
        }
            ],
            elements: {},

    init: function() {
        if ( this._inited ) return; //多重初期化ガード
        this.getElements();
        this.bindElements();
        this._inited = true;
    },
    getElements: function() {
        const drawBtn = document.querySelector('#drawBtn');
        const resultEl = document.querySelector('#result');
        const workEl = document.querySelector('#work');
        const loveEl = document.querySelector('#love');
        const moneyEl = document.querySelector('#money');

        // 存在チェック
    if (!drawBtn || !resultEl || !workEl || !loveEl || !moneyEl) {
      throw new Error('必要な要素が見つかりません（#drawBtn, #result, #work, #love, #money）');
    }
        this.elements = { drawBtn,resultEl,workEl,loveEl,moneyEl };
    },
    bindElements: function() {
        const { drawBtn } = this.elements;
        drawBtn.addEventListener('click', ()=> {this.showFortune();});
    },
    getRandomIndex: function() {
     return  Math.floor(Math.random()*this.fortunes.length);
    },
    showFortune: function() {
        const { resultEl, workEl, loveEl, moneyEl } = this.elements;
        const pick = this.fortunes[this.getRandomIndex()];

        resultEl.textContent = pick.result;
        loveEl.textContent   = `恋愛運: ${pick.love}`;
        workEl.textContent   = `仕事運: ${pick.work}`;
        moneyEl.textContent  = `お金運: ${pick.money}`;
    }
    

}
fortuneApp.init();


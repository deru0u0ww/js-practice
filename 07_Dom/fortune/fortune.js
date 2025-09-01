'use strict';

const fortuneApp = {
    _inited: false,
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
        rng: Math.random,
        els: {},

    init(options = {}) {
        if ( this._inited ) return; //多重初期化ガード
        if ( options.rng ) this.rng = options.rng;
        this.cacheEls();
        this.bindEvents();
        this.ensureA11y();

        // データの存在チェック
        //配列内のfortuneが配列でない場合にtrue　または、fortunesの結果が０の場合
        if (!Array.isArray(this.fortunes) || this.fortunes.length === 0) {
        console.warn('fortunes が空です。');
    }
    //初期化が完了したのでtrueに変更している
    this._inited = true;
    },
    //要素を取得
    cacheEls() {
    //存在チェックを入れている。要素が取得できない場合にエラー表示
    const get = (sel) => {
      const el = document.querySelector(sel);
      if (!el) throw new Error(`必要な要素が見つかりません: ${sel}`);
      return el;
    };
    //要素を取得
    //関数の引数として値を取得して存在チェックで都度入れている
    //また分割代入で要素をelsに代入することで他メソッドでも呼び出すことで再利用可能
    this.els = {
      drawBtn: get('#drawBtn'),
      resultEl: get('#result'),
      workEl:   get('#work'),
      loveEl:   get('#love'),
      moneyEl:  get('#money'),
    };
  },
     bindEvents() {
    const { drawBtn } = this.els;
    drawBtn.addEventListener('click', () => this.showFortune());
  },
  //forEachでel要素に付与
  //role statusとかはスクリーンリーダーっぽい、読み上げのためのやつ
  ensureA11y() {
    const { resultEl, workEl, loveEl, moneyEl } = this.els;
    [resultEl, workEl, loveEl, moneyEl].forEach(el => {
      el.setAttribute('role', 'status');
      el.setAttribute('aria-live', 'polite');
    });
  },

  getRandomIndex() {
    return Math.floor(this.rng() * this.fortunes.length);
  },

  pickFortune() {
    //もしfortunesが空の場合にtrue
    //早期リターン
    if (!this.fortunes.length) return null;
    return this.fortunes[this.getRandomIndex()];
  },

  showFortune() {
    const f = this.pickFortune();
    if (!f) return;

    const { resultEl, workEl, loveEl, moneyEl } = this.els;

    resultEl.textContent = f.result;
    loveEl.textContent   = `恋愛運: ${f.love}`;
    workEl.textContent   = `仕事運: ${f.work}`;
    moneyEl.textContent  = `金運: ${f.money}`; 
  }
};

// DOM構築後に初期化（または <script defer> を使用）
document.addEventListener('DOMContentLoaded', () => fortuneApp.init());
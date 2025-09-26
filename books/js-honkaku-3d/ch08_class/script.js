class Monster {
  #name = ''; 
  #hp = 0;
  constructor(name, hp){ 
    this.#name = name; 
    this.#hp = hp; 
}
  get name(){ return this.#name; }
  get hp(){ return this.#hp; }
  isAlive(){ return this.#hp > 0; }

  attack(target, log, turn, isHero=false){
    if (!this.isAlive()) return;
    const damage = Math.floor(Math.random()*10)+1;

    // 攻撃ログ（統一フォーマット）
    log.push({
      type: 'attack',
      turn: isHero ? turn : null,   // 勇者の時だけターン番号
      actor: this.#name,
      target: target.name,
      value: damage,
      hpAfter: Math.max(0, target.#hp - damage),
    });

    target.takeDamage(damage, log, isHero ? turn : null, isHero);
  }

  takeDamage(amount, log, turn, isHero=false){
    this.#hp = Math.max(0, this.#hp - amount);
    if (this.#hp === 0){
      log.push({
        type: 'down',
        turn: isHero ? turn : null,
        actor: this.#name
      });
    }
  }
}

const slime = new Monster('スライム',30);
const hero  = new Monster('勇者',50);

const battleLog = [];
let turn = 1;

while (hero.isAlive() && slime.isAlive()){
  hero.attack(slime, battleLog, turn, true);     // 勇者（ターン付与）
  if (!slime.isAlive()) break;
  slime.attack(hero, battleLog, turn, false);    // 敵（ターンはnull）
  turn++; // 勇者の行動が終わったら進める
}

// 終了ログも同じ形に（文字列を混ぜない）
battleLog.push({ type: 'end', turn: null });

// 表示：typeに応じて整形
for (const e of battleLog){
  if (e.type === 'attack'){
    const head = (e.turn != null) ? `ターン${e.turn}: ` : '';
    console.log(`${head}${e.actor}が${e.target}に${e.value}ダメージ(残HP:${e.hpAfter})`);
  } else if (e.type === 'down'){
    const head = (e.turn != null) ? `ターン${e.turn}: ` : '';
    console.log(`${head}${e.actor}は倒れた！`);
  } else if (e.type === 'end'){
    console.log('戦いは終了した');
  }
}

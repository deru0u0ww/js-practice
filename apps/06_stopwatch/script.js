
  'use strict';
  // =============================
  // Stopwatch – 学習用 実装
  // =============================
  // 学びポイント（TODOチャレンジ）
  //  - STEP1: TICK_MS を 100 に変えても合計時間が正確か確認
  //  - STEP2: setControls() のラベル切替ロジックを読んで説明できる？
  //  - STEP3: addLap() をコメントアウトして自分で再実装
  //  - STEP4: format() を "hh:mm:ss.SSS" に拡張
  //  - STEP5: Space=Start/Pause, R=Reset, L=Lap のキーバインド追加/変更

  // ====== State ======
  let isRunning = false;         // 起動中か
  let startTime = 0;             // 直近の開始時刻（ms, performance.now）
  let accumulated = 0;           // 一時停止までの累積時間（ms）
  let timerId = null;            // setInterval のID
  const TICK_MS = 100;            // 表示更新間隔（ms）

  // ====== UI refs ======
  const $time = document.getElementById('time');
  const $btnToggle = document.getElementById('btn-toggle');
  const $btnReset = document.getElementById('btn-reset');
  const $btnLap = document.getElementById('btn-lap');
  const $laps = document.getElementById('laps');
  const $message = document.getElementById('message');

  // ====== Utility ======
  const now = () => (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();

  function getElapsedMs(){
    return isRunning ? (accumulated + (now() - startTime)) : accumulated;
  }

  function pad(n, len){ return String(n).padStart(len, '0'); }

  function format(ms){
    const totalMs = Math.floor(ms);
    const sec = Math.floor(totalMs / 1000);
    const min = Math.floor(sec / 60);
    const s = sec % 60;
    const SSS = totalMs % 1000;
    return `${pad(min,2)}:${pad(s,2)}.${pad(SSS,3)}`; // STEP4: ここを拡張してみよう
  }

  function show(msg, type=''){
    $message.textContent = msg || '';
    if (type) $message.dataset.type = type; else $message.removeAttribute('data-type');
  }

  // ====== Rendering ======
  function renderTime(){
    $time.textContent = format(getElapsedMs());
  }

  function setControls(){
    // Start/Pause/Resume のラベル切替
    $btnToggle.textContent = isRunning ? 'Pause' : (accumulated ? 'Resume' : 'Start');
    // Reset: 経過が0かつ停止中なら無効
    $btnReset.disabled = !accumulated && !isRunning;
    // Lap: 走行中のみ有効
    $btnLap.disabled = !isRunning;
  }

  function renderLap(text){
    const li = document.createElement('li');
    li.textContent = text;
    $laps.appendChild(li);
    $laps.scrollTop = $laps.scrollHeight;
  }

  // ====== Core actions ======
  function start(){
    if (isRunning) return;              // 重複起動ガード
    isRunning = true;
    startTime = now();
    if (timerId == null){ timerId = setInterval(renderTime, TICK_MS); }
    setControls();
    renderTime();
    show('計測中…');
  }

  function pause(){
    if (!isRunning) return;
    accumulated += (now() - startTime);
    isRunning = false;
    if (timerId != null){ clearInterval(timerId); timerId = null; }
    setControls();
    renderTime();
    show('一時停止');
  }

  function toggleRun(){ isRunning ? pause() : start(); }

  function resetWatch(){
    // 実運用では、走行中リセットは一旦 pause する実装が安全
    if (isRunning) pause();
    accumulated = 0;
    startTime = 0;
    $laps.replaceChildren();
    renderTime();
    setControls();
    show('リセットしました');
    $btnToggle.focus();
  }

  function addLap(){
    if (!isRunning) return;
    renderLap(format(getElapsedMs()));
  }

  // ====== Events ======
  $btnToggle.addEventListener('click', toggleRun);
  $btnReset.addEventListener('click', resetWatch);
  $btnLap.addEventListener('click', addLap);

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space'){ e.preventDefault(); toggleRun(); }
    if (e.key === 'r' || e.key === 'R'){ resetWatch(); }
    if (e.key === 'l' || e.key === 'L'){ addLap(); }
  });

  // ====== Init ======
  renderTime();
  setControls();
  show('Start を押して計測開始');

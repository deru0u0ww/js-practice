// const $btn = document.getElementById('btn');
// $btn.addEventListener('click', ()=> {
//     console.log('一回だけ反応');
//     $btn.disabled = true;
// },{once: true});


// const $btnA = document.getElementById('btnA');
// const $btnB = document.getElementById('btnB');

// $btnA.addEventListener('click', ()=>{
//     console.log('Aが押されました');
//     $btnA.disabled = true; //Aを無効化
//     $btnB.disabled = false; //Bを有効化
// })
// $btnB.addEventListener('click', ()=>{
//     console.log('Bが押されました');
//     $btnB.disabled = true; //Bを無効化
//     $btnA.disabled = false; //Aを有効化
// })

// const buttons = document.querySelectorAll('button');
// const result = document.querySelector('#result');

// buttons.forEach(btn => {
//     btn.addEventListener('click', ()=> {
//         buttons.forEach(b => {
//             b.disabled = false;
//             b.style.backgroundColor = "";
//         });
//         btn.disabled = true;
//         btn.style.backgroundColor = 'lightblue';
//         result.textContent = `${btn.textContent}が選ばれました`;
//     });
// });
const step1 = document.querySelector("#step1");
    const step2 = document.querySelector("#step2");
    const result = document.querySelector("#result");

    // ステップ1のボタンを押したらステップ2に進む
    document.querySelectorAll("#step1 button").forEach(btn => {
      btn.addEventListener("click", () => {
        result.textContent = `${btn.textContent} が選ばれました`;
        step1.style.display = "none";
        step2.style.display = "block";
      });
    });

    // ステップ2のボタン
    document.querySelectorAll("#step2 button").forEach(btn => {
      if (btn.id !== "backBtn") {
        btn.addEventListener("click", () => {
          result.textContent = `${btn.textContent} が選ばれました`;
        });
      }
    });

    // 戻るボタンでステップ1に戻す
    document.querySelector("#backBtn").addEventListener("click", () => {
      step1.style.display = "block";
      step2.style.display = "none";
    });
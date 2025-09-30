const QUESTIONS = [
    { prompt: 123,      answer: 'number',   choices:['number', 'string', 'boolean', 'object']},
    { prompt: 'hello',  answer: 'string',   choices:['number', 'string', 'boolean', 'object']},
    { prompt: true,     answer: 'boolean',  choices:['number', 'string', 'boolean', 'object']},
    { prompt: null,     answer: 'object',   choices:['number', 'string', 'boolean', 'object']},
    { prompt: [1,2,3],  answer: 'object',   choices:['number', 'string', 'boolean', 'object']},
    { prompt: undefined,answer: 'undefined',choices:['undefined', 'string', 'boolean', 'object']},
    { prompt: NaN,      answer: 'number',   choices:['number', 'string', 'boolean', 'object']},
    { prompt: {a:1},    answer: 'object',   choices:['number', 'string', 'boolean', 'object']},
]
function shuffle(array) {
    for(let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
}
function pretty(val) {
    if (val === null) return 'null';
    if (Number.isNaN(val)) return 'NaN';
    if (Array.isArray(val)) return JSON.stringify(val);
    if (typeof val === 'object') return JSON.stringify(val);
    if (typeof val === 'string') return `'${val}'`;
    return String(val);
}
let order = [];
let current = 0;
let score = 0;
let locked = false;

const $status   = document.getElementById('status');
const $question = document.getElementById('question');
const $choices  = document.getElementById('choices');
const $feedback = document.getElementById('feedback');
const $next     = document.getElementById('nextBtn');
const $restart  = document.getElementById('restartBtn');

function startGame() {
    order = shuffle([...Array(QUESTIONS.length).keys()]);
    current = 0;
    score = 0;
    locked = false;
    $feedback.textContent = '';
    $restart.hidden = true;
    $next.disabled = true;
    render();
}

function render() {
    const q = QUESTIONS[order[current]];
    $status.textContent = `問題${current + 1} / ${QUESTIONS.length} 問中 ${score} 問正解`;
    $question.textContent = `次の値の型は？: ${pretty(q.prompt)}`;
    const shuffledChoices = shuffle([...q.choices]);

    $choices.innerHTML = '';
    shuffledChoices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'choice';
        btn.dataset.value = choice;
        btn.textContent = choice;
        $choices.appendChild(btn);
    });

    $next.disabled = true;
    $feedback.textContent = '';
    locked = false;
}

$choices.addEventListener('click',(e) => {
    const btn = e.target.closest('.choice');
    if(!btn || locked) return;

    const picked = btn.dataset.value;
    const q = QUESTIONS[order[current]];
    locked = true;
    if(picked === q.answer) {
        score++;
        $feedback.textContent = '✅正解！';
        btn.disabled = true;
        btn.setAttribute('aria-pressed' , 'true');
    } else {
        $feedback.textContent = `❌不正解...正解は${q.answer}`;
        [...$choices.children].forEach(b => {
            b.disabled = true;
            if( b.dataset.value === q.answer) {
                b.setAttribute('aria-pressed', 'true');
            }
        });
    }
    $next.disabled = false;
});

$next.addEventListener('click', ()=> {
    if(current < QUESTIONS.length -1) {
        current++;
        render();
    } else {
        $question.textContent = '終了！お疲れ様';
        $choices.innerHTML = '';
        $feedback.textContent = `最終スコア：${score} / ${QUESTIONS.length} 問正解`;
        $next.disabled = true;
        $restart.hidden = false;
    }
});
$restart.addEventListener('click', startGame);

startGame();
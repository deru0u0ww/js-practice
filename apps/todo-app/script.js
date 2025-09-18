//タスクを貯めれるのは5つまでにしてそれ以上の追加はアラートが流れるようにしたい。

const MIN = 0;
const MAX = 24;
const STORAGE_KEY = 'todo_card_items_v1';
//DOM
const $input  = document.querySelector('.todo-card__input');
const $length = document.querySelector('.todo-card__length');
const $alert  = document.querySelector('.todo-card__alert');
const $reset  = document.querySelector('.todo-card__reset-button');
const $add    = document.querySelector('.todo-card__add-button');
const $ul     = document.querySelector('.todo-card__list');

let todos = [];

function saveTodos() {
    localStorage.setItem(STORAGE_KEY,JSON.stringify(todos));
}
function loadTodos() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        todos = raw ? JSON.parse(raw) :[];
        if(!Array.isArray(todos)) todos = [];
    } catch {
        todos = [];
    }
}
function updateUI() {
    const formatedLength = $input.value.trim().length;
    $length.textContent = `入力文字数:${formatedLength}/${MAX}`;
    $alert.textContent = formatedLength > MAX ? '入力できる文字数を超えています' : $alert.textContent = '';
    $add.disabled = formatedLength === MIN || formatedLength > MAX;

}
function createItem(todo) {
    const li = document.createElement('li');
    li.className = 'todo-card__item';
    li.dataset.id = String(todo.id);
    if(todo.done) { li.classList.add('todo-card__item--done')}

    const doneBtn = document.createElement('input');
    doneBtn.type = 'checkbox';
    doneBtn.className = 'todo-card__action todo-card__action--done';
    doneBtn.checked = todo.done;
    
    const createTodo = document.createElement('span');
    createTodo.className = 'todo-card__text';
    createTodo.textContent = todo.text;

    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.className = 'todo-card__action todo-card__action--delete';
    delBtn.ariaLabel = '削除する';
    delBtn.textContent = '🗑';

    const timeEl = document.createElement('p');
    timeEl.className = 'todo-card__time';
    const d = new Date(todo.createdAt);
    const hour = String(d.getHours()).padStart(2, '0');
    const minute = String(d.getMinutes()).padStart(2,'0');
    timeEl.textContent = `登録時間:${d.getFullYear()}.${d.getMonth()+1}.${d.getDate()} ${hour}:${minute}`;

    li.append(doneBtn,createTodo,delBtn,timeEl);
    return li;
}
function render() {
    $ul.replaceChildren(...todos.map(createItem));
}
function addTodo(text) {
    const t = {
        id: Date.now(),
        text,
        done: false,
        createdAt:Date.now(),
    }
    todos.unshift(t);
    saveTodos();
    render();
}
function deleteTodo(id) {
    todos = todos.filter(t => t.id != id);
    saveTodos();
    render();
}
function toggleTodo(id, done) {
    const idx = todos.findIndex(t => t.id === id);
    if(idx !== -1) {
        todos[idx] = { ...todos[idx], done};
    }
    saveTodos();
    render();
}
$input.addEventListener('input', ()=> { updateUI();})
$reset.addEventListener('click', ()=> {
    $input.value = '';
    $length.textContent = `入力文字数:${MIN}/${MAX}`;
    $alert.textContent = '';
    $input.focus();
})
$add.addEventListener('click', ()=> {
    const formatedLength = $input.value.trim().length;
    const todo = $input.value.trim();
    if (formatedLength > MAX || formatedLength === MIN) { $alert.textContent = `1 ~ ${MAX}で入力してください`;
        return;
    }    
    addTodo(todo);
    // const hr = document.createElement('hr');
    // const li = createItem(todo);
    // li.append(hr);
    // $ul.prepend(li);

    $input.value = '';
    updateUI();
    $input.focus();
})
$input.addEventListener('keydown', (e)=> {
    if( e.isComposing) return;
    const isEnter = e.key === 'Enter' || e.code === 'NumpadEnter';
    if(isEnter && !$add.disabled) {
        e.preventDefault();
        $add.click();
    } 
});
$ul.addEventListener('change', (e)=> {
    const chk = e.target.closest('.todo-card__action--done');
    if(!chk) { return }
    const li = chk.closest('.todo-card__item');
    const id = Number(li.dataset.id);
    toggleTodo(id, chk.checked);
    });
$ul.addEventListener('click', (e) => {
    const del = e.target.closest('.todo-card__action--delete');
    if(!del) { return } 
    const li = del.closest('.todo-card__item');
    const id = Number(li.dataset.id);
    deleteTodo(id);
});

loadTodos();
render();
updateUI();
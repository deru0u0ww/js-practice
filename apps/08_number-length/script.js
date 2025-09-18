const $input = document.getElementById('input');
const $counter = document.getElementById('counter');
const $alertMessage = document.getElementById('alert-message');
const $clearBtn = document.getElementById('clear');
const $history = document.getElementById('history');
const $submit = document.getElementById('submit');
const $resetHistoryBtn = document.getElementById('reset-history');

$resetHistoryBtn.disabled = true;

$input.addEventListener('input', ()=> {
    const length = $input.value.trim().length;
    $counter.textContent = `入力文字数：${length}/10`;
    if( length > 10 ) { 
        $alertMessage.textContent = '文字数超えてるよ';
        $alertMessage.style.color = 'red';
    } else {
        $alertMessage.textContent = '';
    }

    $submit.disabled = length === 0 || length > 10;
});
$submit.addEventListener('click', ()=> {
    const text = $input.value.trim();
    if( text.length === 0 || text.length > 10 ) { $alertMessage.textContent = '10文字で入力してください';
        return;
    }
    const li = document.createElement('li');
    li.textContent = text;
    $history.prepend(li);
    $resetHistoryBtn.disabled = false;

    $input.value = '';
    $counter.textContent = `入力文字数:0/10`;
    $alertMessage.textContent = '';
    $submit.disabled = true;
    $submit.focus();
})
$clearBtn.addEventListener('click', ()=> {
    $input.value = '';
    $counter.textContent = `入力文字数:0/10`;
    $alertMessage.textContent = '';
    $submit.focus();
})
$resetHistoryBtn.addEventListener('click', () =>{
    $history.replaceChildren();
    $resetHistoryBtn.disabled = true;
})

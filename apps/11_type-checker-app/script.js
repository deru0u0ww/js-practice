const $input = document.querySelector('.type-checker__input');
const $btn = document.querySelector('.type-checker__button');
const $result = document.querySelector('.type-checker__result');

function checkType() {
    const input = $input.value;
    let value;
    if( !isNaN(Number(input)) && input.trim() !== '') {
        value = Number(input);
    } else if(input === 'true'||input === 'false') {
        value =(input === 'true');
    } else if(input === 'null') {
        value = null;
    } else if(input === 'undefined') {
        value = undefined;
    } else {
        value = input;
    }
    
    return value;
}
$btn.addEventListener('click', function() {
    const value = checkType();
    $result.textContent = `値:${value}/型:${typeof value}`;
    $input.value = '';
})
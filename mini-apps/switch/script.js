const $switch = document.querySelector('.light-bulb__switch');
const $img    = document.querySelector('.light-bulb__image');

let isSwitched = false;

const image = [
    './images/kkrn_icon_denkyuu_1.png',
    './images/kkrn_icon_denkyuu_2.png',
]
$switch.addEventListener('click', ()=> {
    if(!isSwitched) {
        $img.src = image[1];
        $switch.textContent = 'OFF';
    } else {
        $img.src = image[0];
        $switch.textContent = 'ON';
    }
    isSwitched = !isSwitched;
})


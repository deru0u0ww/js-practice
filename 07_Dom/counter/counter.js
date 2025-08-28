'use strict';
//カウンターアプリ

const counter = {
    value: 0, //初期値
    elements: {}, //要素を格納するためのオブジェクト
    init() {

        counter.createElements();
        counter.bindEvents();
        counter.update();
        //初期表示
        this.update();
    },
    createElements(){
        //親要素の作成
        const container = document.createElement('div');
        document.body.appendChild(container);
        //追加ボタン要素
        const addBtn = document.createElement('button');
        addBtn.textContent = '+';
        container.appendChild(addBtn);
        //現象ボタン要素
        const downBtn = document.createElement('button');
        downBtn.textContent = '-';
        container.appendChild(downBtn);
        //リセットボタン要素
        const resetBtn = document.createElement('button');
        resetBtn.textContent = 'Reset';
        container.appendChild(resetBtn);
        
        //値の表示
        const valueElem = document.createElement('p');
        container.appendChild(valueElem);
        
        //分割代入でelemensに代入することで、uppdateメソッド内でも参照できる
        this.elements = { container, addBtn, downBtn, resetBtn,valueElem};
    },
    bindEvents() {
        const { addBtn, downBtn, resetBtn } = this.elements;
        //追加ボタンのクリックイベント
        addBtn.addEventListener('click', ()=> {
            this.value++;
            this.update();
            
        });
        //現象ボタンのクリックイベント
        downBtn.addEventListener('click', ()=> {
            this.value--;
            this.update();
        })
        resetBtn.addEventListener('click', ()=> {
            this.value = 0;
            this.update();
        })
    },
    update() {
        const { valueElem } = this.elements;
        //値の表示を更新
        valueElem.textContent = this.value;
        valueElem.style.color = this.value >= 0 ? 'green' : 'red';
    }
}

counter.init();

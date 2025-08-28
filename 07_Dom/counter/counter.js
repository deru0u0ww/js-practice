'use strict';
//カウンターアプリ

const counter = {
    value: 0, //初期値
    elements: {}, //要素を格納するためのオブジェクト
    init() {
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
        
        //値の表示
        const valueElem = document.createElement('p');
        container.appendChild(valueElem);
        
        this.elements = { container, addBtn, downBtn, valueElem};
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
        //初期表示
        this.update();
    },
    update() {
        const { valueElem } = this.elements;
        //値の表示を更新
        this.elements.valueElem.textContent = this.value;

        valueElem.style.color = this.value >= 0 ? 'green' : 'red';
    }


    
    
}

counter.init();

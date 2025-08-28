'use strict';
//カウンターアプリ

const counter = {
    value: 0,
    elements: {},
    init() {
        const container = document.createElement('div');
        document.body.appendChild(container);

        const addBtn = document.createElement('button');
        addBtn.textContent = '+';
        container.appendChild(addBtn);

        const downBtn = document.createElement('button');
        downBtn.textContent = '-';
        container.appendChild(downBtn);

        const result = document.createElement('p');
        result.textContent = this.value;
        container.appendChild(result);

        
    }
}

counter.init();

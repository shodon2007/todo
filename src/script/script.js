const domList = document.querySelector('.todo__list');
const input = document.querySelector('.todo__input');
const addButton = document.querySelector('.todo__button');

let list = localStorage.getItem('list');
let hour = 0;
let minute = 0;

if (typeof (list) == 'string') {
    list = list.split(',');
}

function showList() {
    domList.innerHTML = '';
    if (list != null) {
        list.forEach((item, index) => {
            item = getTime(item);
            domList.innerHTML += `
            <div class="todo__item item${index}">
                <div class="item__left" onclick="crossOut(${index})">
                    ${++index}. ${item}
                </div>
                <div class="item__right">
                    <div class="item__time">
                        ${hour}:${minute}
                    </div>
                    <div class="item__delete" onclick="deleteItem(${index})">X</div>
                </div>
            </div>`;
        });
    } else {
        list = [];
    }
}
showList();

function addClick() {
    if (input.value !== "") {
        let date = new Date();
        list.push(input.value + 'date' + date.getHours() + '.' + date.getMinutes());
        localStorage.setItem('list', list);
        addList(list.length - 1, list[list.length - 1]);
        input.value = '';
    }
}

window.deleteItem = index => {
    list.splice(index -= 1, 1);
    console.log(list)
    localStorage.setItem('list', list);
    showList();
}

function getTime(str) {
    let i = str.lastIndexOf('date');
    let time = str.slice(i + 4).split('.');
    hour = time[0];
    minute = time[1];
    return str.slice(0, i);
}

function addList(index, item) {
    item = getTime(item);
    domList.innerHTML += `
            <div class="todo__item item${index}">
                <div class="item__left" onclick="crossOut(${index})">
                    ${++index}. ${item}
                </div>
                <div class="item__right">
                    <div class="item__time">
                        ${hour}:${minute}
                    </div>
                    <div class="item__delete" onclick="deleteItem(${index})">X</div>
                </div>
            </div>`;
}

window.crossOut = index => {
    document.querySelector(`.item${index}`).classList.toggle('line');
}

addButton.addEventListener('click', addClick);
document.addEventListener('keyup', (key) => {
    if (key.key == 'Enter') {
        addClick();
    }
});
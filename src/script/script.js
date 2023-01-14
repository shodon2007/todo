const domList = document.querySelector('.todo__list');
const input = document.querySelector('.todo__input');
const addButton = document.querySelector('.todo__button');

let list = localStorage.getItem('list');

function showList() {
    domList.innerHTML = '';
    if (list != null) {
        if (typeof (list) == 'string') {
            list = list.split(',');
        }
        list.forEach(item => {
            domList.innerHTML += `<div>${item}</div>`;
        });
    } else {
        list = [];
    }
}
showList();

function addClick() {
    list.push(input.value);
    localStorage.setItem('list', list);
    showList();
    input.value = '';
}

addButton.addEventListener('click', addClick);
document.addEventListener('keyup', (key) => {
    if (key.key == 'Enter') {
        addClick();
    }
});
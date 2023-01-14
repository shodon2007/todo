const domList = document.querySelector('.list');
const input = document.querySelector('.input');
const addButton = document.querySelector('.add');

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
}



addButton.addEventListener('click', addClick);
var node = null;



function resetColor() {
    var liList = document.getElementsByTagName('li');
    for (var i = 0; i < liList.length; i++) {
        liList[i].setAttribute('style', 'color: black');
    }
}

function selectFirstChild() {
    resetColor();
    var list = document.getElementById('myList');
    var child = list.firstElementChild;
    if (child != null) {
        child.setAttribute('style', 'color: blue');
    }
    node = list.firstElementChild;
}

function selectLastChild() {
    resetColor();
    var list = document.getElementById('myList');
    var child = list.lastElementChild;
    if (child != null) {
        child.setAttribute('style', 'color: blue');
    }
    node = list.lastElementChild;
}

function selectNext() {
    resetColor();
    if (node == null) {
        var list = document.getElementById('myList');
        node = list.firstElementChild;
        node.setAttribute('style', 'color: blue');
        return;
    }
    node = node.nextElementSibling;
    if (node != null) node.setAttribute('style', 'color: blue');

}

function selectPrev() {
    resetColor();
    if (node == null) {
        var list = document.getElementById('myList');
        node = list.lastElementChild;
        node.setAttribute('style', 'color: red');
        return;
    }
    node = node.previousElementSibling;
    if (node != null) node.setAttribute('style', 'color: blue');
}

function addFirstElement() {
    var list = document.getElementById('myList');
    var item = document.createElement('li');

    item.innerHTML = 'Новый элемент';

    if (list.firstChild != null) {
        list.insertBefore(item, list.firstChild);
    }
}


function addElement() {
    var list = document.getElementById('myList');
    var item = document.createElement('li');
    item.innerHTML = 'Новый элемент';
    list.appendChild(item);
}

function deleteElement() {
    if (document.getElementById("myList").childElementCount > 0) {
        let lastElement = document.getElementById("myList").lastChild;
        document.getElementById("myList").removeChild(lastElement);
    } else alert("Ошибка! Вы не можете совершить это действие-нет элементов для удаления.")
}
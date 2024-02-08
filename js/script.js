
const myButton = document.querySelector('#myButton')
const nameInp = document.querySelector('#nameInp')
const list = document.querySelector('#list')


myButton.addEventListener('click', () => {
    //создать элемент

    let newItem = document.createElement('li');

    //Добавить элемент в список parent.appenChild(item)

    list.appendChild(newItem)

    // item.classList.add('') добавить элементу item класс

    newItem.classList.add('item')

    //записать содержимое поля ввода в элемент списка

    newItem.textContent = nameInp.value
    let delBtn = document.createElement('button');
    delBtn.classList.add('delbtn')
    delBtn.textContent = 'х'
    newItem.appendChild(delBtn)
    // Очистить поле ввода
    nameInp.value = ''
    //Удаление элемента списка

    delBtn.addEventListener('click', () => {
        list.removeChild(newItem)

    })
    newItem.addEventListener('click', ()=>{
        newItem.classList.toggle('item2')
        delBtn.classList.toggle('delbtn2')

    })
})

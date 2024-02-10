
const myButton = document.querySelector('#myButton')
const nameInp = document.querySelector('#nameInp')
const list = document.querySelector('#list')
const poiskbtn =document.querySelector('#poiskbtn')
const inppoisk =document.querySelector('#inppoisk')


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


//indexOf() - поиск подсторки в строке



//toLowerCase все символы маленькие

// if(result!=-1){
//     console.log(`Строка ${str} содержит подстроку "${chunk}"`)
// }else{
//     console.log(`Строка ${str} несодержит подстроку "${chunk}"`)
// }

function isMatching(full, chunk){
    let index = full.toLowerCase().indexOf(chunk.toLowerCase());
    let result=index!=-1 ;
    return result;
}

function poisk(input){
    const items=document.querySelectorAll('.item')
    let value=input.value
    for(let item of items){
        if(isMatching(item.textContent, value)== false){
            item.style.display="none"
        }else{
            item.style.display="flex"
        }
    }
}

inppoisk.addEventListener('keyup',()=>{
    poisk(inppoisk)
})


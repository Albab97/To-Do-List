const form = document.querySelector('.container-form');
const inputField = document.querySelector('.input-field');
const list = document.querySelector('.container-items');

form.addEventListener('submit',addItem);
let index = 0;
function addItem(e){
    e.preventDefault();
    const value = inputField.value;
    if(value){
        const idNumber = ++index;
        const element = document.createElement('li');
        element.classList.add('item');
        element.setAttribute("data-id",idNumber);
        element.innerHTML= 
        `<span class="item-name">${value}</span>  
          <div class='btns'>
            <button class="done-btn"><i class="fa-solid fa-check"></i></button>
            <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
          </div>`  ;
            //adding delete btn and tick btn event listeners
        const deleteBtn = element.querySelector('.delete-btn')
        deleteBtn.addEventListener('click',removeItem); 
        const doneBtn = element.querySelector('.done-btn')
        doneBtn.addEventListener('click',tickItem);
        list.appendChild(element);  
        inputField.value="";
    }
}
function removeItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    list.removeChild(element)
}
function tickItem(e){
    const element =e.currentTarget.parentElement.previousElementSibling;
    element.innerHTML = `<strike>${element.textContent}</strike>`
}

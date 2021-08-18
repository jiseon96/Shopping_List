const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
const items = document.querySelector('.items');

addBtn.addEventListener('click', ()=>{
    onAdd();
});

function onAdd(){
    const text = input.value;
    console.log(text);

    if(text ===''){
        input.focus();
        return;
    }

    const item = createItem(text);

    items.append(item);

    item.scrollIntoView({block:'center'});

    input.value = '';
    input.focus();
}

function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const itemName = document.createElement('span');
    itemName.setAttribute('class', 'item__Name');
    itemName.innerHTML = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    });

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.appendChild(itemName);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    return itemRow;
}

input.addEventListener('keypress', (event)=>{
    if(event.keyCode === 13){
        onAdd(); 
    }
})
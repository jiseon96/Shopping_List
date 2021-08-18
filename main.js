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

let id = 0

function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id );

    itemRow.innerHTML = `
        <li class="item__row">
            <div class="item">
                <span class="item__name">${text}</span>
                <button class="item__delete">
                    <i class="fas fa-trash-alt" data-id=${id}></i>
                </button>
            </div>
            <div class="item__divider"></div>
        </li>
    `;

    id++;
    return itemRow;
}

input.addEventListener('keypress', (event)=>{
    if(event.keyCode === 13){
        onAdd(); 
    }
})

items.addEventListener('click', event =>{
    const id = event.target.dataset.id;
    if(id){
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
});
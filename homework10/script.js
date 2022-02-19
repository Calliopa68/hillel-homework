(() => {
    const inputEl = document.getElementById('input');
    const buttonAddEl = document.getElementById('submit');
    const toDoEl = document.getElementById('to-do-list');
    const toDoItem = document.getElementById('to-do-item');
    
    toDoEl.append(toDoItem);
    toDoEl.addEventListener('change', e => {
        if(e.target.classList.contains('checkbox')){
            e.target.nextElementSibling.classList.toggle('done-checkbox')
        }
    })

    toDoEl.addEventListener('click', e => {
        if(e.target.classList.contains('nes-btn')){
            e.target.parentElement.remove();
        }
    })

    buttonAddEl.addEventListener('click', () => {
        const inputValue = inputEl.value;
        inputEl.value = '';
        const liEl = document.createElement('li');
        liEl.innerHTML = toDoItem.innerHTML.replace('{{inputValue}}', inputValue)
        
        toDoEl.append(liEl)
    })


    
})();
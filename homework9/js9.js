let inputEl = document.getElementById('text-field');
let buttonEl = document.getElementById('submit');

buttonEl.onclick = () => {
    console.log(inputEl.value);
    inputEl.value = '';
};
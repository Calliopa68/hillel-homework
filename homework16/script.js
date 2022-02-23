const API = 'https://reqres.in/api/users';
const cardTemplateEl = document.getElementById('user-card-template').innerHTML;
const xhr = new XMLHttpRequest();

const getUsers = (page = 1) => {
    
    xhr.open('GET', `${API}?page=${page}`, false);
    xhr.send();
    const { data } = JSON.parse(xhr.responseText);
    return data;
}


const render =  (template, bindings) => {
    let result = template;
    Object.keys(bindings).forEach(e => {
        result = result.replaceAll(`{{${e}}}`, bindings[e]);
    })
    return result;
}

const renderUserList = users => {
    const userListEl = document.getElementById('user-list');
    
    const templates = users.map(e => render(cardTemplateEl, e))
    .join('');

    userListEl.innerHTML = templates;
}

const prepareFormData = () => {
    const formEl = document.getElementById('form-data');
    const inputs = formEl.children
    const valuesArr = []
    Array.prototype.forEach.call(inputs, function(e) {
        dataFields = {}
        dataFields.name = e.name;
        dataFields.value = e.value

        valuesArr.push(dataFields)
    });
    return valuesArr
}

const submitForm = () => {
    xhr.open('POST', API, false)
}

(() => {
    const buttonPrevEl = document.getElementById('button-prev');
    const buttonNextEl = document.getElementById('button-next');
    const submitButtonEl = document.getElementById('send-form');

    const renderCall = page => {
        const users = getUsers(page);
        renderUserList(users);
    }
    let globalPage = 1;

    buttonNextEl.addEventListener('click', e => {
        renderCall(++globalPage);
        console.log(globalPage)
    })
    buttonPrevEl.addEventListener('click', e => {
        renderCall(--globalPage);
    })

    submitButtonEl.addEventListener('click', e => {
        submitForm(prepareFormData())
    })
    renderCall(globalPage)
})();

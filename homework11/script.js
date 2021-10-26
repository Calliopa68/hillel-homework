( () => {
    const loginEl = document.getElementById('login');
    const passwordEl = document.getElementById('password');
    const buttonEl = document.getElementById('button');
    const formEl = document.getElementById('form');
    const messageEl = document.getElementById('success-message');

    const validateEmailInput = (email) => {
        const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return reg.test(email);

    }
    loginEl.addEventListener('focusout', () => {
        const errorMessage = document.createElement('span');
        if (!validateEmailInput(loginEl.value)){
            errorMessage.innerText = `${loginEl.value} is not valid`;
            errorMessage.classList.add('error');
            loginEl.nextElementSibling.insertAdjacentElement('afterend', errorMessage);
        } 
    }, { once: true });

    buttonEl.addEventListener('click', () => {
        if( loginEl.value || passwordEl.value == ""){
            buttonEl.disabled = true;
            loginEl.classList.toggle('error-input');
            passwordEl.classList.toggle('error-input');
        } ;
    });

    buttonEl.addEventListener('click', () => {
        const formErrorMessage = document.createElement('span');
        formErrorMessage.innerText = 'Try again';
        formErrorMessage.classList.add('error');
        if (loginEl.value == 'admin@domain.com' && passwordEl.value == 'password123') {
            formEl.classList.toggle('invisible', 'form');
            messageEl.classList.toggle('visible','success-message');
        } else{
            formEl.nextElementSibling.insertAdjacentElement('beforebegin', formErrorMessage);
            loginEl.value = '';
            passwordEl.value = '';
        };
    });
})();
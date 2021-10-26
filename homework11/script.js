( () => {
    const loginEl = document.getElementById('login');
    const passwordEl = document.getElementById('password');
    const buttonEl = document.getElementById('button');

    const validateEmailInput = (email) => {
        const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return reg.test(email);

    }
    const showErrorMessage = () => {
        loginEl.addEventListener('focusout', () => {
            const errorMessage = document.createElement('span');
            if (!validateEmailInput(loginEl.value)){
                errorMessage.innerText = `${loginEl.value} is not valid`;
                errorMessage.classList.add('error');
                loginEl.nextElementSibling.insertAdjacentElement('afterend', errorMessage);
            } 
        }, { once: true });
    };
    showErrorMessage();
    

})();
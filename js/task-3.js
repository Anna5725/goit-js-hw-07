const userNameEl = document.querySelector('.js-name-input');
const outputEl = document.querySelector('.js-name-output');
    userNameEl.addEventListener('input', handleUserNameInput);
    function handleUserNameInput(){
        const userValue = userNameEl.value.trim();
        outputEl.textContent = userValue === '' ? 'Anonymous' : userValue;
    };
    
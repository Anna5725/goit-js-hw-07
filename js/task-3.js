const userNameEl = document.querySelector('.js-name-input');
const outputEl = document.querySelector('.js-name-output');
    userNameEl.addEventListener('input', handleUserNameInput);
    function handleUserNameInput(){
        const userValue = userNameEl.value.trim();
        if(userValue===(' ') ){
            outputEl.textContent = 'Anonymous';
        }else{
            outputEl.textContent = userValue;
        }
    }
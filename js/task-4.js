
const form = document.querySelector('.js-login-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
        userEmail:e.target.elements.email.value.trim(),
        userPassword: e.target.elements.password.value.trim(),
    };
    if (!data.userEmail|| !data.userPassword){
        alert('All form fields must be filled in')
    }
    else{
        console.log(data);
    }
    e.target.reset();
});
const form = document.getElementById('registration-form');
const phoneNumber = document.getElementById('phoneNumber');
const formError = document.getElementsByClassName('form-error');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
});


function validateForm() {

}
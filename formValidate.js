function setError(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('form-error')[0].innerHTML = error;
}

function validateForm() {
    console.log("Validate Form Called");
    var phoneNumber = document.forms['registration-form']["phoneNumber"].value;
    if (phoneNumber.length != 10) {
        setError("phoneNumber", "*Phone Number Should Be Of 10 Digits")
        return false;
    } else {
        return true;
    }
}
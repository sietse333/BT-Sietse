var form = document.getElementById("formID"); // form has to have ID: <form id="formID">
console.log(form);
form.noValidate = true;
form.addEventListener('submit', function (event) { // listen for form submitting
    if (!event.target.checkValidity()) {
        event.preventDefault(); // dismiss the default functionality
        document.getElementById('errorMessageDiv').classList.remove("hidden");
    }
}, false);
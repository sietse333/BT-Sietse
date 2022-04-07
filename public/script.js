var form = document.getElementById("formID"); // form has to have ID: <form id="formID">
form.noValidate = true;
form.addEventListener('submit', function (event) { // listen for form submitting
    if (!event.target.checkValidity()) {
        form.classList.add('validcsscheck')
        event.preventDefault(); // dismiss the default functionality
        document.getElementById('errorMessageDiv').classList.remove("hidden");
    }
}, false);

if (typeof(Storage) !== "undefined") {
    // input to track
    var Naam = document.getElementById("Naam");
    var Studentnummer = document.getElementById("Studentnummer");
    if (sessionStorage.getItem("autosave")) {
        // Restore a content of the input
        Naam.value = sessionStorage.getItem("autosave");
    }
    if (sessionStorage.getItem("autosave2")) {
        // Restore a content of the input
        Studentnummer.value = sessionStorage.getItem("autosave2");
    }
    // Listen for changes in the input field
    Naam.addEventListener("change", function () {
        // save value into sessionStorage object 
        sessionStorage.setItem("autosave", Naam.value);
    });
    Studentnummer.addEventListener("change", function () {
        // save value into sessionStorage object 
        sessionStorage.setItem("autosave2", Studentnummer.value);
    });
} else {
// No web storage Support.
}



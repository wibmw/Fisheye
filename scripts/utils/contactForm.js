    // DOM Elements
    let formContent = document.getElementById("contactForm");       //form content
    const modal = document.getElementById("contact_modal");         //modal
    const modalSubmit = document.querySelector(".submit_button");   //modal submit button
    const firstName = document.getElementById("first");             //firtname input
    const lastName = document.getElementById("last");               //lastname input
    const email = document.getElementById("email");                 //email input
    
    // default messages
    const firstNameMessage = "Le prénom doit comporter au moins 2 caractères alphabétiques !";
    const lastNameMessage = "Le nom doit comporter au moins 2 caractères alphabétiques !";
    const emailMessage = "L'adresse e-mail n'est pas valide !";
    const requiredFieldsMessage =  "Vous devez compléter tous les champs obligatoires !";
    
    // datas validation initialisation
    console.log(firstName)
    console.log(lastName)
    console.log(email)
    firstName.valid = false;
    lastName.valid = false;
    email.valid = false;
    
    // validation modal event
    modalSubmit.addEventListener("click", formValidation);
    
    // launch modal form
    function displayModal() {
    modal.style.display = "block";
    }
    
    // close modal
    function closeModal() {
    modal.style.display = "none";
    }
    
    // check 2 chart min 
    function chart2Min(value) {
    return /^[a-zA-Z]{2,}$/.test(value);
    }
    
    // clear validation message
    function clearValidationMessage(element) {
    element.closest(".formData").setAttribute("data-error-visible", "false");
    element.closest(".formData").setAttribute("data-error", "");
    }
    
    // set validation message
    function setValidationMessage(element, message) {
    element.closest(".formData").setAttribute("data-error-visible", "true");
    element.closest(".formData").setAttribute("data-error", message);
    }
    
    //********************* CHECK FUNCTIONS  ***********************************/
    // check names function
    function namesCheck(name, message){
    if (!(chart2Min(name.value)) || name === '') {
        setValidationMessage(name, message);
        name.valid = false;
    } else {
        clearValidationMessage(name);
        name.valid = true;
    }
    }
    
    // check email function
    function emailCheck(email, message){
    if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/.test(email.value)) || email === '') {
        setValidationMessage(email, message);
        email.valid = false;
    } else {
        clearValidationMessage(email);
        email.valid = true;
    }
    }
    
    //********************* EVENT CHECK MESSAGES  ***********************************/
    //firstname event message
    firstName.addEventListener('keyup', function (event) {
    namesCheck(firstName, firstNameMessage);
    });
    
    //lastname event message
    lastName.addEventListener('keyup', function (event) {
    namesCheck(lastName, lastNameMessage);
    });
    
    //email event message
    email.addEventListener('change', function (event) {
    emailCheck(email, emailMessage);
    });
    
    //********************* FORM VALIDATION  ***********************************/
    function formValidation() {
    
    // check 5 first fields
    namesCheck(firstName, firstNameMessage);
    namesCheck(lastName, lastNameMessage);
    emailCheck(email, emailMessage);

    // check city selection
    if(firstName.valid && lastName.valid && email.valid){
        clearValidationMessage(modalSubmit);

        // display json in logs
        const data = new FormData(formContent);
        const value = Object.fromEntries(data.entries());
        console.log("/*********** Form's Datas ***********/")
        console.log({ value });
        console.log("/**********************************/")
        // if all is ok, display success message 
        formContent.style.display="none";
        modalSuccess.style.display="flex";
        return false;

    }else{
        // display city selection message
        setValidationMessage(modalSubmit, requiredFieldsMessage);
        return false;
    }
    };
    
    //clear field
    function clearField (element) {
    element.valid = false;
    element.value = '';
    }
    
    // form reset
    function clearForm () {
    clearField(firstName);
    clearField(lastName);
    clearField(email);
    formContent.style.display="block";
    formContent.reset();
    modalSuccess.style.display="none";

    closeModal();
    }

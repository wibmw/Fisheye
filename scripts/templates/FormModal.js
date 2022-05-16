class FormModal {
    constructor(photographerName) {
      this._photographerName = photographerName
      this.$wrapperForm = document.createElement("div")
      this.$wrapperForm.setAttribute("class", "modal")
      this._wrapperModal = document.getElementById("contact_modal")  
      // default messages
      this._firstNameMessage = "Le prénom doit comporter au moins 2 caractères alphabétiques !";
      this._lastNameMessage = "Le nom doit comporter au moins 2 caractères alphabétiques !";
      this._emailMessage = "L'adresse e-mail n'est pas valide !";
      this._requiredFieldsMessage =  "Vous devez compléter tous les champs obligatoires !";
    }

    // launchthis.$wrapperModal form
    displayModal(modal) {
        modal.style.display = "block";
    }
        
    // closethis.$wrapperModal
    closeModal(modal) {
       modal.style.display = "none";
    }
        
    // check 2 chart min 
    chart2Min(value) {
        return /^[a-zA-Z]{2,}$/.test(value);
    }
        
    // clear validation message
    clearValidationMessage(element) {
        element.closest(".formData").setAttribute("data-error-visible", "false");
        element.closest(".formData").setAttribute("data-error", "");
    }
        
    // set validation message
    setValidationMessage(element, message) {
        element.closest(".formData").setAttribute("data-error-visible", "true");
        element.closest(".formData").setAttribute("data-error", message);
    }
        
    //********************* CHECK FUNCTIONS  ***********************************/
    // check names function
    namesCheck(name, message){
        if (!(this.chart2Min(name.value)) || name === '') {
            this.setValidationMessage(name, message);
            name.valid = false;
        } else {
            this.clearValidationMessage(name);
            name.valid = true;
        }
        }
        
    // check this.$email function
    emailCheck(email, message){
        if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/.test(email.value)) || email === '') {
            this.setValidationMessage(email, message);
            email.valid = false;
        } else {
            this.clearValidationMessage(email);
            email.valid = true;
        }
    }
        
    
    //********************* FORM VALIDATION  ***********************************/
    formValidation(firstName, lastName, email, modalSubmit, formContent, modalSuccess) {
        // check 3 first fields
        this.namesCheck(firstName,this._firstNameMessage);
        this.namesCheck(lastName,this._lastNameMessage);
        this.emailCheck(email,this._emailMessage);
    
        // check city selection
        if(firstName.valid && lastName.valid && email.valid){
            this.clearValidationMessage(modalSubmit);
    
            // display json in logs
            const data = new FormData(formContent);
            const value = Object.fromEntries(data.entries());
            console.log("/*********** Form's Datas ***********/")
            console.log({ value });
            console.log("/**********************************/")
            // if all is ok, display success message 
            formContent.style.display="none";
            modalSuccess.style.display="flex";
            //return false;
    
        }else{
            // display city selection message
            this.setValidationMessage(modalSubmit, this._requiredFieldsMessage);
            //return false;
        }
    };
        
    //clear field
    clearField (element) {
        element.valid = false;
        element.value = '';
    }
        
    // form reset
    clearForm (firstName, lastName, email, formContent, modalSuccess) {
        this.clearField(firstName);
        this.clearField(lastName);
        this.clearField(email);
        formContent.style.display="block";
        formContent.reset();
        modalSuccess.style.display="none";
    
        this.closeModal(this._wrapperModal);
    }
    
    handleEvents() {
        // $Wrapper
        const form = this.$wrapperForm  
        //Modal
        const modal = document.querySelector("#contact_modal")              
        // Buttons
        const contactButton = document.querySelector(".contact_button");   
        const modalSubmit = form.querySelector(".submit_button");   
        const successButton = form.querySelector(".success_button");
        const closeModal = form.querySelector("#closeModal");       
        // Form & Success
        const formContent = form.querySelector("#contactForm");       
        const modalSuccess = form.querySelector("#modalSuccess");    
        // Fileds
        const firstName = form.querySelector("#first");             
        const lastName = form.querySelector("#last");               
        const email = form.querySelector("#email");                

        firstName.valid = false;
        lastName.valid = false;
        email.valid = false;

        //********************* EVENTS ***********************************/
        modalSubmit.addEventListener("click", () => {
            this.formValidation(firstName, lastName, email, modalSubmit, formContent, modalSuccess)
        })
        successButton.addEventListener("click", () => {
            this.clearForm(firstName, lastName, email, formContent, modalSuccess)
        })
        contactButton.addEventListener("click", () => {
                modal.style.display = "block";
        })

        closeModal.addEventListener('click', () => {
                modal.style.display = "none";
        })
        
        firstName.addEventListener('keyup', () => {
            this.namesCheck(firstName,this._firstNameMessage)
        })
        lastName.addEventListener('keyup', () => {
            this.namesCheck(lastName,this._lastNameMessage)
        })
        email.addEventListener('change', () => {
            this.emailCheck(email,this._emailMessage)
        })
    }

    getFormRender() {
        // DOM Wrapper
        this.$wrapperForm.innerHTML = 
                        `<header> 
                            <h2>Contactez-moi ${this._photographerName}</h2>
                            <img id="closeModal" src="assets/icons/close.svg" alt="Fermer le formulaire de contacte"/>
                        </header>
                        <form  id="contactForm" action="photographer.html" onsubmit="return formValidation();" novalidate>
                            <!-- First Name -->
                            <div class="formData">
                                <label for="first">Prénom</label><br>
                                <input class="text-control" type="text" id="first" name="first"/><br>
                            </div>
                            <!-- Last Name -->
                            <div class="formData">
                                <label for="last">Nom</label><br>
                                <input class="text-control" type="text" id="last" name="last"/><br>
                            </div>
                            <!-- Email -->
                            <div class="formData">
                                <label for="email">E-mail</label><br>
                                <input class="text-control" type="email" id="email" name="email"/><br>
                            </div>
                            <!-- Message -->
                            <div class="formData">
                                <label for="message">Message</label><br>
                                <textarea class="text-control" type="text" id="message" name="message" rows="3" cols="50"></textarea><br>
                            </div>
                            <div class="formData">
                                <input class="contact_button submit_button button" value="Envoyer"></button>
                            </div>
                        </form>
                        <!-- Modal Success Message -->
                        <div id="modalSuccess">
                            <span>Merci pour <br/>votre inscription</span>
                            <input class="contact_button success_button button" value="Fermer" />
                        </div>`

      this.handleEvents()
      this._wrapperModal.appendChild(this.$wrapperForm)
      
    }
}
  
 
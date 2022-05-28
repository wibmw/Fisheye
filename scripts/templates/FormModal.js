import * as ModalAccessibility from '../utils/modalAccessibility.js'

export default class FormModal {
    constructor(photographerName) {
        this.photographerName = photographerName
        this.$wrapperForm = document.createElement('div')
        this.$wrapperForm.setAttribute('class', 'modal')
        this.wrapperModal = document.getElementById('contact_modal')
    }

    //* ******************** DISPLAY MESSAGES  ***********************************/
    // clear validation message
    clearValidationMessage(element) {
        element.closest('.formData').setAttribute('data-error-visible', 'false')
        element.closest('.formData').setAttribute('data-error', '')
    }

    // set validation message
    setValidationMessage(element, message) {
        element.closest('.formData').setAttribute('data-error-visible', 'true')
        element.closest('.formData').setAttribute('data-error', message)
    }

    //* ******************** CHECK FUNCTIONS  ***********************************/
    // check names function
    namesCheck(name) {
        if (!(/^[a-zA-Z]{2,}$/.test((name.value))) || name === '') {
            this.setValidationMessage(name, 'Veuillez saisir des lettres seulement !')
            return false
        }
        this.clearValidationMessage(name)
        return true
    }

    // check email function
    emailCheck(email) {
        if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/.test(email.value)) || email === '') {
            this.setValidationMessage(email, 'Veuillez saisir une adresse e-mail valide !')
            return false
        }
        this.clearValidationMessage(email)
        return true
    }

    //* ******************** FORM VALIDATION  ***********************************/
    formValidation(firstName, lastName, email, modalSubmit, formContent, modalSuccess) {
        // check all fields
        if (this.namesCheck(firstName) && this.namesCheck(lastName) && this.emailCheck(email)) {
            this.clearValidationMessage(modalSubmit)

            // display json in logs
            const data = new FormData(formContent)
            const value = Object.fromEntries(data.entries())
            console.log("/*********** Form's Datas ***********/\n", value, '\n/**********************************/')
            // if all is ok, display success message
            formContent.style.display = 'none'
            modalSuccess.style.display = 'flex'
        } else {
            // display required message
            this.setValidationMessage(modalSubmit, 'Veuillez compléter les champs obligatoires !')
        }
    }

    // form reset
    clearForm(formContent, modalSuccess) {
        formContent.style.display = 'block'
        formContent.reset()
        modalSuccess.style.display = 'none'
        ModalAccessibility.onCloseContactModal(document.querySelector('#contact_modal'))
    }

    // Events handler
    handleEvents() {
        // DOM $Wrapper
        const form = this.$wrapperForm
        // Modal
        const modal = document.querySelector('#contact_modal')
        // Buttons
        const contactButton = document.querySelector('.contact_button')
        const modalSubmit = form.querySelector('.submit_button')
        const successButton = form.querySelector('.success_button')
        const closeModal = form.querySelector('#closeModal')
        // Form & Success
        const formContent = form.querySelector('#contactForm')
        const modalSuccess = form.querySelector('#modalSuccess')
        // Fileds
        const firstName = form.querySelector('#first')
        const lastName = form.querySelector('#last')
        const email = form.querySelector('#email')

        //* ******************** EVENTS ***********************************/
        modalSubmit.addEventListener('click', () => {
            this.formValidation(firstName, lastName, email, modalSubmit, formContent, modalSuccess)
            successButton.focus()
        })
        successButton.addEventListener('click', () => {
            this.clearForm(formContent, modalSuccess, closeModal)
        })
        contactButton.addEventListener('click', () => {
            ModalAccessibility.onOpenContactModal(modal)
            firstName.focus()
        })
        closeModal.addEventListener('click', () => {
            this.clearForm(formContent, modalSuccess, closeModal)
        })
        firstName.addEventListener('change', () => {
            this.namesCheck(firstName)
        })
        lastName.addEventListener('change', () => {
            this.namesCheck(lastName)
        })
        email.addEventListener('change', () => {
            this.emailCheck(email)
        })
        modal.style.display = 'none'
        ModalAccessibility.onEnterClick(modalSubmit)
        ModalAccessibility.onEnterClick(successButton)
        ModalAccessibility.onEnterClick(closeModal)
        ModalAccessibility.onEscapeClick(modal)
        modal.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeModal.click()
                event.preventDefault()
            }
        })
    }

    getFormRender() {
        // DOM Wrapper Generate the form
        this.$wrapperForm.innerHTML = `<header> 
                            <h2>Contactez-moi ${this.photographerName}</h2>
                            <img id="closeModal" role="button" src="assets/icons/close.svg" alt="Fermer le formulaire de contacte" autofocus/>
                        </header>
                        <form  id="contactForm" action="photographer.html" onsubmit="return formValidation();" novalidate>
                            <!-- First Name -->
                            <div class="formData">
                                <label for="first">Prénom</label><br>
                                <input class="text-control" type="text" id="first" name="first" placeholder="Entrer votre prénom" aria-label="Entrer votre prénom"/><br>
                            </div>
                            <!-- Last Name -->
                            <div class="formData">
                                <label for="last">Nom</label><br>
                                <input class="text-control" type="text" id="last" name="last" placeholder="Entrer votre nom" aria-label="Entrer votre nom"/><br>
                            </div>
                            <!-- Email -->
                            <div class="formData">
                                <label for="email">E-mail</label><br>
                                <input class="text-control" type="email" id="email" name="email" placeholder="Entrer votre email" aria-label="Entrer votre email"/><br>
                            </div>
                            <!-- Message -->
                            <div class="formData">
                                <label for="message">Message</label><br>
                                <textarea class="text-control" type="text" id="message" name="message" rows="3" cols="50" placeholder="Entrer votre message" aria-label="Entrer votre message"></textarea><br>
                            </div>
                            <div class="formData">
                                <input type="button" role="button" class="contact_button submit_button button" value="Envoyer" aria-label="Envoyer votre message"></button>
                            </div>
                        </form>
                        <!-- Modal Success Message -->
                        <div id="modalSuccess">
                            <span>Merci pour <br/>votre message</span>
                            <input role="button" class="contact_button success_button button" value="Fermer" aria-label="Fermer le formulaire de contacte" />
                        </div>`

        this.handleEvents()
        this.wrapperModal.appendChild(this.$wrapperForm)
    }
}

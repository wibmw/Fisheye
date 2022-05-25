const body = document.querySelector('body')
const main = document.querySelector('#main')
const contactModal = document.querySelector('.modal')
const contactOpenButton = document.querySelector('.contact_button')
const contactCloseButton = document.querySelector('#closeModal')
const lightboxModal = document.querySelector('.lightbox_modal')
const lightboxCloseButton = document.querySelector('#close')

/** *************** GLOBAL **************************** */
function onModal(target) {
    main.toggleAttribute('aria-hidden')
    body.classList.toggle('no-scroll')
    target.toggleAttribute('aria-hidden')
}
/** *************** CONTACT  **************************** */
export const onOpenContactModal = () => {
    onModal(contactModal)
    contactModal.style.display = 'flex'
    contactCloseButton.focus()
}
//
export const onCloseContactModal = () => {
    onModal(contactModal)
    contactModal.style.display = 'none'
    contactOpenButton.focus()
}
/** *************** LIGHTBOX  **************************** */
export const onOpenLightboxModal = () => {
    console.log(lightboxModal)
    onModal(lightboxModal)
    lightboxModal.style.display = 'block'
    //document.querySelector('.lightbox_modal').style.display = 'block'
    lightboxCloseButton.focus()
}
//
export const onCloseLightboxModal = () => {
    onModal(lightboxModal)
    lightboxModal.style.display = 'none'
    // contactOpenButton.focus()
}
/** *************** KEYBOARD  **************************** */
export const onEnterClick = (target) => {
    target.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.target.click()
            event.preventDefault()
        }
    })
}

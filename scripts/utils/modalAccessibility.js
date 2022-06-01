/** *************** GLOBAL **************************** */
const body = document.querySelector('body')
const main = document.querySelector('#main')

function onModal(target) {
    main.style.display = main.style.display === 'none' ? 'block' : 'none'
    body.classList.toggle('no-scroll')
    target.toggleAttribute('aria-hidden')
    target.style.display = target.style.display === 'none' ? 'block' : 'none'
}
/** *************** CONTACT  **************************** */
const contactModal = document.querySelector('#contact_modal')
// const contactOpenButton = document.querySelector('.contact_button')
// const contactCloseButton = document.querySelector('#closeModal')

export const onOpenContactModal = () => {
    onModal(contactModal)
}
//
export const onCloseContactModal = () => {
    onModal(contactModal)
}
/** *************** LIGHTBOX  **************************** */
const lightboxModal = document.querySelector('.lightbox_modal')
// const lightboxCloseButton = document.querySelector('#close')

export const onOpenLightboxModal = () => {
    onModal(lightboxModal)
}
//
export const onCloseLightboxModal = () => {
    onModal(lightboxModal)
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
export const onEscapeClick = (target) => {
    target.addEventListener('keypress', (event) => {
        if (event.key === 'Escape') {
            event.target.click()
            event.preventDefault()
        }
    })
}
export const onKeyDown = (target) => {
    target.addEventListener('keydown', (event) => {
        if (event.defaultPrevented) {
            return // Ne devrait rien faire si l'événement de la touche était déjà consommé.
        }
        switch (event.key) {
        case 'ArrowLeft':
            // Faire quelque chose pour la touche "left arrow" pressée.
            target.querySelector('.fa-chevron-left').click()
            break
        case 'ArrowRight':
            // Faire quelque chose pour la touche "right arrow" pressée.
            target.querySelector('.fa-chevron-right').click()
            break
        case 'Escape':
            // Faire quelque chose pour la touche "esc" pressée.
            target.querySelector('.fa-times').click()
            break
        default:
            return // Quitter lorsque cela ne gère pas l'événement touche.
        }

        // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
        event.preventDefault()
    }, true)
}

export function trapFocus(modal) {
    // add all the elements inside modal which you want to make focusable
    const focusableElements = Array.from(modal.querySelectorAll('button, i, img, div, input, textarea'))
    // const modal = document.querySelector('#exampleModal'); // select the modal by it's id

    const firstFocusableElement = focusableElements[0]
    const lastFocusableElement = focusableElements[focusableElements.length - 1]
    console.log(firstFocusableElement)
    console.log(lastFocusableElement)
    window.addEventListener('keydown', (e) => {
        const isTabPressed = e.key === 'Tab' || e.code === '9'
        console.log(isTabPressed)
        if (!isTabPressed) {
            return
        }

        if (e.shiftKey) { // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus() // add focus for the last focusable element
                e.preventDefault()
            }
        } else if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus()
            e.preventDefault()
        }
    })

    // firstFocusableElement.focus()
}

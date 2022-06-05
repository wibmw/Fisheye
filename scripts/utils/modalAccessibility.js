import { QS, Tog } from './domUtils.js'

/** *************** GLOBAL **************************** */
const body = document.querySelector('body')
const main = document.querySelector('#main')

function onModal(target) {
    main.style.display = main.style.display === 'none' ? 'block' : 'none'
    Tog('no-scroll', body)
    target.toggleAttribute('aria-hidden')
    target.style.display = target.style.display === 'none' ? 'block' : 'none'
}

export const trapFocus = (modal) => {
    // add all the elements inside modal which you want to make focusable
    const focusableElements = Array.from(modal.querySelectorAll(
        'button[type=submit], i[tabindex="1"], img[id="closeModal"], input, textarea, li[class="active-item"], [tabindex]:not([tabindex="-1"])',
    ))
    // const modal = document.querySelector('#exampleModal'); // select the modal by it's id
    const firstFocusableElement = focusableElements[0]
    const lastFocusableElement = focusableElements[focusableElements.length - 1]

    document.addEventListener('keydown', (e) => {
        const isTabPressed = e.key === 'Tab' || e.code === '9'
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
    firstFocusableElement.focus()
}

/** *************** CONTACT  **************************** */
const contactModal = QS('#contact_modal')

export const onOpenContactModal = () => {
    onModal(contactModal)
    trapFocus(contactModal)
}
//
export const onCloseContactModal = () => {
    onModal(contactModal)
}
/** *************** LIGHTBOX  **************************** */
const lightboxModal = QS('.lightbox_modal')

export const onOpenLightboxModal = () => {
    onModal(lightboxModal)
    trapFocus(lightboxModal)
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
            QS('.fa-chevron-left', target).click()
            break
        case 'ArrowRight':
            // Faire quelque chose pour la touche "right arrow" pressée.
            QS('.fa-chevron-right', target).click()
            break
        case 'Escape':
            // Faire quelque chose pour la touche "esc" pressée.
            QS('.fa-times', target).click()
            break
        default:
            return // Quitter lorsque cela ne gère pas l'événement touche.
        }

        // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
        event.preventDefault()
    }, true)
}

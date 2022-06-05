import * as ModalAccessibility from '../utils/modalAccessibility.js'
import {
    CreaE, QS, QSAll, SetAt, ApC,
} from '../utils/domUtils.js'

export default class Carroussel {
    constructor(photographerName) {
        this.name = photographerName
        this.modalCarroussel = QS('.lightbox_modal')
        this.$wrapperCarroussel = CreaE('div')
    }

    // Get displayed item
    getActualItem() {
        return QS('.active-item') ? QS('.active-item') : QS('.active-item-video')
    }

    // Get actual item position
    getActualPosition() {
        const actualItem = this.getActualItem()
        return parseInt(actualItem.getAttribute('data-name').split('-')[1])
    }

    // Get the lastest position
    getLatestPosition() {
        return parseInt(QSAll('li').length)
    }

    // Display new item
    setActiveItem(item) {
        QS('img', item) ? SetAt('active-item', item) : SetAt('active-item-video', item)
    }

    // Hide last item
    setCarouselItem(item) {
        SetAt('carousel-item', item)
    }

    // Events handler
    carrousselEventsHandler() {
        // DOM $Wrapper
        const carroussel = this.$wrapperCarroussel
        // Buttons
        const leftButton = QS('.fa-chevron-left', carroussel)
        const rightButton = QS('.fa-chevron-right', carroussel)
        const closeButton = QS('.fa-times', carroussel)

        //* ******************** EVENTS ***********************************/
        // Display next item
        rightButton.addEventListener('click', () => {
            const nextPosition = this.getActualPosition() + 1
            const nextItem = QS(`li[data-name="item-${nextPosition}"]`)
                ? QS(`li[data-name="item-${nextPosition}"]`) : QS('li[data-name="item-1"]')

            this.setCarouselItem(this.getActualItem())
            this.setActiveItem(nextItem)
        })
        // Display previous item
        leftButton.addEventListener('click', () => {
            const previousPosition = this.getActualPosition() - 1
            const lastPosition = this.getLatestPosition()
            const previousItem = QS(`li[data-name="item-${previousPosition}"]`)
                ? QS(`li[data-name="item-${previousPosition}"]`) : QS(`li[data-name="item-${lastPosition}"]`)

            this.setCarouselItem(this.getActualItem())
            this.setActiveItem(previousItem)
        })
        // Close the lightbox
        closeButton.addEventListener('click', () => {
            ModalAccessibility.onCloseLightboxModal()
            this.setCarouselItem(this.getActualItem())
        })
        // Accessibility Events handler
        this.modalCarroussel.style.display = 'none'
        ModalAccessibility.onEnterClick(leftButton)
        ModalAccessibility.onEnterClick(rightButton)
        ModalAccessibility.onEnterClick(closeButton)
        ModalAccessibility.onKeyDown(this.modalCarroussel)
    }

    carrousselRender() {
        // Generate the nav elements
        this.$wrapperCarroussel.innerHTML = `<ul class="carousel" tabindex="1"></ul>
            <em class="fas fa-chevron-left" id="previous"  aria-label="Image précédente" tabindex="1"></em> 
            <em class="fas fa-chevron-right"  id="next" aria-label="Image suivante" tabindex="1"></em>
            <em class="fas fa-times" id="close" aria-label="Fermer la lightbox" tabindex="1"></em>`

        this.carrousselEventsHandler()
        ApC(this.$wrapperCarroussel, this.modalCarroussel)
    }
}

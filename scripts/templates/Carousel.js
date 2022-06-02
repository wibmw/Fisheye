import * as ModalAccessibility from '../utils/modalAccessibility.js'

export default class Carroussel {
    constructor(photographerName) {
        this.name = photographerName
        this.modalCarroussel = document.querySelector('.lightbox_modal')
        this.$wrapperCarroussel = document.createElement('div')
    }

    // Get displayed item
    getActualItem() {
        return document.querySelector('.active-item') ? document.querySelector('.active-item') : document.querySelector('.active-item-video')
    }

    // Get actual item position
    getActualPosition() {
        const actualItem = this.getActualItem()
        return parseInt(actualItem.getAttribute('name').split('-')[1])
    }

    // Get the lastest position
    getLatestPosition() {
        return parseInt(document.querySelectorAll('li').length)
    }

    // Display new item
    setActiveItem(item) {
        item.querySelector('img') ? item.setAttribute('class', 'active-item') : item.setAttribute('class', 'active-item-video')
    }

    // Hide last item
    setCarouselItem(item) {
        item.setAttribute('class', 'carousel-item')
    }

    // Events handler
    carrousselEventsHandler() {
        // DOM $Wrapper
        const carroussel = this.$wrapperCarroussel
        // Buttons
        const leftButton = carroussel.querySelector('.fa-chevron-left')
        const rightButton = carroussel.querySelector('.fa-chevron-right')
        const closeButton = carroussel.querySelector('.fa-times')

        //* ******************** EVENTS ***********************************/
        // Display next item
        rightButton.addEventListener('click', () => {
            const nextPosition = this.getActualPosition() + 1
            const nextItem = document.querySelector(`li[name="item-${nextPosition}"]`) ? document.querySelector(`li[name="item-${nextPosition}"]`) : document.querySelector('li[name="item-1"]')

            this.setCarouselItem(this.getActualItem())
            this.setActiveItem(nextItem)
        })
        // Display previous item
        leftButton.addEventListener('click', () => {
            const previousPosition = this.getActualPosition() - 1
            const lastPosition = this.getLatestPosition()
            const previousItem = document.querySelector(`li[name="item-${previousPosition}"]`) ? document.querySelector(`li[name="item-${previousPosition}"]`) : document.querySelector(`li[name="item-${lastPosition}"]`)

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
        this.modalCarroussel.appendChild(this.$wrapperCarroussel)
    }
}

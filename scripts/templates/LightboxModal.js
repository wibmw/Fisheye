export default class Lightbox {
    constructor(media) {
        const {
            id, title, link, type, position,
        } = media
        this.id = id
        this.title = title
        this.mediaType = type
        this.mediaLink = link
        this.position = position

        // Create Carousel Element
        this.$wrapperLightbox = document.createElement('li')
        this.$wrapperLightbox.setAttribute('data-name', `item-${position}`)
        this.$wrapperLightbox.setAttribute('class', 'carousel-item')
        this.modalLightbox = document.querySelector('.carousel')
    }

    lightboxRender() {
        let box = ''
        if (this.mediaType === 'ImageM') {
            box = `<img src="${this.mediaLink}" alt="${this.title}" title="Photo de ${this.title}">`
        } else if (this.mediaType === 'VideoM') {
            box = `<video class="player" controls title="Video de ${this.title}" >
                        <source src="${this.mediaLink}" type="video/mp4" />
                        <span class="sr-only" aria-live="polite">Lire la Video</span>
                    </video>`
        }
        box += `<h3 class="item-title">${this.title}</h3>`

        this.$wrapperLightbox.innerHTML = box
        this.modalLightbox.appendChild(this.$wrapperLightbox)

        // Expose player so it can be used from the console
        const player = new Plyr('video')
        window.player = player
    }
}

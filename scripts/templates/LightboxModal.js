export default class Lightbox {
    constructor(media) {
        const {
            id, title, likes, date, price, mediaLink, mediaType, position,
        } = media
        this.id = id
        this.title = title
        this.likes = likes
        this.date = date
        this.price = price
        this.mediaType = mediaType
        this.mediaLink = mediaLink
        this.position = position

        // Create Carousel Element
        this.$wrapperLightbox = document.createElement('li')
        this.$wrapperLightbox.setAttribute('name', `item-${position}`)
        this.$wrapperLightbox.setAttribute('class', 'carousel-item')
        this.$wrapperLightbox.setAttribute('aria-hidden', 'true')

        this.modalLightbox = document.querySelector('.carousel')
    }

    lightboxRender() {
        let box = ''
        if (this.mediaType === 'ImageM') {
            box = `<img src="${this.mediaLink}" alt="${this.title}">
                        <h3 class="item-title">${this.title}</h3>`
        } else if (this.mediaType === 'VideoM') {
            box = `<video class="player" controls>
                        <source src="${this.mediaLink}" type="video/mp4" />
                        </video>
                        <h3 class="item-title">${this.title}</h3>`

            /* <button class="play-button far fa-play-circle" type="button" title="Lire la Video" aria-disabled="false">
                            <span class="sr-only" aria-live="polite">Lire la Video</span>
                        </button> */
        }

        this.$wrapperLightbox.innerHTML = box
        this.modalLightbox.appendChild(this.$wrapperLightbox)
        const player = new Plyr('video', { captions: { active: true } })

        // Expose player so it can be used from the console
        window.player = player
    }
}

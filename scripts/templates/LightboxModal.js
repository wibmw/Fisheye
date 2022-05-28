export default class Lightbox {
    constructor(media) {
        const {
            id, title, mediaLink, mediaType, position,
        } = media
        this.id = id
        this.title = title
        this.mediaType = mediaType
        this.mediaLink = mediaLink
        this.position = position

        // Create Carousel Element
        this.$wrapperLightbox = document.createElement('li')
        this.$wrapperLightbox.setAttribute('name', `item-${position}`)
        this.$wrapperLightbox.setAttribute('class', 'carousel-item')
        this.modalLightbox = document.querySelector('.carousel')
    }

    lightboxRender() {
        let box = ''
        if (this.mediaType === 'ImageM') {
            box = `<img src="${this.mediaLink}" alt="${this.title}" tabindex="${this.position}" aria-label="Photo de ${this.title}">`
        } else if (this.mediaType === 'VideoM') {
            box = `<video class="player" controls tabindex="${this.position}" aria-label="Video de ${this.title}">>
                        <source src="${this.mediaLink}" type="video/mp4" />
                        <span class="sr-only" aria-live="polite">Lire la Video</span>
                    </video>`
        }
        box += `<h3 class="item-title" tabindex="${this.position}">${this.title}</h3>`

        this.$wrapperLightbox.innerHTML = box
        this.modalLightbox.appendChild(this.$wrapperLightbox)
        // const player = new Plyr('video', { captions: { active: true } })

        // Expose player so it can be used from the console
        // window.player = player
    }
}

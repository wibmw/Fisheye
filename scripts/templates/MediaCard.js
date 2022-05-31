import * as ModalAccessibility from '../utils/modalAccessibility.js'

export default class MediaCard {
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

        this.$wrapperMedia = document.createElement('article')
        this.$wrapperMedia.setAttribute('name', `item-${position}`)
        this.wrapperMedia = document.querySelector('.photograph_media')
    }

    // Events handler
    mediaEventsHandler() {
        // DOM $Wrapper
        const media = this.$wrapperMedia
        const likes = media.querySelector('.likes')
        const icone = likes.closest('i')
        let box

        // Buttons
        if (this.mediaType === 'ImageM') {
            box = media.querySelector('img')
        } else if (this.mediaType === 'VideoM') {
            box = media.querySelector('.playMask')
        }

        //* ******************** EVENTS ***********************************/
        box.addEventListener('click', () => {
            const item = document.querySelector(`li[name="item-${this.position}"]`)
            this.mediaType === 'ImageM' ? item.setAttribute('class', 'active-item') : item.setAttribute('class', 'active-item-video')
            ModalAccessibility.onOpenLightboxModal()
            document.querySelector('#close').focus()
        })
        ModalAccessibility.onEnterClick(box)

        // Likes management
        icone.addEventListener('click', () => {
            const totalLikes = document.querySelector('.totalLikes')
            if (this.likes == likes.textContent) {
                likes.textContent = parseInt(likes.textContent) + 1
                totalLikes.textContent = parseInt(totalLikes.textContent) + 1
                icone.classList.add('active-heart')
            } else {
                likes.textContent = parseInt(likes.textContent) - 1
                totalLikes.textContent = parseInt(totalLikes.textContent) - 1
                icone.classList.remove('active-heart')
            }
        })
        ModalAccessibility.onEnterClick(icone)
    }

    getMediaCardDOM() {
    // Generate the media cards
        let media = ''
        const index = this.position + 4
        if (this.mediaType === 'ImageM') {
            media = `<img src="${this.mediaLink}" alt="${this.title}, closeup view" aria-label="Photo de ${this.title}"  tabindex="${index}"> `
        } else if (this.mediaType === 'VideoM') {
            media = `  <video class="player" aria-hidden="true" tabindex="-1">
                            <source src="${this.mediaLink}" type="video/mp4" />
                        </video>
                    <div class="playMask" aria-label="${this.title}, closeup view" tabindex="${index}">
                        <span class="sr-only" aria-live="polite">Lire la Video</span>
                    </div>`
        }

        media += `<div>
                    <h3>${this.title}</h3>
                    <i class="fas fa-heart" aria-label="likes" tabindex="${index}"><div class="likes" >${this.likes}</div> </i>
                 </div>`

        this.$wrapperMedia.innerHTML = media
        this.mediaEventsHandler()
        this.wrapperMedia.appendChild(this.$wrapperMedia)

        // const player = new Plyr('video', { captions: { active: false } })
        // window.player = player
    }
}

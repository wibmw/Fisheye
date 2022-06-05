import * as ModalAccessibility from '../utils/modalAccessibility.js'
import {
    CreaE, QS, SetAt, ApC,
} from '../utils/domUtils.js'

export default class MediaCard {
    constructor(media) {
        const {
            id, title, likes, date, price, link, type, position,
        } = media
        this.id = id
        this.title = title
        this.likes = likes
        this.date = date
        this.price = price
        this.type = type
        this.link = link
        this.position = position

        this.$wrapperMedia = CreaE('article')
        this.wrapperMedia = QS('.photograph_media')
    }

    // Events handler
    mediaEventsHandler() {
        // DOM $Wrapper
        const media = this.$wrapperMedia
        const likes = QS('.likes', media)
        const icone = likes.closest('div')
        let box

        // Buttons
        if (this.type === 'ImageM') {
            box = QS('img', media)
        } else if (this.type === 'VideoM') {
            box = QS('.playMask', media)
        }

        //* ******************** EVENTS ***********************************/
        box.addEventListener('click', () => {
            const item = QS(`li[data-name="item-${this.position}"]`)
            this.type === 'ImageM' ? SetAt('active-item', item) : SetAt('active-item-video', item)
            ModalAccessibility.onOpenLightboxModal()
            QS('#close').focus()
        })
        ModalAccessibility.onEnterClick(box)

        // Likes management
        icone.addEventListener('click', () => {
            const totalLikes = QS('.totalLikes')
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
        if (this.type === 'ImageM') {
            media = `<img src="${this.link}" alt="${this.title}, closeup view" aria-label="Photo de ${this.title}"  tabindex="${index}"> `
        } else if (this.type === 'VideoM') {
            media = `  <video class="player" aria-hidden="true" tabindex="-1">
                            <source src="${this.link}" type="video/mp4" />
                        </video>
                    <div class="playMask" tabindex="${index}">
                        <span class="sr-only" aria-live="polite">Lire la Video, ${this.title}</span>
                    </div>`
        }

        media += `<div>
                    <h3>${this.title}</h3>
                    <div class="fas fa-heart" tabindex="${index}"><span class="likes" >${this.likes}</span> </div>
                 </div>`

        this.$wrapperMedia.innerHTML = media
        this.mediaEventsHandler()
        ApC(this.$wrapperMedia, this.wrapperMedia)

        const player = new Plyr('video')
        window.player = player
    }
}

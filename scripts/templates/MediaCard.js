export default class MediaCard {
    constructor(media) {
        const { id, title, likes, date, price, mediaLink, mediaType, position } = media
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
        let box

        // Buttons
        if (this.mediaType === 'ImageM') {
            box = media.querySelector('img')
        } else if (this.mediaType === 'VideoM') {
            box = media.querySelector('.playMask')
        }

        //* ******************** EVENTS ***********************************/
        box.addEventListener('click', () => {
            document.querySelector('.lightbox_modal').style.display = 'block'
            const item = document.querySelector(`li[name="item-${this.position}"]`)
            this.mediaType == 'ImageM' ? item.setAttribute('class', 'active-item') : item.setAttribute('class', 'active-item-video')
        })
        // Likes management
        likes.addEventListener('click', () => {
            const totalLikes = document.querySelector('.totalLikes')
            if (this.likes === likes.textContent) {
                likes.textContent = parseInt(likes.textContent) + 1
                totalLikes.textContent = parseInt(totalLikes.textContent) + 1
            } else {
                likes.textContent = parseInt(likes.textContent) - 1
                totalLikes.textContent = parseInt(totalLikes.textContent) - 1
            }
        })
    }

    getMediaCardDOM() {
    // Generate the media cards
        let media = ''

        if (this.mediaType === 'ImageM') {
            media = `<img src="${this.mediaLink}" alt="${this.title}"> `
        } else if (this.mediaType === 'VideoM') {
            media = `<video class="player">
                  <source src="${this.mediaLink}" type="video/mp4" />
              </video>
              <div class="playMask">
              </div>`
        }

        media += `<div>
                <h3>${this.title}</h3>
                <i class="fas fa-heart"><div class="likes">${this.likes}</div> </i>
             </div>`

        this.$wrapperMedia.innerHTML = media

        this.mediaEventsHandler()
        this.wrapperMedia.appendChild(this.$wrapperMedia)
    }
}

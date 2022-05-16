/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable require-jsdoc */
class MediaCard {
  constructor(media, mediaLink, mediaType) {
    const {id, title, likes, date, price} = media
    this._id = id
    this._title = title
    this._likes= likes
    this._date = date
    this._price = price
    this._mediaType= mediaType
    this._mediaLink = mediaLink

    this.$wrapperMedia = document.createElement('div')
  }

  getMediaCardDOM() {
    
    let media = ``

    if (this._mediaType == 'ImageM') {
      media = `<img src="${this._mediaLink}" alt="${this._title}"> `
    } else if (this._mediaType == 'VideoM') {
      media = `<video class="player">
                  <source src="${this._mediaLink}" type="video/mp4" />
              </video>
              <div class="playMask">
                <span class="far fa-play-circle"></span>
              </div>`
    }

    media += `<div>
                <h3>${this._title}</h3>
                <div>${this._likes} <i class="fas fa-heart"></i></div>
             </div>`
    //console.log(media)
    this.$wrapperMedia.innerHTML = media
    //console.log(this.$wrapperMedia)
    return (this.$wrapperMedia)
  }
}

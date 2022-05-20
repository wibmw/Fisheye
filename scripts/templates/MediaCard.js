/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable require-jsdoc */
class MediaCard {
  constructor(media) {
    const {id, title, likes, date, price, mediaLink, mediaType, position} = media
    this._id = id
    this._title = title
    this._likes= likes
    this._date = date
    this._price = price
    this._mediaType= mediaType
    this._mediaLink = mediaLink
    this._position = position

    this.$wrapperMedia = document.createElement('article')
    this.$wrapperMedia.setAttribute("name", `item-${position}`)
    this._wrapperMedia = document.querySelector('.photograph_media')
  }

  // Events handler
  mediaEventsHandler() {
      // DOM $Wrapper
      const media = this.$wrapperMedia   
      let box     
      console.log(this._mediaType)
      // Buttons
      if (this._mediaType == 'ImageM') {
        box = media.querySelector("img")
        //box = box[0]
      } else if (this._mediaType == 'VideoM') {
        box = media.querySelector(".playMask")
      }  
      
      console.log(box)
      //********************* EVENTS ***********************************/
      box.addEventListener("click", () => {
          document.querySelector('.lightbox_modal').style.display = "block";
          const item = document.querySelector(`li[name="item-${this._position}"]`);
          this._mediaType == 'ImageM' ? item.setAttribute("class", "active-item") : item.setAttribute("class", "active-item-video")
      })

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
              </div>`
    }

    media += `<div>
                <h3>${this._title}</h3>
                <div>${this._likes} <i class="fas fa-heart"></i></div>
             </div>`
    
    this.$wrapperMedia.innerHTML = media
    
    this.mediaEventsHandler()
    this._wrapperMedia.appendChild(this.$wrapperMedia)
  }
}

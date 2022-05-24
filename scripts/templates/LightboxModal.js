export class Lightbox {
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

        // Create Carousel Element
        this.$wrapperLightbox = document.createElement("li")
        this.$wrapperLightbox.setAttribute("name", `item-${position}`)
        this.$wrapperLightbox.setAttribute("class", "carousel-item")
        this.$wrapperLightbox.setAttribute("aria-hidden", "true")

        this._modalLightbox = document.querySelector('.carousel')
    }

    lightboxRender() {      
        let box =""
            if (this._mediaType == 'ImageM') {
                box = `<img src="${this._mediaLink}" alt="${this._title}">
                        <h3 class="item-title">${this._title}</h3>`
            } else if (this._mediaType == 'VideoM') {
                box = `<video class="player" controls>
                        <source src="${this._mediaLink}" type="video/mp4" />
                        </video>
                        <h3 class="item-title">${this._title}</h3>`

                        /* <button class="play-button far fa-play-circle" type="button" title="Lire la Video" aria-disabled="false">
                            <span class="sr-only" aria-live="polite">Lire la Video</span>
                        </button>*/
            }  
                
        this.$wrapperLightbox.innerHTML = box
        this._modalLightbox.appendChild(this.$wrapperLightbox)   
        const player = new Plyr('video', {captions: {active: true}});

        // Expose player so it can be used from the console
        window.player = player;
    }
   
}

export class Carroussel {
    constructor(photographerName) {
        this._name = photographerName
        this._modalCarroussel = document.querySelector('.lightbox_modal')
        this.$wrapperCarroussel = document.createElement("div")
    }

    // Get displayed item
    getActualItem() {
        return document.querySelector('.active-item') ? document.querySelector('.active-item') : document.querySelector('.active-item-video')
    }
    // Get actual item position
    getActualPosition() {
        const actualItem = this.getActualItem()
        return parseInt(actualItem.getAttribute("name").split('-')[1])
    }
    // Get the lastest position
    getLatestPosition() {
        return parseInt(document.querySelectorAll('li').length)
    }
    // Display new item
    setActiveItem(item) {
        item.querySelector('img') ? item.setAttribute("class", "active-item") : item.setAttribute("class", "active-item-video")
    }
    // Hide last item
    setCarouselItem(item) {
        item.setAttribute("class", "carousel-item")
    }

    // Events handler
    carrousselEventsHandler() {
        // DOM $Wrapper
        const carroussel = this.$wrapperCarroussel        
        // Buttons
        const leftButton = carroussel.querySelector(".fa-chevron-left");   
        const rightButton = carroussel.querySelector(".fa-chevron-right"); 
        const closeButton = carroussel.querySelector(".fa-times");       
            
        //********************* EVENTS ***********************************/
        // Display next item
        rightButton.addEventListener("click", () => {
            const nextPosition = this.getActualPosition() + 1
            const nextItem = document.querySelector(`li[name="item-${nextPosition}"]`) ? document.querySelector(`li[name="item-${nextPosition}"]`) : document.querySelector(`li[name="item-1"]`)

            this.setCarouselItem(this.getActualItem())
            this.setActiveItem(nextItem)
        })
        // Display previous item
        leftButton.addEventListener("click", () => {
            const previousPosition = this.getActualPosition() - 1
            const lastPosition = this.getLatestPosition()
            const previousItem = document.querySelector(`li[name="item-${previousPosition}"]`) ? document.querySelector(`li[name="item-${previousPosition}"]`) : document.querySelector(`li[name="item-${lastPosition}"]`)

            this.setCarouselItem(this.getActualItem())
            this.setActiveItem(previousItem)
        })
        // Close the lightbox
        closeButton.addEventListener('click', () => {
            document.querySelector('.lightbox_modal').style.display = "none"
            this.setCarouselItem(this.getActualItem())
        })
    }

    carrousselRender() {
        // Generate the nav elements
        this.$wrapperCarroussel.innerHTML = 
            `<ul class="carousel" aria-label="Our selection of Recipes">
            </ul>
            <i class="fas fa-chevron-left" id="previous"  aria-label="image précédente" aria-hidden="true"></i> 
            <i class="fas fa-chevron-right"  id="next" aria-label="image suivante" aria-hidden="true"></i>
            <i class="fas fa-times" id="close" aria-label="fermer la lightbox" aria-hidden="true"></i>`
         
        this.carrousselEventsHandler()
        this._modalCarroussel.appendChild(this.$wrapperCarroussel)           
    }
}
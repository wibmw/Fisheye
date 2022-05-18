class Lightbox {
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

        this.$wrapperLightbox = document.createElement("li")
        this.$wrapperLightbox.setAttribute("name", `item-${position}`)
        this.$wrapperLightbox.setAttribute("class", "carousel-item")
        this.$wrapperLightbox.setAttribute("aria-hidden", "true")

        this._modalLightbox = document.querySelector('.carousel')
    }

    lightboxRender() {      
        this.$wrapperLightbox.innerHTML = 
                `<img src="${this._mediaLink}" alt="${this._title}">
                <h3 class="item-title">${this._title}</h3>`

        this._modalLightbox.appendChild(this.$wrapperLightbox)           
    }
   
}

class Carroussel {
    constructor(photographerName) {
        this._name = photographerName

        this.$wrapperCarroussel = document.createElement("div")
        this._modalCarroussel = document.querySelector('.lightbox_modal')
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
        rightButton.addEventListener("click", (media) => {
            console.log(media)
            //onclick="mediaNav(1)"
        })
        leftButton.addEventListener("click", (media) => {
            console.log(media)
            //onclick="mediaNav(-1)"
        })
        closeButton.addEventListener('click', () => {
            document.querySelector('.lightbox_modal').style.display = "none";
        })

    }

    carrousselRender() {
        this.$wrapperCarroussel.innerHTML = 
            `<ul class="carousel" aria-label="Our selection of Recipes">

            </ul>
            <i class="fas fa-chevron-left" id="precedent"  aria-label="image précédente" aria-hidden="true"></i> 
            <i class="fas fa-chevron-right"  id="suivant" aria-label="image suivante" aria-hidden="true"></i>
            <i class="fas fa-times" id="close" aria-label="fermer la lightbox" aria-hidden="true"></i>`
         
        this.carrousselEventsHandler()
        this._modalCarroussel.appendChild(this.$wrapperCarroussel)           
    }
}
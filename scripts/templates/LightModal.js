class LightboxModal {
    constructor(link) {
        this._link = link

        this.$wrapperLightbox = document.createElement("div")
        this.$wrapperLightbox.setAttribute("class", "lightbox")

        this._modalLightbox = document.querySelector('.lightbox_modal')
    }

    onCloseButton() {
        this.$wrapper
            .querySelector('.close-btn')
            .addEventListener('click', () => {
                this.$modalWrapper.classList.remove('modal-on')
                this.$wrapper.innerHTML = ""
            })
    }

    /*createPlayer() {
        const player = `
            <div class="player">
                <iframe 
                    height="600" 
                    width="800" 
                    src=${this.movie.trailer}
                ></iframe>
                <button class="close-btn">Fermer la fenêtre<button>
            </div>
        `

        this.$wrapper.innerHTML = player

        this.$modalWrapper.classList.add('modal-on')
        this.$modalWrapper.appendChild(this.$wrapper)

        this.onCloseButton()
    }*/

    lightboxRender() {
        
        let lightbox = 
                `   <header>
                        <h2 id="modalTitle" class="modal-title">Modal title</h2>
                    </header>
                    <div>
                    <ul class="carousel" aria-label="Our selection of Recipes">

                        <li class="carousel-item item-0" aria-hidden="false">
                            <div role="button" class="controls controls-left">
                                <span class="img prev-image">
                                    <i aria-hidden="true" class="fa fa-arrow-circle-left"></i>
                                </span>
                                <p class="sr-only">Previous</p>
                            </div>
                            <div role="button" class="controls controls-right">
                                <span class="img next-image">
                                    <i aria-hidden="true" class="fa fa-arrow-circle-right"></i>
                                </span>
                                <p class="sr-only">Next</p>
                            </div>
                            <div class="caroussel-title">
                                <h2>Item 1</h2>
                            </div>
                        </li>

                        <li class="carousel-item item-1" aria-hidden="true">
                            <div role="button" class="controls controls-left">
                                <span class="img prev-image">
                                    <i aria-hidden="true" class="fa fa-arrow-circle-left"></i>
                                </span>
                                <p class="sr-only">Previous</p>
                            </div>
                            <div role="button" class="controls controls-right">
                                <span class="img next-image">
                                    <i aria-hidden="true" class="fa fa-arrow-circle-right"></i>
                                </span>
                                <p class="sr-only">Next</p>
                            </div>
                            <div class="caroussel-title">
                                <h2>Item 2</h2>
                            </div>
                        </li>

                        <li class="carousel-item item-2" aria-hidden="true">
                            <div role="button" class="controls controls-left">
                                <span class="img prev-image">
                                    <i aria-hidden="true" class="fa fa-arrow-circle-left"></i>
                                </span>
                                <p class="sr-only">Previous</p>
                            </div>
                            <div role="button" class="controls controls-right">
                                <span class="img next-image">
                                    <i aria-hidden="true" class="fa fa-arrow-circle-right"></i>
                                </span>
                                <p class="sr-only">Next</p>
                            </div>
                            <div class="caroussel-title">
                                <h2>Item 3</h2>
                            </div>
                        </li>

                    </ul>
                    </div>
                    <button class="modal-close-btn">Close modal</button>`

        this.$wrapperLightbox.innerHTML = lightbox
        //this.handleEvents()
        this._modalLightbox.appendChild(this.$wrapperLightbox)           
    }
   
}
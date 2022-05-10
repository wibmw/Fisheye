class PhotographerPage {

    async displayPhotographerData(photographer) {
        const photographerInfo = document.querySelector(".photograph_info")
        const photographerPicture = document.querySelector(".photograph_picture")

        if (photographer) {
            let photographerModel = photographerFactory(photographer[0], 'photograph_info')
            // Generate Article DOM 
            const userCardDOM = photographerModel.getUserCardDOM()
            photographerInfo.appendChild(userCardDOM)
            // Generate Photographer's picture DOM
            const userCardPicture = photographerModel.getUserCardPicture()
            photographerPicture.appendChild(userCardPicture)
        }
    }

    async init() {
        // Get photographe's ID from the url
        const id = new URLSearchParams(window.location.search).get('id')
        // Get photographes data
        const api = new PhotographerApi('../data/photographers.json', 'photographers')

        // Get photographe's data by ID
        const photographer = await api.getPhotographer(id)
        //console.log(photographer);
        this.displayPhotographerData(photographer)
    }
}


const page = new PhotographerPage()
page.init()

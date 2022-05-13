class PhotographerPage {

    async displayPhotographerData(photographer) {
        if (photographer) {
            // display Photographer's Info DOM 
            photographerFactory(photographer[0], 'photograph_info') 
            // display Photographer's picture DOM
            photographerFactory(photographer[0], 'photograph_picture')
            // display Photographer's price / like DOM
            photographerFactory(photographer[0], 'photograph_price')
        }
    }

    async displayMediaData(medias, photographersName) {
        if (medias) {
            // Generate Medias Card
            medias.forEach((media) => {
                mediaFactory(media, photographersName)
            })
        }
    }

    async init() {
        // Get photographe's ID from the url
        const id = new URLSearchParams(window.location.search).get('id')
        // Get photographes data
        const apiPhotographer = new PhotographerApi('../data/photographers.json', 'photographers')
        // Get photographe's data by ID
        const photographer = await apiPhotographer.getPhotographer(id)
        // Get Media data
        const apiMedia = new MediaApi('../data/photographers.json', 'media')
        const medias = await apiMedia.getMediaOfPhotographer(id)
        
        this.displayPhotographerData(photographer)
        this.displayMediaData(medias, photographer[0]._name)
    }
}


const page = new PhotographerPage()
page.init()

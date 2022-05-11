class PhotographerPage {

    async displayPhotographerData(photographer) {
        if (photographer) {
            // Generate Article DOM 
            photographerFactory(photographer[0], 'photograph_info') 
            // Generate Photographer's picture DOM
            photographerFactory(photographer[0], 'photograph_picture')
        }
    }

    async init() {
        // Get photographe's ID from the url
        const id = new URLSearchParams(window.location.search).get('id')
        // Get photographes data
        const api = new PhotographerApi('../data/photographers.json', 'photographers')
        // Get photographe's data by ID
        const photographer = await api.getPhotographer(id)
        
        this.displayPhotographerData(photographer)
    }
}


const page = new PhotographerPage()
page.init()

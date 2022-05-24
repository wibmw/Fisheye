import { PhotographerApi, MediaApi } from '../api/Api.js'
import { photographerFactory } from '../factories/photographer.js'
import { mediaFactory } from '../factories/media.js'
import { FormModal } from '../templates/FormModal.js'
import { Carroussel } from '../templates/LightboxModal.js'
import { SorterForm } from '../utils/SorterForm.js'

class PhotographerPage {
    
    displayPhotographerData(photographer) {
        if (photographer) {
            // display Photographer's Info DOM 
            photographerFactory(photographer, 'photograph_info') 
            // display Photographer's picture DOM
            photographerFactory(photographer, 'photograph_picture')
            // display Modal Form DOM
            const form = new FormModal(photographer._name)
            form.getFormRender()
        }
    }

    displayMediaData(medias, photographer) {
        let likes = 0
        let position = 1
        const name = photographer._name
        const carroussel = new Carroussel(name)
        carroussel.carrousselRender()

        if (medias) {
            // Generate Medias Card
            medias.forEach((media) => {
                mediaFactory(media, name, position)
                likes += media.likes
                position++
            })
        }

        // display Photographer's price / like DOM
        photographerFactory(photographer, 'photograph_likes', likes)
        new SorterForm(medias, name).render()      
    }

    async init() {
        // Get photographe's ID from the url
        const id = new URLSearchParams(window.location.search).get('id')
        // If not ID, return to homepage
        if(!id){location.href = "index.html"}
        // Get photographes data
        const apiPhotographer = new PhotographerApi('data/photographers.json', 'photographers')
        // Get photographe's data by ID
        const photographer = await apiPhotographer.getPhotographer(id)
        // Get Media data
        const apiMedia = new MediaApi('data/photographers.json', 'media')
        const medias = await apiMedia.getMediaOfPhotographer(id)
        
        this.displayPhotographerData(photographer[0])
        this.displayMediaData(medias, photographer[0])
    }
}

const page = new PhotographerPage()
page.init()


import { PhotographerApi } from '../api/Api.js'
import { photographerFactory } from '../factories/photographer.js'
class IndexPage {

    async displayIndexData(photographers) {
        if(photographers){
            // Generate Photographers Card
            photographers.forEach((photographer) => {
                photographerFactory(photographer, 'photographers_section')
            })
        }
    }

    async init() {
        // Get photographes data
        const api = new PhotographerApi('data/photographers.json', 'photographers')
        const photographers = await api.getPhotographers()
        this.displayIndexData(photographers)
    }
}

const page = new IndexPage()
page.init()
    
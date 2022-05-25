import * as Api from '../api/Api.js'
import photographerFactory from '../factories/photographer.js'

class IndexPage {
    async displayIndexData(photographers) {
        if (photographers) {
            let index = 2
            // Generate Photographers Card
            photographers.forEach((photographer) => {
                photographer.index = index
                photographerFactory(photographer, 'photographers_section')
                index += 1
            })
        }
    }

    async init() {
        // Get photographes data
        const api = new Api.PhotographerApi('data/photographers.json', 'photographers')
        const photographers = await api.getPhotographers()
        this.displayIndexData(photographers)
    }
}

const page = new IndexPage()
page.init()

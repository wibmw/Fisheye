import * as Api from '../api/Api.js'
import PhotographerCard from '../templates/PhotographerCard.js'

class IndexPage {
    async displayIndexData(photographers) {
        if (photographers) {
            let index = 2
            // Generate Photographers Card
            photographers.forEach((photographer) => {
                photographer.index = index
                const card = new PhotographerCard(photographer)
                // display photographer's informations
                document.querySelector('.photographers_section').appendChild(card.getPhotographerCard())
                index += 1
            })
        }
    }

    async init() {
        // Get photographes data
        const photographers = await new Api.PhotographerApi('photographers').getAllPhotographers()
        this.displayIndexData(photographers)
    }
}

const page = new IndexPage()
page.init()

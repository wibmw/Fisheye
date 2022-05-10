class IndexPage {

    async displayIndexData(photographers) {
        const photographersSection = document.querySelector(".photographers_section")
        if(photographers){
            photographers.forEach((photographer) => {
                const photographerModel = photographerFactory(photographer, 'photographers_section')
                const userCardDOM = photographerModel.getUserCardDOM()
                photographersSection.appendChild(userCardDOM)
            })
        }
    }

    async init() {
        // Get photographes data
        const api = new PhotographerApi('../data/photographers.json', 'photographers')
        const photographers = await api.getPhotographers()
        this.displayIndexData(photographers)
    }
}


const page = new IndexPage()
page.init()
    
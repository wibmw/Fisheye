/* eslint-disable max-classes-per-file */
import Photographer from '../models/photographer.js'
import * as Media from '../models/media.js'

class Api {
    constructor(url, type) {
        this.url = url
        this.type = type
        this.cache = []
    }

    async get() {
        // Fetch and return the JSON File
        const cachedResult = this.cache.find((elt) => elt.key === this.type)
        if (cachedResult) {
            return cachedResult
        }

        const response = await fetch(this.url)

        if (response.status == 200) {
            let json = await response.json()
            json = this.type == 'photographers' ? json.photographers : json.media
            const data = {
                key: this.type,
                data: Array.from(json),
            }
            this.cache.push(data)
            return data
        }
        throw new Error(response.status)
    }
}

export class PhotographerApi extends Api {
    // Get only one photographer
    async getPhotographer(id) {
        const getPhotographers = await this.get()
        const photographerData = await getPhotographers.data.filter((photographer) => photographer.id == id)
        const photographer = await photographerData.map((photographer) => new Photographer(photographer))

        return photographer
    }

    // Get all photographers
    async getPhotographers() {
        const getPhotographers = await this.get()
        const photographers = await getPhotographers.data.map((photographer) => new Photographer(photographer))

        return photographers
    }
}

export class MediaApi extends Api {
    // Get all medias
    async getMediaOfPhotographer(id) {
        let getMedia = await this.get()
        getMedia = await getMedia.data.filter((media) => media.photographerId == id)
        const medias = await getMedia.map((media) => (media.image ? new Media.ImageM(media) : new Media.VideoM(media)))

        return medias
    }
}

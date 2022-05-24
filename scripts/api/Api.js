import Photographer from '../models/photographer.js'
import * as Media from '../models/media.js'
class Api {
    constructor(url, type) {
        this._url = url
        this._type = type 
    }

    async get() {
        // Fetch and return the JSON File
        let response = await fetch(this._url)

        if(response.status == 200) {
            let json = await response.json()
            json = this._type == 'photographers' ? json.photographers : json.media
            return json
        }
        throw new Error(response.status)
    }
}

export class PhotographerApi extends Api {
    constructor(url, type) {
        super(url, type)
    }

    // Get only one photographer
    async getPhotographer(id) {
        const photographersData = await this.get()
        const photographerData = await photographersData.filter(photographer => photographer.id == id)
        const photographer = await photographerData.map(photographer => new Photographer(photographer))
        
        return photographer
    }
    
    // Get all photographers
    async getPhotographers() {
        const photographersData = await this.get()
        const photographers = await photographersData.map(photographer => new Photographer(photographer))
        
        return photographers
    }
}


export class MediaApi extends Api {
     constructor(url, type) {
        super(url, type)
    }

    // Get all medias
    async getMediaOfPhotographer(id) {
        let mediaData = await this.get()
        mediaData = await mediaData.filter(media => media.photographerId == id)
        const medias = await mediaData.map(media => media.image ? new Media.ImageM(media) : new Media.VideoM(media))
        
        return medias
    }
}



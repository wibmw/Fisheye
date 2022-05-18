class Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url, type) {
        this._url = url
        this._type = type 
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => this._type == 'photographers' ? res.photographers : res.media)
            .catch(err => console.log('an error occurs', err))
    }
}


class PhotographerApi extends Api {
    /**
     * 
     * @param {string} url 
     * @param {string} type
     */
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


class MediaApi extends Api {
    /**
     * 
     * @param {string} url 
     * @param {string} type
     */
     constructor(url, type) {
        super(url, type)
    }

    // Get all media
    async getMediaOfPhotographer(id) {
        let mediaData = await this.get()
        mediaData = mediaData.filter(media => media.photographerId == id)
        const medias = mediaData.map(media => media.image ? new ImageM(media) : new VideoM(media))
        return medias
    }
}



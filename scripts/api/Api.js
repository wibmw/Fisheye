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
        const photographerData = photographersData.filter(photographer => photographer.id == id)
        const photographer = photographerData.map(photographer => new Photographer(photographer))
        return photographer

    }
    
    // Get all photographers
    async getPhotographers() {
        const photographersData = await this.get()
        const photographers = photographersData.map(photographer => new Photographer(photographer))
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
    async getMedia() {
        const MediaData = await this.get()
        const medias = MediaData.map(media => new Media(media))
        return medias
    }
}



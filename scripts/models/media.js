class Media{
    constructor(data) {
        this._id = data.id
        this._photographerId = data.photographerId
        this._title = data.title
        this._likes= data.likes
        this._date = data.date
        this._price = data.price
    }

    get id() { 
        return this._id 
    }

    get photographerId() { 
        return this._photographerId
    }

    get title() {
        return this._title
    }

    get likes() { 
        return this._likes
    }

    get date() {
        return this._date
    }

    get price() { 
        return this._price
    }

    photographerFolder(name) {
        let folder
        if(name){
            folder = name.split(' ')[0]
            if(folder.includes('-')){
                folder = folder.replace('-', '')
            }
            return folder
        } 
    }

    getSource(photographerName, media) {
        if(photographerName) {
            const folder = this.photographerFolder(photographerName)
            return `assets/media/${folder}/${media}`
        }
    }
}


class ImageM extends Media{
    constructor(data) {
        super(data)
        this._image = data.image
    }

    getImage(photographerName) {
        return this.getSource(photographerName, this._image)
    }
}

class VideoM extends Media{
    constructor(data) {
        super(data)
        this._video = data.video
    }
    
    getVideo(photographerName) {
        return this.getSource(photographerName, this._video)
    }
}
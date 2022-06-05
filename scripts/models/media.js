// eslint-disable-next-line max-classes-per-file
class Media {
    constructor(data) {
        const {
            id, photographerId, title, likes, date, price,
        } = data

        this._id = id
        this._photographerId = photographerId
        this._title = title
        this._likes = likes
        this._date = date
        this._price = price
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
        if (name) {
            let folder = name.split(' ')[0]
            if (folder.includes('-')) {
                folder = folder.replace('-', '')
            }
            return folder
        }
        return false
    }

    getSource(photographerName, media) {
        if (photographerName) {
            const folder = this.photographerFolder(photographerName)
            return `assets/media/${folder}/${media}`
        }
        return false
    }
}

// Image Media
export class ImageM extends Media {
    constructor(data) {
        super(data)
        this._image = data.image
    }

    // get image link
    getImage(photographerName) {
        return this.getSource(photographerName, this._image)
    }
}

// Video Media
export class VideoM extends Media {
    constructor(data) {
        super(data)
        this._video = data.video
    }

    // get video link
    getVideo(photographerName) {
        return this.getSource(photographerName, this._video)
    }
}

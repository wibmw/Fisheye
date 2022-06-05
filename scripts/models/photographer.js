export default class Photographer {
    constructor(data) {
        const {
            name, id, city, country, tagline, price, portrait,
        } = data
        this._name = name
        this._id = id
        this._city = city
        this._country = country
        this._tagline = tagline
        this._price = price
        this._portrait = portrait
    }

    get name() {
        return this._name
    }

    get id() {
        return this._id
    }

    get location() {
        return `${this._city}, ${this._country}`
    }

    get tagline() {
        return this._tagline
    }

    get price() {
        return this._price
    }

    get picture() {
        return `assets/PhotographersID/${this._portrait}`
    }
}

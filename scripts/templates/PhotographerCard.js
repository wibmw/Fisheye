class PhotographerCard {
    constructor(photographer) {
        const { name, id, picture, location, tagline, price } = photographer
        this._name = name
        this._id = id
        this._picture = picture
        this._location = location
        this._tagline = tagline
        this._price = price

        this.$wrapperInfo = document.createElement('article')
        this.$wrapperPicture = document.createElement('div')
    }

    getPhotographerPicture() {
        // return the photographer picture only
        const img = `<img src="${this._picture}" alt="Photo du photographe ${this._name}"> `
        this.$wrapperPicture.innerHTML = img

        return this.$wrapperPicture
    }

    getPhotographerInfo() {
        // return photographer info
        const article = `<h2>${this._name}</h2>
                    <h3 tabindex="3">${this._location}</h3>
                    <div>${this._tagline}</div>`
                    
        this.$wrapperInfo.innerHTML = article

        return (this.$wrapperInfo)
    }

    getPhotographerCard() {
        // return photographer Card
        const article = `<a href="photographer.html?id=${this._id}" "aria-label="Aller à la page du photographe ${this._name}" "tabindex="2">
                            <img src="${this._picture}" alt="Photo du photographe ${this._name}">
                            <h2>${this._name}</h2>
                        </a>
                        <h3 tabindex="3">${this._location}</h3>
                        <div>${this._tagline}</div>
                        <span>${this._price}€/jour</span>`
                    
        this.$wrapperInfo.innerHTML = article

        return (this.$wrapperInfo)
    }


}

export class PhotographerCard {
    constructor(photographer) {
        const { name, id, picture, location, tagline, price } = photographer
        this._name = name
        this._id = id
        this._picture = picture
        this._location = location
        this._tagline = tagline
        this._price = price

        this.$wrapperArticle = document.createElement('article')
        this.$wrapperDiv = document.createElement('div')
    }

    getPhotographerPicture() {
        // return the photographer picture only
        const img = `<img src="${this._picture}" alt="Photo du photographe ${this._name}"> `
        this.$wrapperDiv.innerHTML = img

        return this.$wrapperDiv
    }

    getPhotographerInfo() {
        // return photographer info
        const article = `<h2>${this._name}</h2>
                    <h3 tabindex="3">${this._location}</h3>
                    <div>${this._tagline}</div>`
                    
        this.$wrapperArticle.innerHTML = article

        return (this.$wrapperArticle)
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
                    
        this.$wrapperArticle.innerHTML = article

        return (this.$wrapperArticle)
    }

    getPhotographerLikes(likes) {
        // return photographer info
        const like = `<i class="fas fa-heart"><span class="totalLikes"> ${likes} </span></i>
                        <span>${this._price} € / jour</span>`
                    
        this.$wrapperDiv.innerHTML = like

        return this.$wrapperDiv
    }
}

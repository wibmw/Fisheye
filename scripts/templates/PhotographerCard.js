export default class PhotographerCard {
    constructor(photographer) {
        const { name, id, picture, location, tagline, price } = photographer
        this.name = name
        this.id = id
        this.picture = picture
        this.location = location
        this.tagline = tagline
        this.price = price

        this.$wrapperArticle = document.createElement('article')
        this.$wrapperDiv = document.createElement('div')
    }

    getPhotographerPicture() {
        // return the photographer picture only
        const img = `<img src="${this.picture}" alt="Photo du photographe ${this.name}"> `
        this.$wrapperDiv.innerHTML = img

        return this.$wrapperDiv
    }

    getPhotographerInfo() {
        // return photographer info
        const article = `<h2>${this.name}</h2>
                    <h3 tabindex="3">${this.location}</h3>
                    <div>${this.tagline}</div>`
        this.$wrapperArticle.innerHTML = article

        return (this.$wrapperArticle)
    }

    getPhotographerCard() {
        // return photographer Card
        const article = `<a href="photographer.html?id=${this.id}" "aria-label="Aller à la page du photographe ${this.name}" "tabindex="2">
                            <img src="${this.picture}" alt="Photo du photographe ${this.name}">
                            <h2>${this.name}</h2>
                        </a>
                        <h3 tabindex="3">${this.location}</h3>
                        <div>${this.tagline}</div>
                        <span>${this.price}€/jour</span>`
        this.$wrapperArticle.innerHTML = article

        return (this.$wrapperArticle)
    }

    getPhotographerLikes(likes) {
        // return photographer info
        const like = `<i class="fas fa-heart"><span class="totalLikes"> ${likes} </span></i>
                        <span>${this.price} € / jour</span>`
        this.$wrapperDiv.innerHTML = like

        return this.$wrapperDiv
    }
}

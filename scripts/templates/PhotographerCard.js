export default class PhotographerCard {
    constructor(photographer) {
        const { name, id, picture, location, tagline, price, index } = photographer
        this.name = name
        this.id = id
        this.picture = picture
        this.location = location
        this.tagline = tagline
        this.price = price
        this.index = index

        this.$wrapperArticle = document.createElement('article')
        this.$wrapperDiv = document.createElement('div')
    }

    getPhotographerPicture() {
        // return the photographer picture only
        const img = `<img src="${this.picture}" tabindex="5" alt="Photo du photographe ${this.name}"> `
        this.$wrapperDiv.innerHTML = img

        return this.$wrapperDiv
    }

    getPhotographerInfo() {
        // return photographer info
        const article = `<h2 tabindex="2">${this.name}</h2>
                    <div tabindex="3"><h3>${this.location}</h3>
                    <div>${this.tagline}</div><div>`
        this.$wrapperArticle.innerHTML = article

        return (this.$wrapperArticle)
    }

    getPhotographerCard() {
        // return photographer Card
        const article = `<a href="photographer.html?id=${this.id}" aria-label="Aller à la page du photographe ${this.name}" tabindex="${this.index}">
                            <img src="${this.picture}" alt="Photo du photographe ${this.name}">
                            <h2>${this.name}</h2>
                        </a>
                        <div tabindex="${this.index}">
                        <h3 >${this.location}</h3>
                        <div>${this.tagline}</div>
                        <span>${this.price}€/jour</span><div>`
        this.$wrapperArticle.innerHTML = article

        return (this.$wrapperArticle)
    }

    getPhotographerLikes(likes) {
        // return photographer info
        const like = `<i class="fas fa-heart" ><span class="totalLikes" aria-label="likes"> ${likes} </span></i>
                        <span aria-label="tarif">${this.price} € / jour</span>`
        this.$wrapperDiv.innerHTML = like

        return this.$wrapperDiv
    }
}

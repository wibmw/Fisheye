export default class PhotographerCard {
    constructor(photographer) {
        const {
            name, id, picture, location, tagline, price, index,
        } = photographer

        this.name = name
        this.id = id
        this.picture = picture
        this.location = location
        this.tagline = tagline
        this.price = price
        this.index = index

        this.$wrapperArticle = document.createElement('article')
        this.$wrapperPic = document.createElement('div')
        this.$wrapperLikes = document.createElement('div')
    }

    getPhotographerPicture() {
        // return the photographer picture only
        const img = `<img src="${this.picture}" alt="Photo du photographe ${this.name}" aria-label="Photo du photographe ${this.name}"> `
        this.$wrapperPic.innerHTML = img

        return this.$wrapperPic
    }

    getPhotographerInfo() {
        // return photographer info
        const article = `<h2>${this.name}</h2>
                        <div><h3>${this.location}</h3>
                        <div>${this.tagline}</div><div>`
        this.$wrapperArticle.innerHTML = article

        return (this.$wrapperArticle)
    }

    getPhotographerCard() {
        // return photographer Card
        const article = `<a href="photographer.html?id=${this.id}" title="Aller à la page du photographe ${this.name}" aria-label="${this.name}">
                            <img src="${this.picture}" alt="Aller à la page du photographe ${this.name}">
                            <h2>${this.name}</h2>
                        </a>
                        <div>
                        <h3 >${this.location}</h3>
                        <div>${this.tagline}</div>
                        <span>${this.price}€/jour</span><div>`
        this.$wrapperArticle.innerHTML = article

        return (this.$wrapperArticle)
    }

    getPhotographerLikes(likes) {
        // return photographer info
        const like = `<em class="fas fa-heart" ><span class="totalLikes" aria-label="likes"> ${likes} </span></em>
                        <span aria-label="tarif">${this.price} € / jour</span>`
        this.$wrapperLikes.innerHTML = like

        return this.$wrapperLikes
    }
}

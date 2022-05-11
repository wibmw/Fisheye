class MediaCard {
    constructor(media, type) {
        const { name, id, picture, location, tagline, price } = media
        this._name = name
        this._id = id
        this._picture = picture
        this._location = location
        this._tagline = tagline
        this._price = price
        this._page = page

        this.$wrapperInfo = document.createElement('article')
        this.$wrapperPicture = document.createElement('div')
    }

    getUserCardDOM() {
        
        if(this._page == 'photograph_picture'){
            // return the photographer picture only
            const img = `<img src="${this._picture}" alt="Photo du photographe ${this._name}"> `
            this.$wrapperPicture.innerHTML = img
            return this.$wrapperPicture
        }

        let article = ``

        if(this._page == 'photographers_section'){
            // return everything
            article += `<a href="photographer.html?id=${this._id}" "aria-label="Aller à la page du photographe ${this._name}" "tabindex="2">
                            <img src="${this._picture}" alt="Photo du photographe ${this._name}">
                            <h2>${this._name}</h2>
                        </a>`

        }else if(this._page == 'photograph_info'){
            // return everything but the photographer picture
            article += `<h2>${this._name}</h2>`
        }

        article += `<h3 tabindex="3">${this._location}</h3>
                    <div>${this._tagline}</div>
                    <span>${this._price}€/jour</span>`
                    
        this.$wrapperInfo.innerHTML = article

        return (this.$wrapperInfo)
    }


}

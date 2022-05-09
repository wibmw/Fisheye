function photographerFactory(data, page) {
    console.log(data)
    const { name, id, portrait, city, country, tagline, price } = data

    const picture = `assets/photographersID/${portrait}`

    function getUserCardPicture() {
        const img = document.createElement( 'img' )
        img.setAttribute("src", picture)
        img.setAttribute("alt", `Photo du photographe ${name}`)
        return img
    }

    function getUserCardDOM() {
        
        if(page == 'photograph_picture'){
            // return the photographer picture only
            return (getUserCardPicture())
        }

        const article = document.createElement( 'article' )
        const a = document.createElement( 'a' )
        const h2 = document.createElement( 'h2' )
        const h3 = document.createElement( 'h3' )
        const div = document.createElement( 'div' )
        const span = document.createElement( 'span' )

        h2.textContent = name;

        if(page == 'photographers_section'){
            // return everything
            const img = getUserCardPicture()
            a.setAttribute("href", `photographer.html?id=${id}`)
            a.setAttribute("aria-label", `Aller à la page du photographe ${name}`)
            a.setAttribute("tabindex", 2)
            
            a.appendChild(img)
            a.appendChild(h2)
            article.appendChild(a)
        }else if(page == 'photograph_info'){
            // return everything but the photographer picture
            article.appendChild(h2)
        }

        h3.textContent = city + ", " + country
        h3.setAttribute("tabindex", 3)
        div.textContent = tagline
        span.textContent = `${price}€/jour`

        article.appendChild(h3)
        article.appendChild(div)
        article.appendChild(span)

        return (article)
    }
    return { name, picture, getUserCardDOM }
}
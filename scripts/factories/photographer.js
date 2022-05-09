function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographersID/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const div = document.createElement( 'div' );
        const span = document.createElement( 'span' );
        h2.textContent = name;
        h3.textContent = city + ", " + country;
        div.textContent = tagline;
        span.textContent = `${price}€/jour`;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(div);
        article.appendChild(span);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}
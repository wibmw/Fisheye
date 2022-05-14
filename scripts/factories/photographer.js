function photographerFactory(data, page, likes) {
    const card = new PhotographerCard(data)
    
    if(page == 'photograph_picture') {
        document.querySelector(".photograph_picture").appendChild(card.getPhotographerPicture())
    } else if (page == 'photograph_info') {
        document.querySelector(".photograph_info").appendChild(card.getPhotographerInfo())
    } else if (page == 'photographers_section') {
        document.querySelector(".photographers_section").appendChild(card.getPhotographerCard())
    } else if (page == 'photograph_likes') {
        document.querySelector(".photograph_likes").appendChild(card.getPhotographerLikes(likes))
    } else {
        console.log("Erreur PhotographerFactory")
    }
}
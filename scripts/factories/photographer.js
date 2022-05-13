function photographerFactory(data, page) {
    const card = new PhotographerCard(data)
    
    if(page == 'photograph_picture') {
        document.querySelector(".photograph_picture").appendChild(card.getPhotographerPicture())
    } else if (page == 'photograph_info') {
        document.querySelector(".photograph_info").appendChild(card.getPhotographerInfo())
    } else if (page == 'photographers_section') {
        document.querySelector(".photographers_section").appendChild(card.getPhotographerCard())
    } else if (page == 'photograph_price') {
        document.querySelector(".photograph_price").appendChild(card.getPhotographerCard())
    } else {
        console.log("Erreur PhotographerFactory")
    }
}
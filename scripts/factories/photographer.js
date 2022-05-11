function photographerFactory(data, page) {

    const card = new PhotographerCard(data, page).getUserCardDOM()

    if(page == 'photograph_picture') {
        document.querySelector(".photograph_picture").appendChild(card)
    } else if (page == 'photograph_info') {
        document.querySelector(".photograph_info").appendChild(card)
    } else if (page == 'photographers_section') {
        document.querySelector(".photographers_section").appendChild(card)
    }
    else {
        console.log("Erreur PhotographerFactory")
    }

}
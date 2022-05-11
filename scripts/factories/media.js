function MediaFactory(data, type) {

    const card = new MediaCard(data, type).geMediaCard()

    if(page == 'photograph_picture') {
        document.querySelector(".photograph_picture").appendChild(card)
    } else if (page == 'photograph_info') {
        document.querySelector(".photograph_info").appendChild(card)
    } else {
        console.log("Erreur MediaFactory")
    }

}
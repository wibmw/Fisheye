function mediaFactory(media, photographersName) {

    mediaType = media.constructor.name
    mediaSection = document.querySelector('.photograph_media')
    let mediaLink = ""

    if(mediaType == 'ImageM') {
        mediaLink = media.getImage(photographersName)
    } else if (mediaType == 'VideoM') {
        mediaLink = media.getVideo(photographersName)
    } else {
        console.log("Erreur MediaFactory")
    }

    const card = new MediaCard(media, mediaLink, mediaType).getMediaCardDOM()
    mediaSection.appendChild(card)

    
}


function mediaFactory(media, photographersName, position) {

    mediaType = media.constructor.name
    let mediaLink = ""

    if(mediaType == 'ImageM') {
        mediaLink = media.getImage(photographersName)
    } else if (mediaType == 'VideoM') {
        mediaLink = media.getVideo(photographersName)
    } else {
        console.log("Erreur MediaFactory")
    }

    media.mediaLink = mediaLink
    media.mediaType = mediaType
    media.position = position

    new Lightbox(media).lightboxRender()
    new MediaCard(media).getMediaCardDOM()
    
    
}


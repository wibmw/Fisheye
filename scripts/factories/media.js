import Lightbox from '../templates/LightboxModal.js'
import MediaCard from '../templates/MediaCard.js'

// ************* MEDIA FACTORY ****************************//
export default function mediaFactory(media, photographersName, position) {
    const mediaType = media.constructor.name
    let mediaLink = ''
    // check Img or Video type
    if (mediaType === 'ImageM') {
        mediaLink = media.getImage(photographersName)
    } else if (mediaType === 'VideoM') {
        mediaLink = media.getVideo(photographersName)
    } else {
        console.log('Erreur MediaFactory')
    }

    // We add necessary datas to the medias
    media.mediaLink = mediaLink
    media.mediaType = mediaType
    media.position = position

    new Lightbox(media).lightboxRender()
    new MediaCard(media).getMediaCardDOM()
}

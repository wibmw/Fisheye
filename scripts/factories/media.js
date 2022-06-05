import * as Media from '../models/media.js'

// ************* MEDIA FACTORY ****************************//
export default function mediaFactory(media) {
    if (media) {
        // check Img or Video type
        const med = media.image ? new Media.ImageM(media) : new Media.VideoM(media)
        med.type = media.image ? 'ImageM' : 'VideoM'
        return med
    }
    // On error
    throw new Error('No media')
}

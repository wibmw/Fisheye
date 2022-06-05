import Photographer from '../models/photographer.js'

// ************* PHOTOGRAPHER FACTORY ****************************//
export default function photographerFactory(result, id) {
    // Select type of protographer information needed
    switch (result.type) {
    case 'photographer': {
        // Get photographe's data by ID
        const photographerData = result.data.filter((photographer) => photographer.id == id)
        return new Photographer(photographerData[0])
    }
    case 'photographers': {
        // Get photographes data
        return result.data.map((photographer) => new Photographer(photographer))
    }
    default:
        throw new Error('No type')
    }
}

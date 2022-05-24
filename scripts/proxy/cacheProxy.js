import sorterApi from '../factories/sorter.js'

export default class ProxyRatingSorter {
    constructor() {
        this.cache = []
    }

    async sorter(medias, sorter) {
        // We check if there is datas in cache
        const cachedResult = this.cache.find((elt) => elt.key === sorter)
        if (cachedResult) {
            return cachedResult
        }
        // if not, sort new datas and push it in cache
        const data = await sorterApi.sorter(medias, sorter)
        this.cache.push(data)

        return data
    }
}

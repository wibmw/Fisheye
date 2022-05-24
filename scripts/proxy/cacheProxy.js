export class ProxyRatingSorter {
    constructor() {
        this.cache = []
    }

    async sorter(medias, sorter) {
        // We check if there is datas in cache
        const cachedResult = this.cache.find(elt => elt.key === sorter)
        if (cachedResult) {
            return cachedResult
        }
        // if not, sort new datas and push it in cache
        const data = await RatingSorterApi.sorter(medias, sorter)
        this.cache.push(data)

        return data
    }
}

class RatingSorterApi {
    static async sorter(data, orderBy) {
        // Most Popular Sort section
        if (orderBy === 'POP') {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = {
                        key: orderBy,
                        data: Array.from(data).sort((a, b) => b._likes - a._likes)
                    }
                    resolve(result)
                }, 1000)
            })
        // Date Sort section
        } else if (orderBy === 'DATE') {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = {
                        key: orderBy,
                        data: Array.from(data).sort((a, b) => {
                            if (a._date > b._date) {
                                return -1;
                            }
                            if (b._date > a._date) {
                                return 1;
                            }
                            return 0;
                        })
                    }
                    resolve(result)
                }, 1000)
            })
        // Title Sort section
        } else if (orderBy === 'TITRE') {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = {
                        key: orderBy,
                        data: Array.from(data).sort((a, b) => {
                            if (a._title > b._title) {
                                return 1;
                            }
                            if (b._title > a._title) {
                                return -1;
                            }
                            return 0;
                        })
                    }
                    resolve(result)
                }, 1000)
            })
        } else {
            throw 'unknow orderBy type'
        }
    }
}

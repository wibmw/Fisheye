class ProxyRatingSorter {
    constructor() {
        this.cache = []
    }

    async sorter(medias, sorter) {
        const cachedResult = this.cache.find(elt => elt.key === sorter)
        if (cachedResult) {
            return cachedResult
        }

        const data = await RatingSorterApi.sorter(medias, sorter)

        this.cache.push(data)
        return data
    }

    /*async sorter(movies, orderBy) {
        const cachedResult = this.cache.find(elt => elt.key === orderBy)
        if (cachedResult) {
            console.log('get from cache')

            return cachedResult
        }

        const data = await RatingSorterApi.sorter(movies, orderBy)

        this.cache.push(data)
        return data
    }*/
}

class RatingSorterApi {
    static async sorter(data, orderBy) {
        if (orderBy === 'POP') {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = {
                        key: orderBy,
                        data: Array.from(data).sort((a, b) => b._likes - a._likes)
                    }
                    //console.log(result)
                    resolve(result)

                }, 1000)
            })
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
                    //console.log(result)
                    resolve(result)
                }, 1000)
            })
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
                    //console.log(result)
                    resolve(result)
                }, 1000)
            })
        } else {
            throw 'unknow orderBy type'
        }
    }
}

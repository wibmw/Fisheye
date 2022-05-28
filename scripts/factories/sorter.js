export default class sorterApi {
    static async sorter(data, orderBy) {
        const error = 'unknow orderBy type'
        // Most Popular Sort section
        if (orderBy === 'POP') {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = {
                        key: orderBy,
                        data: Array.from(data).sort((a, b) => b.likes - a.likes),
                    }
                    resolve(result)
                })
            })
        // Date Sort section
        } if (orderBy === 'DATE') {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = {
                        key: orderBy,
                        data: Array.from(data).sort((a, b) => {
                            if (a.date > b.date) {
                                return -1
                            }
                            if (b.date > a.date) {
                                return 1
                            }
                            return 0
                        }),
                    }
                    resolve(result)
                })
            })
        // Title Sort section
        } if (orderBy === 'TITRE') {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = {
                        key: orderBy,
                        data: Array.from(data).sort((a, b) => {
                            if (a.title > b.title) {
                                return 1
                            }
                            if (b.title > a.title) {
                                return -1
                            }
                            return 0
                        }),
                    }
                    resolve(result)
                })
            })
        }
        throw error
    }
}

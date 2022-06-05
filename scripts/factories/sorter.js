export default class sorterApi {
    static async sorter(data, orderBy) {
        const error = 'unknow orderBy type'
        return new Promise((resolve) => {
            setTimeout(() => {
                const result = {
                    key: orderBy,
                    data: Array.from(data).sort((a, b) => {
                        switch (orderBy) {
                        case 'POP': { // Most Popular Sort section
                            return b.likes - a.likes
                        }
                        case 'DATE': { // Date Sort section
                            if (a.date > b.date) {
                                return -1
                            }
                            if (b.date > a.date) {
                                return 1
                            }
                            return 0
                        }
                        case 'TITRE': { // Title Sort section
                            if (a.title > b.title) {
                                return 1
                            }
                            if (b.title > a.title) {
                                return -1
                            }
                            return 0
                        }
                        default:
                            throw error
                        }
                    }),
                }
                resolve(result)
            }, 0)
        })
    }
}

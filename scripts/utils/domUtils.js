/** *************** DOM querySelector **************************** */
export function QS(selector, parent = document) {
    return parent.querySelector(selector)
}
/** *************** DOM querySelectorAll **************************** */
export function QSAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)]
}
/** *************** DOM getElementById **************************** */
export function EById(selector, parent = document) {
    return parent.getElementById(selector)
}
/** *************** DOM appendChild **************************** */
export function ApC(dom, parent = document) {
    parent.appendChild(dom)
}
/** *************** DOM setAttribute **************************** */
export function SetAt(className, parent = document) {
    parent.setAttribute('class', className)
}
/** *************** DOM classList.toggle **************************** */
export function Tog(className, parent = document) {
    parent.classList.toggle(className)
}
/** *************** DOM createElement **************************** */
export function CreaE(type, options = {}) {
    const element = document.createElement(type)
    Object.entries(options).forEach(([key, value]) => {
        if (key === 'class') {
            element.classList.add(value)
            return
        }

        if (key === 'dataset') {
            Object.entries(value).forEach(([dataKey, dataValue]) => {
                element.dataset[dataKey] = dataValue
            })
            return
        }

        if (key === 'text') {
            element.textContent = value
            return
        }

        element.setAttribute(key, value)
    })
    return element
}

export function memoize(cb) {
    const cache = new Map()
    return (...args) => {
        const key = JSON.stringify(args)
        if (cache.has(key)) return cache.get(key)

        const result = cb(...args)
        cache.set(key, result)
        return result
    }
}

/** *************** SORT  **************************** */

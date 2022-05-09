async function getPhotographer(id) {
    const dataUrl = '../data/photographers.json'
    return fetch(dataUrl)
    .then(res => res.json())
    .then(res => res.photographers.filter(photographer => photographer.id == id))
    .catch(err => {
        console.log('an error occurs', err)
    })
}

async function getPhotographersMedia() {
    const dataUrl = '../data/photographers.json'
    return fetch(dataUrl)
    .then(res => res.json())
    .then(res => res.photographers)
    .catch(err => {
        //this.State.change('error')
        console.log('an error occurs', err)
    })
}

async function displayPhotographerData(photographer) {
    const photographerInfo = document.querySelector(".photograph_info")
    const photographerPicture = document.querySelector(".photograph_picture")

    if (photographer) {
        let photographerModel = photographerFactory(photographer[0], 'photograph_info')
        const userCardDOM = photographerModel.getUserCardDOM()
        photographerInfo.appendChild(userCardDOM)

        photographerModel = photographerFactory(photographer[0], 'photograph_picture')
        const userCardPicture = photographerModel.getUserCardDOM()
        photographerPicture.appendChild(userCardPicture)
    }
}

async function init() {
    const id = new URLSearchParams(window.location.search).get('id')

    // Récupère les datas du photographe
    const photographer = await getPhotographer(id)
    //console.log(photographer);
    displayPhotographerData(photographer)
}

init()
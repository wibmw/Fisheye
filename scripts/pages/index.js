    async function getPhotographers() {
            const dataUrl = '../data/photographers.json';
            return fetch(dataUrl)
            .then(res => res.json())
            .then(res => res.photographers)
            .catch(err => {
                //this.State.change('error')
                console.log('an error occurs', err);
            });
    };

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const photographers = await getPhotographers();
        console.log(photographers);
        displayData(photographers);
    };
    
    init();
    
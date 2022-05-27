import ProxyRatingSorter from '../proxy/cacheProxy.js'
import mediaFactory from '../factories/media.js'
import * as ModalAccessibility from '../utils/modalAccessibility.js'

export default class SorterForm {
    constructor(medias, name) {
        this.medias = medias
        this.name = name
        this.$wrapper = document.createElement('div')
        this.$sorterFormWrapper = document.querySelector('.sorter_media')
        this.$mediasWrapper = document.querySelector('.photograph_media')
        this.$carouselWrapper = document.querySelector('.carousel')

        this.ProxyRatingSorter = new ProxyRatingSorter()
    }

    async sorterMovies(sorter) {
        this.clearWrappers()
        let position = 1
        // Generate the sorted medias galery and carousel
        if (sorter) {
            const sortedData = await this.ProxyRatingSorter.sorter(this.medias, sorter)
            const SortedMovies = sortedData.data

            SortedMovies.forEach((media) => {
                mediaFactory(media, this.name, position)
                position += 1
            })
        } else {
            this.medias.forEach((media) => {
                mediaFactory(media, this.name, position)
                position += 1
            })
        }
    }

    onChangeSorter() {
        // Sorter management
        this.$wrapper.querySelectorAll('.dropdown-el').forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault()
                e.stopPropagation()
                item.classList.toggle('expanded')
                const selectedItem = this.$wrapper.querySelector(`#${e.target.htmlFor}`)
                if (selectedItem) {
                    if (selectedItem.checked) {
                        selectedItem.toggleAttribute('checked')
                    } else {
                        selectedItem.toggleAttribute('checked')
                        this.sorterMovies(selectedItem.value)
                    }
                }
            })
            ModalAccessibility.onEnterClick(item)
        })
        this.$wrapper.querySelector('label[for="sort-best"]').click()
        this.$wrapper.querySelector('.dropdown-el').classList.toggle('expanded')
    }

    clearWrappers() {
        // Reset media and carousel content
        this.$mediasWrapper.innerHTML = ''
        this.$carouselWrapper.innerHTML = ''
    }

    render() {
        // Generate the sorter element
        const sorterForm = `
                        <label for="sorter-select" tabindex="6">Trier par : </label>
                        <span class="dropdown-el" role="listbox">
                            <input type="radio" name="sortType" value="POP" id="sort-best"><label for="sort-best" tabindex="6" aria-label="Trier par popularité" >Popularité</label>
                            <input type="radio" name="sortType" value="DATE" id="sort-date"><label for="sort-date" tabindex="6" aria-label="Trier par date" >Date</label>
                            <input type="radio" name="sortType" value="TITRE" id="sort-title"><label for="sort-title" tabindex="6" aria-label="Trier par titre" >Titre</label>
                        </span>`

        this.$wrapper.innerHTML = sorterForm
        this.onChangeSorter()
        this.$sorterFormWrapper.appendChild(this.$wrapper)
    }
}

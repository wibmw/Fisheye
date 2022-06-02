import ProxyRatingSorter from '../proxy/cacheProxy.js'
import mediaFactory from '../factories/media.js'
import * as ModalAccessibility from './modalAccessibility.js'

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

    unselect() {
        this.$wrapper.querySelector('label[for="sort-best"').setAttribute('class', 'unselected')
        this.$wrapper.querySelector('label[for="sort-date"').setAttribute('class', 'unselected')
        this.$wrapper.querySelector('label[for="sort-title"').setAttribute('class', 'unselected')
    }

    clearSelect() {
        this.$wrapper.querySelector('label[for="sort-best"').setAttribute('class', '')
        this.$wrapper.querySelector('label[for="sort-date"').setAttribute('class', '')
        this.$wrapper.querySelector('label[for="sort-title"').setAttribute('class', '')
    }

    onChangeSorter() {
        // Sorter management
        const dropdown = this.$wrapper.querySelector('.dropdown-el')
        const bestSorter = this.$wrapper.querySelector('#sort-best')
        dropdown.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
            const selectedItem = this.$wrapper.querySelector(`#${e.target.htmlFor}`)
            if (!dropdown.classList.contains('expanded')) {
                this.clearSelect()
                dropdown.classList.toggle('expanded')
            } else if (selectedItem) {
                dropdown.classList.toggle('expanded')
                this.unselect()
                e.target.setAttribute('class', 'selected')
                this.sorterMovies(selectedItem.value)
            } else {
                bestSorter.click()
            }
        })
        ModalAccessibility.onEnterClick(dropdown)
        this.sorterMovies('POP')
        // dropdown.classList.toggle('expanded')
    }

    clearWrappers() {
        // Reset media and carousel content
        this.$mediasWrapper.innerHTML = ''
        this.$carouselWrapper.innerHTML = ''
    }

    render() {
        // Generate the sorter element
        const sorterForm = `
                        <label id="dropdownForSort">Trier par : </label>
                        <span class="dropdown-el" id="dropdownSort" aria-labelledBy="dropdownForSort" role="group" tabindex="3">
                            <input type="radio" name="sortbest" role="menuitemradio" value="POP" id="sort-best" aria-labelledBy="bestLabel">
                                <label id="bestLabel" for="sort-best"  aria-label="Trier par popularité" tabindex="3">Popularité</label>
                            <input type="radio" name="sortdate" role="menuitemradio"  value="DATE" id="sort-date" aria-labelledBy="dateLabel">
                                <label id="dateLabel" for="sort-date" class="unselected" aria-label="Trier par date" tabindex="3">Date</label>
                            <input type="radio" name="sorttitle" role="menuitemradio" value="TITRE" id="sort-title" aria-labelledBy="titleLabel">
                                <label id="titleLabel" for="sort-title" class="unselected" aria-label="Trier par titre" tabindex="3">Titre</label>
                        </span>`

        this.$wrapper.innerHTML = sorterForm
        this.onChangeSorter()
        this.$sorterFormWrapper.appendChild(this.$wrapper)
    }
}

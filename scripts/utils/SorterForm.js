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
                        <label for="sorter-select">Trier par : </label>
                        <span class="dropdown-el" name="dropdownSort" role="listbox">
                            <input type="radio" name="sortbest" aria-select="true" value="POP" id="sort-best">
                                <label for="sort-best"  aria-label="Trier par popularité" >Popularité</label>
                            <input type="radio" name="sortdate" aria-select="true" value="DATE" id="sort-date">
                                <label for="sort-date" class="unselected" aria-label="Trier par date" >Date</label>
                            <input type="radio" name="sorttitle" aria-select="true" value="TITRE" id="sort-title">
                                <label for="sort-title" class="unselected" aria-label="Trier par titre" >Titre</label>
                        </span>`

        this.$wrapper.innerHTML = sorterForm
        this.onChangeSorter()
        this.$sorterFormWrapper.appendChild(this.$wrapper)
    }
}

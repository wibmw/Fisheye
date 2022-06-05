import Lightbox from './LightboxModal.js'
import MediaCard from './MediaCard.js'
import ProxyRatingSorter from '../proxy/cacheProxy.js'
import * as ModalAccessibility from '../utils/modalAccessibility.js'
import {
    CreaE, QS, SetAt, Tog, ApC,
} from '../utils/domUtils.js'

export default class SorterForm {
    constructor(medias, name) {
        this.medias = medias
        this.name = name
        this.$wrapper = CreaE('div')
        this.$sorterFormWrapper = QS('.sorter_media')
        this.$mediasWrapper = QS('.photograph_media')
        this.$carouselWrapper = QS('.carousel')

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
                // get media link
                media.link = media.type === 'ImageM' ? media.getImage(this.name) : media.getVideo(this.name)
                media.position = position
                new Lightbox(media).lightboxRender()
                new MediaCard(media).getMediaCardDOM()

                position += 1
            })
        } else {
            throw new Error('No sorter selected')
        }
    }

    unselect() {
        SetAt('unselected', QS('label[for="sort-best"', this.$wrapper))
        SetAt('unselected', QS('label[for="sort-date"', this.$wrapper))
        SetAt('unselected', QS('label[for="sort-title"', this.$wrapper))
    }

    clearSelect() {
        SetAt('', QS('label[for="sort-best"', this.$wrapper))
        SetAt('', QS('label[for="sort-date"', this.$wrapper))
        SetAt('', QS('label[for="sort-title"', this.$wrapper))
    }

    onChangeSorter() {
        // Sorter management
        const dropdown = this.$wrapper.querySelector('.dropdown-el')
        const bestSorter = this.$wrapper.querySelector('#sort-best')
        dropdown.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
            const selectedItem = QS(`#${e.target.htmlFor}`, this.$wrapper)
            if (!dropdown.classList.contains('expanded')) {
                this.clearSelect()
                Tog('expanded', dropdown)
            } else if (selectedItem) {
                Tog('expanded', dropdown)
                this.unselect()
                e.target.setAttribute('class', 'selected')
                this.sorterMovies(selectedItem.value)
            } else {
                bestSorter.click()
            }
        })
        ModalAccessibility.onEnterClick(dropdown)
        this.sorterMovies('POP')
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
        ApC(this.$wrapper, this.$sorterFormWrapper)
    }
}

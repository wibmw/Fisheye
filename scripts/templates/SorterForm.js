class SorterForm {
    constructor(medias, name) {
        this._medias = medias
        this._name = name
        this.$wrapper = document.createElement('div')
        this.$sorterFormWrapper = document.querySelector('.sorter_media')
        this.$mediasWrapper = document.querySelector('.photograph_media')
        this.$carouselWrapper = document.querySelector('.carousel')

        this.ProxyRatingSorter = new ProxyRatingSorter()
    }

    async sorterMovies(sorter) {
        this.clearWrappers()
        let likes = 0
        let position = 1
        console.log(sorter)
        if (!!sorter) {
            const sortedData = await this.ProxyRatingSorter.sorter(this._medias, sorter)

            const SortedMovies = sortedData.data

            SortedMovies.forEach(media => {
                mediaFactory(media, this._name, position)
                likes += media.likes
                position++
            })
        } else {
            this._medias.forEach(media => {
                mediaFactory(media, this._name, position)
                likes += media.likes
                position++
            })
        }
    }

    onChangeSorter() {
        this.$wrapper.querySelectorAll('.dropdown-el').forEach( (item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                item.classList.toggle('expanded');
                const selectedItem = this.$wrapper.querySelector(`#${e.target.htmlFor}`)

                if(selectedItem.checked) {
                    selectedItem.toggleAttribute('checked');
                } else {
                    selectedItem.toggleAttribute('checked');
                    this.sorterMovies(selectedItem.value)  
                }
            })
        });
    }

    clearWrappers() {
        this.$mediasWrapper.innerHTML = ""
        this.$carouselWrapper.innerHTML = ""
    }

    render() {
        const sorterForm = 
        `<label for="sorter-select">Triez par : </label>
        <span class="dropdown-el">
            <input type="radio" name="sortType" value="POP" id="sort-relevance"><label for="sort-relevance">Popularité</label>
            <input type="radio" name="sortType" value="DATE" id="sort-best"><label for="sort-best">Date</label>
            <input type="radio" name="sortType" value="TITRE" id="sort-low"><label for="sort-low">Titre</label>
        </span>`
               /*`<label for="sorter-select">Triez par : </label>
                <select name="sorter-select" id="sorter_select">
                    <option value=""><div class='badge badge-success'>Relish</div></option>
                    <option value="POP">Popularité</option>
                    <option value="DATE">Date</option>
                    <option value="TITRE">Titre</option>
                </select>
`
*/
        this.$wrapper.innerHTML = sorterForm
        this.onChangeSorter()
       
        this.$sorterFormWrapper.appendChild(this.$wrapper)
        
        //document.addEventListener("click", this.closeAllSelect())
    }
}


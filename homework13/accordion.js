class Accordion {
    constructor(element) {
        this.element = element;
    };

    init() {
        this.sortingMethod((content, e, i)=> {
            content.classList.add('d-none');
            e.setAttribute('data-id', i)
        })
        this.element.addEventListener('click', this.onItemClick)
      
    };

    sortingMethod(cb) {
        const elChildren = Array.from(this.element.children);
        elChildren.forEach((e, i) => {
            const contentEl = e.children[1];
            cb(contentEl, e, i)
        })
    }

    onItemClick = (e) => {
        if(e.target.classList.contains('card-header')){
            this.toggleItems(e.target.nextElementSibling)
        }
    }

    toggleIndex = (index) => {
        const parentItem = this.element.querySelector(`[data-id= "${index}"]`);
        const toggleItem = parentItem.children[1];
        this.toggleItems(toggleItem)
    }

    toggleItems(evt) {
        evt.classList.toggle('d-none');
        evt.classList.toggle('active');
    }
    getOpenedIndex() {
        const openedEl = document.getElementsByClassName('active');
        return Array.prototype.map.call(openedEl, e => {
            return e.parentElement.dataset.id
        })
    }

    addElement(header, content){
        const headerEl = document.createElement('div');
        headerEl.classList.add('card-header');
        headerEl.innerText = header;
        const contentEl = document.createElement('div');
        contentEl.classList.add('d-none', 'card-body');
        contentEl.innerText = content;

        const itemEl = document.createElement('div')
        itemEl.classList.add('card');
        itemEl.setAttribute('data-id', this.element.children.length);
        itemEl.append(headerEl, contentEl)
        this.element.append(itemEl);
    };

    openAll(){
        this.sortingMethod(e => {
            e.classList.contains('d-none') && this.toggleItems(e)
        });
    }
    closeAll(){
        this.sortingMethod(e => {
            e.classList.contains('active') && this.toggleItems(e)
        });
    }
}
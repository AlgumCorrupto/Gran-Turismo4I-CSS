class popupCustom extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let title = document.createElement("div");
        title.setAttribute("class", "popup-title");
        title.innerHTML = this.getAttribute("title");

        //let observer = new MutationObserver(()=>{
        //    let body = document.createElement("div");
        //    body.setAttribute("class", "popup-body");
        //    body.innerHTML = this.innerHTML;
        //    this.innerHTML = "";
        //})

        //observer.observe(this, configs);
        this.appendChild(title);
    }
}

customElements.define("popup-window", popupCustom);
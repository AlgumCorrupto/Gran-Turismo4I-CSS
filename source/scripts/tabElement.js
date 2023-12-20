class tabElementOption extends HTMLElement {
    static attributes = ["value", "state"];
    static state;

    constructor() {
        super();

        
    }

    connectedCallback() {
        if(!this.parentElement.nodeName == "tab-element"){
            return;
        }

        this.addEventListener("click", (ev) => {
            let children =  this.parentElement.children;
            for(let i = 0; i < this.parentElement.childElementCount; i++) {
                children[i].setAttribute("active", "false");
            }
            this.setAttribute("active", "true");
            
        });

        let parent = this.parentElement;
        let observer = new MutationObserver(()=> {
            this.updateTab();
        });

        let config = {
            childList: true
        }
        observer.observe(parent, config);
    }

    updateTab(){
        if(!this.parentElement.nodeName == "tab-element"){
            return;
        }
        this.innerHTML = this.getAttribute("value")
        if(this.previousElementSibling == null && this.nextElementSibling == null ) {
            this.state = "single";
            this.setAttribute("state", "single")
        }
        else if(this.previousElementSibling == null) {
            this.state = "first";
            this.setAttribute("state", "first")
        }
        else if(this.nextElementSibling == null) {
            this.state = "last";
            this.setAttribute("state", "last")
        }
        else {
            this.state = "middle";
            this.setAttribute("state", "middle")
        }
        return;
    }
}

class tabElement extends HTMLElement {
    static attributes = ["index"];
    mutationObserver = new MutationObserver(() => {
        foreach(element in this.childNodes)
            element.updateTab()

    })
    constructor() {
        super();
    }


}

customElements.define("tab-option", tabElementOption);
customElements.define("tab-element", tabElement);
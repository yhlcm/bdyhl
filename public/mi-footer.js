customElements.define("mi-footer", class extends HTMLElement {
    connectedCallback() {
      this.innerText = "Copyright © 2019 Cuevas Martinez Yaheli IC51-M.";
    }
  }, { extends: "footer" });
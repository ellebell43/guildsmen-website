class Back extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class='backToContents' id="backToContents">
      <a href="javascript:history.back()"><img src="/static/icons/arrow-left-solid.svg" alt="" class="filter" />Back</a>
    </div>
    `
  }
}

customElements.define('back-component', Back);
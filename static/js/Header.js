class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
      <a href='/' class='logo'>Guildsmen</a>
      <div class='navContainer'>
        <nav class='navMenu' id='nav'>
          <a href="/rules.html">Rules</a>
          <a href="/lore.html">Lore</a>
          <a href='/bestiary.html'>Bestiary</a>
          <a href="/resources.html">Resources</a>
          <a href='/community.html'>Community</a>
        </nav>
        <button type="button" onclick="themeClick()" class="themeSwitch" id="themeSwitch">
          <img id="themeSwitchImg" src="/static/icons/sun-solid.svg" alt="theme switch" />
        </button>
        <button type="button" class="menuButton" id="menuButton" onclick="toggleMenu()">
          <img src="/static/icons/bars-solid.svg" alt="menu" id='menuIcon' />
        </button>
      </div>
    </header>
    `
  }
}

customElements.define('header-component', Header);
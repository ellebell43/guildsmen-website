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
          <a href="/rules">Rules</a>
          <a href="/lore">Lore</a>
          <a href='/bestiary'>Bestiary</a>
          <a href="/resources">Resources</a>
          <a href='/community'>Community</a>
        </nav>
        <button type="button" onclick="themeClick()" class="themeSwitch" id="themeSwitch">
          <img id="themeSwitchImg" src="/icons/sun-solid.svg" alt="theme switch" />
        </button>
        <button type="button" class="menuButton" id="menuButton" onclick="toggleMenu()">
          <img src="/icons/bars-solid.svg" alt="menu" id='menuIcon' />
        </button>
      </div>
    </header>
    `
  }
}

customElements.define('header-component', Header);
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
      <div class='footerSocialLinks'>
        <a href='https://discord.gg/6zE4chEVQQ'><img src='/static/icons/discord-brands.svg' alt='Discord link' class='filter' /></a>
        <a href='https://www.reddit.com/r/Guildsmen/'><img src='/static/icons/reddit-brands.svg' alt='Reddit link' class='filter' /></a>
      </div>

      <div class='leftDiv'>
        <p>Created by Aaron Rutherford<br class='break'>and Harmony Brooks</p>
        <p>Coded by <a href="https://github.com/hazipan">Aaron Rutherford</a></p>
      </div>
      <div class='rightDiv'>
        <p>&copy; 2022 Aaron Rutherford</p>
        <p>License - <a href='https://opensource.org/licenses/GPL-3.0'>GPL-3.0</a></p>
      </div>
    </footer>
    `
  }
}

customElements.define('footer-component', Footer);
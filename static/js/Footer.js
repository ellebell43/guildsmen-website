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
        <a href='https://github.com/Hazipan/guildsmen-website'><img src='/static/icons/github-brands.svg' alt='Reddit link' class='filter' /></a>
      </div>

      <div class='leftDiv'>
        <p>Conceptualized by Harmony Brooks<br class='break'>and written by Aaron Rutherford</p>
        <p>Edited by Hyrum Blanchard</p>
      </div>
      <div class='rightDiv'>
        <p>&copy; 2022 Harmony Brooks and Aaron Rutherford</p>
        <p>License - <a href='https://opensource.org/licenses/GPL-3.0'>GPL-3.0</a></p>
        <p>Coded by <a href="https://github.com/hazipan">Aaron Rutherford</a></p>
      </div>
    </footer>
    `
  }
}

customElements.define('footer-component', Footer);
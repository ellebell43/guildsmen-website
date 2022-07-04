import '../css/footer.css';
import discordIcon from '../images/discord-brands.svg';
import redditIcon from '../images/reddit-brands.svg';

const Footer = () => {
    return (
        <footer>
            <div className='footerSocialLinks'>
                <a href='https://discord.gg/6zE4chEVQQ'><img src={discordIcon} alt='Discord link' className='filter' /></a>
                <a href='https://www.reddit.com/r/Guildsmen/'><img src={redditIcon} alt='Reddit link' className='filter' /></a>

            </div>
            <div className='footerInfo'>
                <div>
                    <p>Created by Aaron Rutherford and Harmony Brooks</p>
                    <p>Coded by <a href="https://github.com/hazipan">Aaron Rutherford</a></p>
                </div>
                <div className='rightDiv'>
                    <p>&copy; 2022 Aaron Rutherford</p>
                    <p>License - <a href='https://opensource.org/licenses/GPL-3.0'>GPL-3.0</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
import { Link, Outlet } from 'react-router-dom';
import './css/index.css';
import sun from './images/sun-solid.svg';
import moon from './images/moon-solid.svg';
import menu from './images/bars-solid.svg';

const App = () => {
  const themeSwitch = (e) => {
    const icon = e.target;
    if (localStorage.getItem('theme') === 'dark') {
      document.body.setAttribute('data-theme', 'light');
      icon.src = moon;
      localStorage.setItem('theme', 'light');
    } else {
      document.body.setAttribute('data-theme', 'dark');
      icon.src = sun;
      localStorage.setItem('theme', 'dark');
    }
  }

  const menuClick = () => {
    const menu = document.getElementById('nav');
    if (menu !== null) {
      if (!menu.classList.contains('visible')) {
        menu.classList.add('visible');
      } else {
        menu.classList.remove('visible');
      }
    }
    const menuIcon = document.getElementById('menuButton');
    if (menuIcon !== null) {
      if (!menuIcon.classList.contains('menuAnimation')) {
        menuIcon.classList.remove('menuAnimationReverse');
        menuIcon.classList.add('menuAnimation');
      } else {
        menuIcon.classList.remove('menuAnimation');
        menuIcon.classList.add('menuAnimationReverse');
      }
    }
  }

  return (
    <div>
      <header>
        <Link to='/' className='logo'>Guildsmen</Link>
        <div className='navContainer'>
          <nav className='navMenu' id='nav'>
            <Link to="/rules" onClick={menuClick}>Rules</Link>
            <Link to="/lore" onClick={menuClick}>Lore</Link>
            <Link to="/resources" onClick={menuClick}>Resources</Link>
            <Link to='/community' onClick={menuClick}>Community</Link>
          </nav>
          <button type="button" onClick={themeSwitch} className="themeSwitch" id="themeSwitch">
            <img id="themeSwitchImg" src={sun} alt="theme switch" />
          </button>
          <button type="button" className="menuButton" id="menuButton" onClick={menuClick}>
            <img src={menu} alt="menu" />
          </button>
        </div>
      </header>
      <Outlet />
    </div >
  )
}
export default App;

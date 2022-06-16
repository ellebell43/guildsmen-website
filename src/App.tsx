import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSun, faMoon, faDownload } from '@fortawesome/free-solid-svg-icons';
import Home from './Tabs/Home';
import Rules from './Tabs/Rules';
import Lore from './Tabs/Lore';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? 'dark' : 'light');
  useEffect(() => { localStorage.setItem('theme', theme) });

  const [tab, setTab] = useState(<Home />);

  const themeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const toggleMenu = () => {
    const menu = document.getElementById('nav');
    if (menu !== null) {
      if (!menu.classList.contains('visible')) {
        menu.classList.add('visible');
      } else {
        menu.classList.remove('visible');
      }
    }
    const menuIcon = document.getElementById('menuIcon');
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

  const tabClick = (e: any) => {
    const selected = e.target.id;
    switch (selected) {
      case 'rules':
        setTab(<Rules />);
        break;
      case 'lore':
        setTab(<Lore />);
        break;
      case 'home':
        setTab(<Home />);
        break;
      case 'logo':
        setTab(<Home />);
        break;
      default:
    }
    toggleMenu();
  }

  return (
    <div className='app' data-theme={theme}>
      <header>
        <p className='logo' id='logo' onClick={tabClick}>GUILDSMEN</p>
        <div>
          <nav id='nav'>
            <button type='button' className='navButton' onClick={tabClick} id='home'>HOME</button>
            <button type='button' className='navButton' onClick={tabClick} id='rules'>RULES</button>
            <button type='button' className='navButton' onClick={tabClick} id='lore'>LORE</button>
            <button type='button' className='navButton cs' onClick={tabClick} id='CS'>
              CHARACTER<br />SHEET <FontAwesomeIcon icon={faDownload} />
            </button>
          </nav>
          <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} size='2x' onClick={themeChange} className='themeIcon' />
          <FontAwesomeIcon icon={faBars} size='2x' onClick={toggleMenu} className='menuIcon' id='menuIcon' />
        </div>
      </header>
      {tab}
      <footer>

      </footer>
    </div>
  )
}

export default App;

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSun, faMoon, faDownload } from '@fortawesome/free-solid-svg-icons';
import Home from './Tabs/Home';
import Rules from './Tabs/Rules';
import Lore from './Tabs/Lore';
import './App.css';

const App = () => {
  const tabArr = [<Home/>, <Rules/>, <Lore/>]
  const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? 'dark' : 'light');
  useEffect(() => { localStorage.setItem('theme', theme) });

  const [tabIndex, setTabIndex] = useState(
    sessionStorage.getItem('tabIndex') === null ? 0 : Number(sessionStorage.getItem('tabIndex'))
  )
  let tab = tabArr[tabIndex];
  useEffect(() => {
    sessionStorage.setItem('tabIndex', tabIndex.toString());
  })

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
        setTabIndex(1);
        break;
      case 'lore':
        setTabIndex(2);
        break;
      case 'home':
        setTabIndex(0);
        break;
      case 'logo':
        setTabIndex(0);
        break;
      default:
    }
    toggleMenu();
    goToTop();
  }

  const goToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
            <a className='navButton cs' onClick={tabClick} id='CS' href='./CS 10.2.pdf' download>
              CHARACTER<br />SHEET <FontAwesomeIcon icon={faDownload} />
            </a>
          </nav>
          <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} size='2x' onClick={themeChange} className='themeIcon' />
          <FontAwesomeIcon icon={faBars} size='2x' onClick={toggleMenu} className='menuIcon' id='menuIcon' />
        </div>
      </header>
      {tab}
      <footer>
        <p>&copy; Aaron Rutherford</p>
        <p>License - MIT</p>
        <p>Created by Aaron Rutherford and Harmony Brooks</p>
        <p>Coded by Aaron Rutherford</p>
        <a href='https://github.com/Hazipan/guildsmen-website'>See the code!</a>
      </footer>
    </div>
  )
}

export default App;

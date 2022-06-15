import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Home from './Tabs/Home';
import Rules from './Tabs/Rules';
import Lore from './Tabs/Lore';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') === 'light' ? 'light' : 'dark')
  useEffect(() => { localStorage.setItem('theme', theme) })

  const [tab, setTab] = useState(Home);

  let themeIcon = theme === 'dark' ? './images/icon-sun.svg' : './images/icon-moon.svg';

  const themeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    console.log('theme changed');
  }

  const toggleMenu = () => {
    console.log('menu toggled');
    const menu = document.getElementById('nav');
    if(menu !== null) {
      if(!menu.classList.contains('visible')) {
        menu.classList.add('visible');
      } else {
        menu.classList.remove('visible');
      }
    }
    const menuIcon = document.getElementById('menuIcon');
    if(menuIcon !== null) {
      if(!menuIcon.classList.contains('menuAnimation')) {
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
    switch(selected) {
      case 'rules':
        setTab(Rules);
        break;
      case 'lore':
        setTab(Lore);
        break;
      default:
        setTab(Home);
    }
  }

  return (
    <div className='app' data-theme={theme}>
      <header>
        <p className='logo'>GUILDSMEN</p>
        <div>
          <img alt='Theme switch' src={themeIcon} onClick={themeChange} className='themeIcon' />
          <FontAwesomeIcon icon={faBars} size='2x' onClick={toggleMenu} id='menuIcon' />
        </div>
        <nav id='nav'>
          <button type='button' className='navButton' onClick={tabClick} id='home'>HOME</button>
          <button type='button' className='navButton' onClick={tabClick} id='rules'>RULES</button>
          <button type='button' className='navButton' onClick={tabClick} id='lore'>LORE</button>
        </nav>
      </header>
      {tab}
      <footer>

      </footer>
    </div>
  )
}

export default App;

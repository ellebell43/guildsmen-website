const themeClick = () => {
  let currentTheme = localStorage.getItem('theme');
  let icon = document.getElementById('themeSwitchImg');
  let newTheme = '';

  if (currentTheme === null || currentTheme === 'light') {
    newTheme = 'dark';
    icon.src = '/icons/moon-solid.svg';
  } else {
    newTheme = 'light';
    icon.src = '/icons/sun-solid.svg';
  }

  localStorage.setItem('theme', newTheme);
  document.body.setAttribute('data-theme', newTheme);
}

const toggleMenu = () => {
  let menu = document.getElementById('nav');
  menu.classList.toggle('visible');

  let menuIcon = document.getElementById('menuIcon');
  if (menuIcon.classList.contains('menuAnimation')) {
    console.log('unrotating');
    menuIcon.classList.add('menuAnimationReverse');
    menuIcon.classList.remove('menuAnimation');
  } else {
    console.log('rotating');
    menuIcon.classList.add('menuAnimation');
    menuIcon.classList.remove('menuAnimationReverse');

  }
}
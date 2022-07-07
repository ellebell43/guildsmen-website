if (localStorage.getItem('theme') !== null) {
  document.body.setAttribute('data-theme', localStorage.getItem('theme'));
} else {
  document.body.setAttribute('data-theme', 'light');
}

const element = document.getElementById('themeSwitchImg');
if (localStorage.getItem('theme') === 'light' || localStorage.getItem('theme') === null) {
  element.src = '/static/icons/sun-solid.svg';
} else {
  element.src = '/static/icons/moon-solid.svg';
}
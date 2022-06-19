const themeSwitch = document.getElementById('themeSwitch');
const icon = document.getElementById('themeSwitchImg')

themeSwitch.addEventListener('click', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.setAttribute('data-theme', 'light');
        icon.src = '/images/moon-solid.svg';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        icon.src = '/images/sun-solid.svg';
        localStorage.setItem('theme', 'dark');
    }
});

if (localStorage.getItem('theme') === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    icon.src = '/images/sun-solid.svg';
} else {
    document.body.setAttribute('data-theme', 'light');
    icon.src = '/images/moon-solid.svg';
}
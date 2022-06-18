const ThemeSwitch = () => {
    const themeSwitch = document.getElementById('themeSwitchImg');
    const body = document.getElementById('body');

    if(/moon/.test(themeSwitch.src)) {
        body.setAttribute("data-theme", "dark");
        themeSwitch.src = '/images/sun-solid.svg';
    } else {
        body.setAttribute("data-theme", "light");
        themeSwitch.src = '/images/moon-solid.svg';
    }
}
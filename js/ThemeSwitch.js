const ThemeSwitch = () => {
    const themeSwitch = document.getElementById('themeSwitchImg');
    console.log(themeSwitch.src);
    const body = document.getElementById('body');

    if(themeSwitch.src === '/images/moon-solid.svg') {
        body.setAttribute("data-theme", "dark");
        themeSwitch.src = '/images/sun-solid.svg';
    } else {
        body.setAttribute("data-theme", "light");
        themeSwitch.src = '/images/moon-solid.svg';
    }
}
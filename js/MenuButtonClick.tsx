const MenuButtonClick = () => {
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
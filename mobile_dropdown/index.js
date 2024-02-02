import './style.css';

const dropdownBtn = document.querySelector('.menu-btn');
dropdownBtn.addEventListener('click', () => {
    const menus = document.querySelectorAll('.menu-items');
    const menuItems = document.querySelectorAll('.menu-item');
    menus.forEach((menu) => {
        menu.classList.toggle('show');
    });
    menuItems.forEach((menuItem) => {
        menuItem.classList.toggle('show');
    });
});

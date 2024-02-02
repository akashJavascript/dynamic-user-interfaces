import './style.css';

const dropdownBtn = document.querySelector('.dropdown-btn');
dropdownBtn.addEventListener('mouseenter', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdowns.forEach((dropdown) => {
        dropdown.classList.add('show');
    });
    dropdownItems.forEach((dropdownItem) => {
        dropdownItem.classList.add('show');
    });
});
dropdownBtn.addEventListener('mouseleave', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdowns.forEach((dropdown) => {
        dropdown.classList.remove('show');
    });
    dropdownItems.forEach((dropdownItem) => {
        dropdownItem.classList.remove('show');
    });
});

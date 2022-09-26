const burger = (burgerSelector, menuSelector) => {
    const menuElem = document.querySelector(menuSelector),
          burgerElem = document.querySelector(burgerSelector);

    menuElem.style.display = 'none';
    menuElem.classList.add('animated', 'fadeIn');

    burgerElem.addEventListener('click', () => {
//Задание в том, чтобы на планшетной версии только (992px) работло бургер меню и при повороте оно скрывалось.
        if (menuElem.style.display == 'none' && window.screen.availWidth < 993) {
            menuElem.style.display = 'block';
        } else {
            menuElem.style.display = 'none';
        }
    });

    document.querySelector('.main').addEventListener('click', () => {
        menuElem.style.display = 'none';
    });

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            menuElem.style.display = 'none';
        }
    });
};

export default burger;
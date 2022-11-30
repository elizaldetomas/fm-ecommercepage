const cartButton = document.querySelector('.cart');
const thumbnails = document.querySelectorAll('.image__thumbnail span img');
const featuringImage = document.querySelector('.image__featuring img');
const navButton = document.querySelector('.navButton');
const articles = document.getElementById('articles');
const titleElements = document.querySelectorAll('*[title-js]');
let units = 0;

cartButton.addEventListener('click', () => {
    document.querySelector('.cart-dropdown').classList.toggle('cart-dropdown--show');
})

thumbnails.forEach(image => {
    image.addEventListener('click', (e) => {
        let string = e.target.getAttribute('src').slice(0, -14);
        string += '.jpg';
        featuringImage.setAttribute('src', string);
        document.querySelector('.image__thumbnail--selected').removeAttribute('class');
        image.parentNode.classList.add('image__thumbnail--selected');
    })
})

navButton.addEventListener('click', () => shiftNavMenu())
document.querySelector('.nav-overlay').addEventListener('click', () => shiftNavMenu())

function shiftNavMenu() {
    document.querySelector('.nav').classList.toggle('nav--show');
    document.querySelector('.nav-overlay').classList.toggle('nav-overlay--show');

    if (document.querySelector('.nav').classList.contains('nav--show'))
        navButton.style.backgroundImage = "url('./images/icon-close.svg')";
    else
        navButton.style.backgroundImage = "url('./images/icon-menu.svg')";
}

function changeUnits(type) {
    if (type == 'add' && units < 9) units++;
    if (type == 'subtract' && units > 0) units--;

    document.querySelector('.units__current').textContent = units;
}

document.querySelector('.addToCart').addEventListener('click', () => {
    let finalPrice = (125 * units).toFixed(2);
    articles.textContent = units;
    document.querySelector('.info__price p').innerHTML = `<p>$125.00 x ${units} <span class="bold">$${finalPrice}</span></p>`

    if (units > 0) {
        articles.parentNode.classList.add('cart__content--appear');
        document.querySelector('.cart__item').classList.add('cart__content--appear');
        document.querySelector('.checkout').classList.add('cart__content--appear');
        document.querySelector('.cart__empty').classList.remove('cart__content--appear');
    } else {
        clearCartContent();
    }
})

document.querySelector('.cart__delete').addEventListener('click', () => clearCartContent())

function clearCartContent() {
    articles.parentNode.classList.remove('cart__content--appear');
    document.querySelector('.cart__item').classList.remove('cart__content--appear');
    document.querySelector('.checkout').classList.remove('cart__content--appear');
    document.querySelector('.cart__empty').classList.add('cart__content--appear');
}


const title = document.querySelector('.title-js');
const text = document.querySelector('.title-js p');

titleElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        let titleText = el.getAttribute('title-js');
        text.textContent = titleText;
        if (innerWidth >= 900) {
            el.appendChild(title);
            title.classList.add('title-js--show');
        }
    })

    el.addEventListener('mouseleave', () => {
        if (innerWidth >= 900) {
            title.classList.remove('title-js--show');
        }
    })
})
const carousel = document.querySelector('.carousel');
const carouselClose = document.querySelector('.carousel__close');
const thumbnailsCarousel = document.querySelectorAll('.carousel__thumbnail span img');
const featuringCarousel = document.querySelector('.carousel__featuring img');

document.querySelector('.image__featuring').addEventListener('click', ()=>{
    carousel.classList.add('carousel--show');
})

carouselClose.addEventListener('click', () => {
    carousel.classList.remove('carousel--show');
})

thumbnailsCarousel.forEach(image => {
    image.addEventListener('click', (e) => {
        let string = e.target.getAttribute('src').slice(0, -14);
        string += '.jpg';
        featuringCarousel.setAttribute('src', string);
        document.querySelector('.carousel__thumbnail--selected').removeAttribute('class');
        image.parentNode.classList.add('carousel__thumbnail--selected');
    })
})

let productsList = [];

thumbnailsCarousel.forEach(product => {
    product = product.getAttribute('src').slice(0, -14);
    product += '.jpg';
    productsList.push(product);
})

let currentThumbnail;

function animateCarousel(dir) {
    for(let i=0; i<thumbnailsCarousel.length; i++) {
        if (thumbnailsCarousel[i].parentNode.classList.contains('carousel__thumbnail--selected')) {
            currentThumbnail = i;
        }
    }

    let prevTh = currentThumbnail-1;
    let nextTh = currentThumbnail+1;
    document.querySelector('.carousel__thumbnail--selected').removeAttribute('class');
    
    if (dir == 'prev') {
        if (currentThumbnail == 0) prevTh = 3;
        featuringCarousel.setAttribute('src', productsList[prevTh]);
        thumbnailsCarousel[prevTh].parentNode.classList.add('carousel__thumbnail--selected');
    }

    if (dir == 'next') {
        if (currentThumbnail == 3) nextTh = 0;
        featuringCarousel.setAttribute('src', productsList[nextTh]);
        thumbnailsCarousel[nextTh].parentNode.classList.add('carousel__thumbnail--selected');
    }
}
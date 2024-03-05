const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

nextBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: 100,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: -100,
        behavior: 'smooth'
    });
});

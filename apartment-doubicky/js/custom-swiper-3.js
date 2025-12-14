// custom-swiper-3.js
// Slider pro apartmány (sekce #section-rooms)

document.addEventListener('DOMContentLoaded', function () {
    // Najdi všechny slidery v sekci apartmánů
    var roomSwipers = document.querySelectorAll('.rooms-swiper');

    roomSwipers.forEach(function (swiperEl) {
        var wrapper = swiperEl.closest('.rooms-slider-wrapper');
        if (!wrapper) return;

        var nextEl = wrapper.querySelector('.rooms-swiper-button-next');
        var prevEl = wrapper.querySelector('.rooms-swiper-button-prev');

        // Inicializace Swiperu pro každý slider zvlášť
        new Swiper(swiperEl, {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 600,
            navigation: {
                nextEl: nextEl,
                prevEl: prevEl,
            },
            pagination: false
        });
    });
});

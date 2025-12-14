// js/custom-swiper-hero.js
document.addEventListener('DOMContentLoaded', function () {
    const heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        effect: 'fade',      // hladké prolínání jako fotky
        speed: 800,
        pagination: false,
        navigation: false
    });
});

﻿

let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -50,
        },
    },
});
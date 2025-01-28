import {CheeseHeader} from "./js/header";

require('./scss/styles.scss');
import Swiper from 'swiper';
import {
    Thumbs,
    Grid,
    Navigation,
    Pagination,
    Autoplay,
    FreeMode,
    EffectCards,
    EffectFade,
    Controller
} from 'swiper/modules';


Swiper.use([Thumbs, Navigation, Pagination, Autoplay, FreeMode, EffectCards, EffectFade, Controller]);

document.addEventListener("DOMContentLoaded", (event) => {
        const header = document.querySelector('.header');
        new CheeseHeader(header);

        new Swiper('.welcome-slider .swiper', {
            spaceBetween: 0,
            loop: true,
            preloadImages: false,
            lazy: true,
            pagination: {
                el: '.welcome-slider__pagination',
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: '.welcome-slider .slider-next',
                prevEl: '.welcome-slider .slider-prev',
            },
        });

        new Swiper('.recently-viewed__slider .swiper', {
            spaceBetween: 0,
            slidesPerView: 1,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                576: {
                    spaceBetween: 32,
                    slidesPerView: 2,
                },
                768: {
                    spaceBetween: 20,
                    slidesPerView: 3,
                },
                992: {
                    spaceBetween: 20,
                    slidesPerView: 4,
                },
                1140: {
                    spaceBetween: 32,
                    slidesPerView: 4,
                }
            },
            pagination: {
                el: '.recently-viewed__pagination',
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: '.recently-viewed__slider .slider-next',
                prevEl: '.recently-viewed__slider .slider-prev',
            },
        });

        new Swiper('.news-slider__content .swiper', {
            spaceBetween: 0,
            slidesPerView: 1,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                576: {
                    spaceBetween: 32,
                    slidesPerView: 2,
                },
                768: {
                    spaceBetween: 32,
                    slidesPerView: 3,
                },
                1140: {
                    spaceBetween: 32,
                    slidesPerView: 4,
                }
            },
            pagination: {
                el: '.news-slider__pagination',
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: '.news-slider__content .slider-next',
                prevEl: '.news-slider__content .slider-prev',
            },
        });

        new Swiper('.brands__slider .swiper', {
            spaceBetween: 50,
            slidesPerView: 1,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                600: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                },
                1040: {
                    slidesPerView: 5,
                },
                1280: {
                    slidesPerView: 6,
                },
                1440: {
                    slidesPerView: 7,
                },
                1560: {
                    slidesPerView: 8,
                },
            },
            pagination: {
                el: '.brands__pagination',
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: '.brands .slider-next',
                prevEl: '.brands .slider-prev',
            },
        });


        const cardsSlider = new Swiper('.slider-cards__content .swiper', {
            speed: 400,
            centeredSlides: true,
            slidesPerView: 1,
            loop: true,
            simulateTouch: false,
            slideToClickedSlide: true,
            breakpoints: {
                576: {
                    centeredSlides: true,
                    slidesPerView: 3,
                },
                992: {
                    speed: 400,
                    centeredSlides: true,
                    slidesPerView: 5,
                },
            },
            pagination: {
                el: '.slider-cards__pagination',
                type: 'bullets',
            },
            navigation: {
                nextEl: '.slider-cards__content .slider-next',
                prevEl: '.slider-cards__content .slider-prev',
            },
            on: {
                init: function () {
                    if (window.innerWidth >= 992) {

                        const wrapper = document.querySelector('.slider-cards__content .swiper-wrapper');
                        const slide = document.querySelector('.slider-cards__content .swiper-slide');

                        if (!slide) return;

                        // Получаем ширину из inline-стиля
                        const slideWidth = slide.getAttribute('style')
                            ? parseFloat(slide.getAttribute('style').match(/width:\s*(\d+\.?\d*)px/)[1])
                            : 0; // Извлекаем ширину из inline стиля

                        const marginOffset = slideWidth / this.params.slidesPerView;

                        // Устанавливаем отступ сразу после инициализации
                        wrapper.style.marginLeft = `${marginOffset + 15}px`;
                    }
                },

                transitionStart: function () {
                    if (window.innerWidth >= 992) {
                        const wrapper = document.querySelector('.slider-cards__content .swiper-wrapper');
                        const slide = document.querySelector('.slider-cards__content .swiper-slide');

                        if (!slide) return;

                        const slideWidth = slide.getAttribute('style')
                            ? parseFloat(slide.getAttribute('style').match(/width:\s*(\d+\.?\d*)px/)[1])
                            : 0;

                        const marginOffset = slideWidth / this.params.slidesPerView;

                        const transformMatrix = window.getComputedStyle(wrapper).transform;

                        if (transformMatrix !== 'none') {
                            const matrixValues = transformMatrix.match(/matrix.*\((.+)\)/)[1].split(', ');
                            const translateX = parseFloat(matrixValues[4]); // Берем X-координату transform

                            if (translateX > this.translate) {
                                wrapper.style.marginLeft = `${marginOffset + 15}px`;
                            } else {
                                wrapper.style.marginLeft = '0px';
                            }
                        }
                    }
                },
            }
        });


        const slides = document.querySelectorAll('.swiper-slide');

        slides.forEach((slide) => {
            slide.addEventListener('click', (e) => {
                const currentSlide = e.target.classList.contains('swiper-slide') ? e.target : e.target.closest('.swiper-slide');  // Слайд, по которому кликнули
                const nextSlide = currentSlide.nextElementSibling;  // Следующий слайд

                if (currentSlide.classList.contains('swiper-slide-active')) {
                    // Логика в зависимости от классов
                    if (currentSlide.classList.contains('swiper-slide-prev')) {
                        cardsSlider.slidePrev();
                    } else if (currentSlide.classList.contains('swiper-slide-next')) {
                        cardsSlider.slideNext();
                    } else if (nextSlide && nextSlide.classList.contains('swiper-slide-prev')) {
                        cardsSlider.slidePrev();
                    } else {
                        cardsSlider.slideNext();
                    }
                }
            });
        });


        function updateHeaderHeight() {
            const header = document.querySelector('header');
            const main = document.querySelector('main');

            if (header && main) {
                const headerHeight = header.offsetHeight;
                document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
                main.style.marginTop = `var(--header-height)`;
            }
        }

// Запуск при загрузке и при изменении размеров окна
        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);
    }
);
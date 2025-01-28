import Swiper from "swiper";
import debounce from "lodash/debounce";

export class ResponsiveSlider {
    constructor(selector) {
        this._selector = selector;
        this._sliders = document.querySelectorAll(`${selector}`);
        this._container = document.querySelector('.container');
        if (this._sliders && this._container) {
            this.initSwipers = this.initSwipers.bind(this);
            this._reinitSlider = this._reinitSlider.bind(this);
        }
    }

    _getContainerWidth() {
        const fullWidth = this._container.getBoundingClientRect().width;
        const style = window.getComputedStyle(this._container);
        const paddingLeft = parseFloat(style.paddingLeft);
        const paddingRight = parseFloat(style.paddingRight);
        return ((window.innerWidth - (fullWidth - paddingLeft - paddingRight)) / 2);
    }

    _updateBreakpointConfig(breakpoints, distanceFromEdge, reInit = false) {
        Object.keys(breakpoints).forEach(breakpoint => {
            if (reInit) {
                breakpoints[breakpoint].slidesOffsetBefore ? breakpoints[breakpoint].slidesOffsetBefore = distanceFromEdge : '';
                breakpoints[breakpoint].slidesOffsetAfter ? breakpoints[breakpoint].slidesOffsetAfter = distanceFromEdge : '';
            } else {
                breakpoints[breakpoint].slidesOffsetBefore === this.constructor.getOffsetKey() ? breakpoints[breakpoint].slidesOffsetBefore = distanceFromEdge : '';
                breakpoints[breakpoint].slidesOffsetAfter === this.constructor.getOffsetKey() ? breakpoints[breakpoint].slidesOffsetAfter = distanceFromEdge : '';
            }

        });
    }


    _setDataForSwiper(swiperConfig, reInit = false) {
        const distanceFromEdge = this._getContainerWidth();
        if (reInit) {
            swiperConfig.slidesOffsetBefore ? swiperConfig.slidesOffsetBefore = distanceFromEdge : '';
            swiperConfig.slidesOffsetAfter ? swiperConfig.slidesOffsetAfter = distanceFromEdge : '';
        } else {
            swiperConfig.slidesOffsetBefore === this.constructor.getOffsetKey() ? swiperConfig.slidesOffsetBefore = distanceFromEdge : '';
            swiperConfig.slidesOffsetAfter === this.constructor.getOffsetKey() ? swiperConfig.slidesOffsetAfter = distanceFromEdge : '';
        }


        if (swiperConfig.breakpoints) {
            this._updateBreakpointConfig(swiperConfig.breakpoints, distanceFromEdge, reInit);
        }

        return swiperConfig;
    }

    _reinitSlider() {
        this._initedSliders.forEach((value, ind) => {
            this._initedSliders.get(ind).slider.destroy();
            const updatedConfig = this._setDataForSwiper(this._initedSliders.get(ind).config, true);
            this._initedSliders.set(ind, {
                config: updatedConfig,
                slider: new Swiper(document.querySelector(`${this._selector}[data-slider="${ind}"] .swiper`), updatedConfig)
            });
        })
    }

    _addNavigation(config, selector, ind) {
        config.navigation = {
            nextEl: `${selector}[data-slider='${ind}'] .nav-next`,
            prevEl: `${selector}[data-slider='${ind}'] .nav-prev`,
        }
        return config;
    }

    initSwipers(swiperConfig, navNeeded = false) {
        this._initedSliders = new Map();

        this._sliders.forEach((slider, ind) => {
            slider.setAttribute('data-slider', ind);
            let updatedConfig = this._setDataForSwiper(swiperConfig);
            if (navNeeded) {
                updatedConfig = this._addNavigation(updatedConfig, this._selector, ind);
            }
            this._initedSliders.set(ind, {
                config: updatedConfig,
                slider: new Swiper(slider.querySelector('.swiper'), updatedConfig),
            });
        });


        window.addEventListener('resize', debounce(this._reinitSlider, 100));
    }

    static getOffsetKey() {
        return 'SHOULD_BE_COUNTED';
    }
}


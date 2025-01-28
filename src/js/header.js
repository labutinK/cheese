import {slideDown, slideUp} from "./utils";
import debounce from "lodash/debounce";

export class CheeseHeader {
    constructor(header) {
        this._header = header;
        this._body = document.querySelector('body');
        this._burgerIcon = this._header.querySelector('.header__burger-icon');
        this._searchIcon = this._header.querySelector('.header__search-icon');
        this._closeBurgerIcon = this._header.querySelector('.header__close-burger');
        this._closeSearchIcon = this._header.querySelector('.header__close-search');
        this._burger = this._header.querySelector('.header__nav');
        this._searchBurger = this._header.querySelector('.header__search');
        this._catalogCategories = this._header.querySelectorAll('.header__with-submenu');
        this._categoriesItems = new Map();
        this._addHandlers();
        this._isDesktop = window.innerWidth >= 1141;
        this._isNotMobile = window.innerWidth >= 768;
    }

    _clickOutBurger = ({target}) => {
        if (!this._header.hasAttribute('data-animating')) {
            if (!target.classList.contains('header') && !target.closest('header')) {
                this._closeBurger();
            }
        }
    }
    _clickOutSearch = ({target}) => {
        if (!this._header.hasAttribute('data-animating')) {
            if (!target.classList.contains('header') && !target.closest('header')) {
                this._closeSearchBurger();
            }
        }
    }

    _openSearchBurger() {
        this._searchBurger.setAttribute('data-open', true);
        this._searchIcon.setAttribute('data-open', true);
        this._body.classList.add('blocked');
        document.addEventListener('click', this._clickOutSearch);
        slideDown(this._searchBurger, 300, () => {
            this._header.removeAttribute('data-animating');
        });
    }

    _openBurger() {
        this._burger.setAttribute('data-open', true);
        this._burgerIcon.setAttribute('data-open', true);
        this._body.classList.add('blocked');
        document.addEventListener('click', this._clickOutBurger);
        slideDown(this._burger, 300, () => {
            this._header.removeAttribute('data-animating');
        });
    }

    _resetStylesForDesktopForSearch() {
        this._searchBurger.style = '';
        this._searchIcon.removeAttribute('data-open');
        this._searchBurger.removeAttribute('data-open');
    }

    _resetStylesForDesktop() {
        this._burger.style = '';
        this._burgerIcon.removeAttribute('data-open');
        this._burger.removeAttribute('data-open');
        this._body.classList.remove('blocked');
        this._isDesktop = true;
        this._catalogCategories.forEach((cat, ind) => {
            const subCat = cat.querySelector(`.header__submenu`);
            subCat.classList.remove('header__submenu--active');
            cat.classList.remove('header__with-submenu--active');
        });
    }

    _closeBurger() {
        this._burgerIcon.removeAttribute('data-open');
        document.removeEventListener('click', this._clickOutBurger);
        slideUp(this._burger, 300, () => {
            this._header.removeAttribute('data-animating');
            this._burger.removeAttribute('data-open');
            this._body.classList.remove('blocked');
        });
    }

    _closeSearchBurger() {
        this._searchIcon.removeAttribute('data-open');
        document.removeEventListener('click', this._clickOutSearch);
        slideUp(this._searchBurger, 300, () => {
            this._header.removeAttribute('data-animating');
            this._searchBurger.removeAttribute('data-open');
            this._body.classList.remove('blocked');
        });
    }

    _addHandlers() {
        this._burgerIcon.addEventListener('click', () => {
            if (!this._header.hasAttribute('data-animating')) {
                this._header.setAttribute('data-animating', true);
                if (this._burger.hasAttribute('data-open')) {
                    this._closeBurger();
                } else {
                    if (!this._isNotMobile) {
                        slideUp(this._searchBurger, 0, () => {
                            this._searchIcon.removeAttribute('data-open');
                            this._searchBurger.removeAttribute('data-open');
                        });
                    }
                    this._openBurger();
                }
            }
        })

        this._searchIcon.addEventListener('click', () => {
            if (!this._header.hasAttribute('data-animating')) {
                this._header.setAttribute('data-animating', true);
                if (this._searchBurger.hasAttribute('data-open')) {
                    this._closeSearchBurger();
                } else {
                    slideUp(this._burger, 0, () => {
                        this._burgerIcon.removeAttribute('data-open');
                        this._burger.removeAttribute('data-open');
                    });
                    this._openSearchBurger();
                }
            }
        })

        this._closeBurgerIcon.addEventListener('click', () => {
            if (!this._header.hasAttribute('data-animating')) {
                this._header.setAttribute('data-animating', true);
                this._closeBurger();
            }
        })

        this._closeSearchIcon.addEventListener('click', () => {
            if (!this._header.hasAttribute('data-animating')) {
                this._header.setAttribute('data-animating', true);
                this._closeSearchBurger();
            }
        })


        window.addEventListener('resize', debounce(() => {
            this._isDesktop = window.innerWidth >= 1141;
            this._isNotMobile = window.innerWidth >= 768;

            if (this._isDesktop) {
                this._resetStylesForDesktop();
            }
            if (this._isNotMobile) {
                this._resetStylesForDesktopForSearch();
            }

        }, 100));


        this._catalogCategories.forEach((cat, ind) => {
            const subCat = cat.querySelector(`.header__submenu`);
            const subIcon = cat.querySelector(`.header__sub-icon`);
            if (subCat) {
                this._categoriesItems.set(cat, {
                    submenuElement: subCat,
                    timeoutId: null,
                    open: ind === 0,
                    subIcon: subIcon
                });
                cat.addEventListener('mouseenter', this._categoryMouseEnterHandler.bind(this, cat));
                cat.addEventListener('mouseleave', this._categoryMouseLeaveHandler.bind(this, cat));
                subIcon.addEventListener('click', this._categoryClickHandler.bind(this, cat));
            }
        });
    }

    _categoryClickHandler(category) {
        if (!this._isDesktop) {
            let submenu = this._categoriesItems.get(category);
            const submenuElement = submenu.submenuElement;
            if (!category.hasAttribute('data-animating')) {
                category.setAttribute('data-animating', true);
                if (category.classList.contains('header__with-submenu--active')) {
                    submenuElement.classList.remove('header__submenu--active');
                    category.classList.remove('header__with-submenu--active');
                } else {
                    submenuElement.classList.add('header__submenu--active');
                    category.classList.add('header__with-submenu--active');
                }
                category.removeAttribute('data-animating');
            }
        }
    }

    _closeSubcat(category) {
        let submenu = this._categoriesItems.get(category);
        const submenuElement = submenu.submenuElement;
        if (submenuElement) {
            submenuElement.classList.remove('header__submenu--active');
            category.classList.remove('header__with-submenu--active');
            submenu.open = false;
        }
    }

    _openSubCat(category) {
        let submenu = this._categoriesItems.get(category);
        const submenuElement = submenu.submenuElement;
        if (submenuElement) {
            submenuElement.classList.add('header__submenu--active');
            category.classList.add('header__with-submenu--active');
            submenu.open = true;
        }
    }

    _closeAllSubCategories() {
        for (let [category, submenu] of this._categoriesItems) {
            if (submenu.open === true) {
                this._closeSubcat(category);
            }
        }
    }

    _categoryMouseLeaveHandler(category) {
        if (this._isDesktop) {
            const submenu = this._categoriesItems.get(category);
            submenu.timeoutId = setTimeout(() => {
                this._closeSubcat(category);
            }, 400);
        }
    }

    _categoryMouseEnterHandler(category) {
        if (this._isDesktop) {
            const submenu = this._categoriesItems.get(category);
            if (submenu.timeoutId) {
                clearTimeout(submenu.timeoutId);
                submenu.timeoutId = null;
            }
            if (this._categoriesItems.has(category)) {
                this._closeAllSubCategories();
                this._openSubCat(category);
            }
        }
    }

}
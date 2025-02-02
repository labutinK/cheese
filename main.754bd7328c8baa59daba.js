/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/header */ "./src/js/header.js");
/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/utils */ "./src/js/utils.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/dist/inputmask.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");



__webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");


swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper_modules__WEBPACK_IMPORTED_MODULE_4__.Thumbs, swiper_modules__WEBPACK_IMPORTED_MODULE_4__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_4__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_4__.Autoplay, swiper_modules__WEBPACK_IMPORTED_MODULE_4__.FreeMode, swiper_modules__WEBPACK_IMPORTED_MODULE_4__.EffectCards, swiper_modules__WEBPACK_IMPORTED_MODULE_4__.EffectFade, swiper_modules__WEBPACK_IMPORTED_MODULE_4__.Controller]);
document.addEventListener("DOMContentLoaded", function (event) {
  var header = document.querySelector('.header');
  new _js_header__WEBPACK_IMPORTED_MODULE_0__.CheeseHeader(header);
  new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('.welcome-slider .swiper', {
    spaceBetween: 0,
    loop: true,
    preloadImages: false,
    lazy: true,
    pagination: {
      el: '.welcome-slider__pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.welcome-slider .slider-next',
      prevEl: '.welcome-slider .slider-prev'
    }
  });
  new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('.recently-viewed__slider .swiper', {
    spaceBetween: 0,
    slidesPerView: 1,
    preloadImages: false,
    lazy: true,
    breakpoints: {
      576: {
        spaceBetween: 32,
        slidesPerView: 2
      },
      768: {
        spaceBetween: 20,
        slidesPerView: 3
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 4
      },
      1140: {
        spaceBetween: 32,
        slidesPerView: 4
      }
    },
    pagination: {
      el: '.recently-viewed__pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.recently-viewed__slider .slider-next',
      prevEl: '.recently-viewed__slider .slider-prev'
    }
  });
  new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('.news-slider__content .swiper', {
    spaceBetween: 0,
    slidesPerView: 1,
    preloadImages: false,
    lazy: true,
    breakpoints: {
      576: {
        spaceBetween: 32,
        slidesPerView: 2
      },
      768: {
        spaceBetween: 32,
        slidesPerView: 3
      },
      1140: {
        spaceBetween: 32,
        slidesPerView: 4
      }
    },
    pagination: {
      el: '.news-slider__pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.news-slider__content .slider-next',
      prevEl: '.news-slider__content .slider-prev'
    }
  });
  new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('.brands__slider .swiper', {
    spaceBetween: 50,
    slidesPerView: 1,
    preloadImages: false,
    lazy: true,
    breakpoints: {
      600: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 4
      },
      1040: {
        slidesPerView: 5
      },
      1280: {
        slidesPerView: 6
      },
      1440: {
        slidesPerView: 7
      },
      1560: {
        slidesPerView: 8
      }
    },
    pagination: {
      el: '.brands__pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.brands .slider-next',
      prevEl: '.brands .slider-prev'
    }
  });
  var cardsSlider = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('.slider-cards__content .swiper', {
    speed: 400,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    simulateTouch: false,
    slideToClickedSlide: true,
    breakpoints: {
      576: {
        centeredSlides: true,
        slidesPerView: 3
      },
      992: {
        speed: 400,
        centeredSlides: true,
        slidesPerView: 5
      }
    },
    pagination: {
      el: '.slider-cards__pagination',
      type: 'bullets'
    },
    navigation: {
      nextEl: '.slider-cards__content .slider-next',
      prevEl: '.slider-cards__content .slider-prev'
    },
    on: {
      init: function init() {
        if (window.innerWidth >= 992) {
          var wrapper = document.querySelector('.slider-cards__content .swiper-wrapper');
          var slide = document.querySelector('.slider-cards__content .swiper-slide');
          if (!slide) return;

          // Получаем ширину из inline-стиля
          var slideWidth = slide.getAttribute('style') ? parseFloat(slide.getAttribute('style').match(/width:\s*(\d+\.?\d*)px/)[1]) : 0; // Извлекаем ширину из inline стиля

          var marginOffset = slideWidth / this.params.slidesPerView;

          // Устанавливаем отступ сразу после инициализации
          wrapper.style.marginLeft = "".concat(marginOffset + 15, "px");
        }
      },
      transitionStart: function transitionStart() {
        if (window.innerWidth >= 992) {
          var wrapper = document.querySelector('.slider-cards__content .swiper-wrapper');
          var slide = document.querySelector('.slider-cards__content .swiper-slide');
          if (!slide) return;
          var slideWidth = slide.getAttribute('style') ? parseFloat(slide.getAttribute('style').match(/width:\s*(\d+\.?\d*)px/)[1]) : 0;
          var marginOffset = slideWidth / this.params.slidesPerView;
          var transformMatrix = window.getComputedStyle(wrapper).transform;
          if (transformMatrix !== 'none') {
            var matrixValues = transformMatrix.match(/matrix.*\((.+)\)/)[1].split(', ');
            var translateX = parseFloat(matrixValues[4]); // Берем X-координату transform

            if (translateX > this.translate) {
              wrapper.style.marginLeft = "".concat(marginOffset + 15, "px");
            } else {
              wrapper.style.marginLeft = '0px';
            }
          }
        }
      }
    }
  });
  var slides = document.querySelectorAll('.slider-cards .swiper-slide');
  slides.forEach(function (slide) {
    slide.addEventListener('click', function (e) {
      var currentSlide = e.target.classList.contains('swiper-slide') ? e.target : e.target.closest('.swiper-slide'); // Слайд, по которому кликнули
      var nextSlide = currentSlide.nextElementSibling; // Следующий слайд

      if (!currentSlide.classList.contains('swiper-slide-active')) {
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
    var header = document.querySelector('header');
    var main = document.querySelector('main');
    if (header && main) {
      var headerHeight = header.offsetHeight;
      document.documentElement.style.setProperty('--header-height', "".concat(headerHeight, "px"));
      main.style.marginTop = "var(--header-height)";
    }
  }

  // Запуск при загрузке и при изменении размеров окна
  updateHeaderHeight();
  window.addEventListener('resize', updateHeaderHeight);
  var filterBoxes = document.querySelectorAll('.filter-box');
  if (filterBoxes.length) {
    filterBoxes.forEach(function (filterBox) {
      var title = filterBox.querySelector('.filter-box__title');
      var list = filterBox.querySelector('.filter-box__list');
      title.addEventListener('click', function () {
        if (!filterBox.hasAttribute('data-in-process')) {
          filterBox.setAttribute('data-in-process', true);
          if (filterBox.classList.contains('filter-box--open')) {
            filterBox.classList.remove('filter-box--open');
            (0,_js_utils__WEBPACK_IMPORTED_MODULE_1__.slideUp)(list, 300, function () {
              filterBox.removeAttribute('data-in-process');
            });
          } else {
            filterBox.classList.add('filter-box--open');
            (0,_js_utils__WEBPACK_IMPORTED_MODULE_1__.slideDown)(list, 300, function () {
              filterBox.removeAttribute('data-in-process');
            });
          }
        }
      });
    });
  }
  var form = document.getElementById("feedback-form");
  if (form) {
    var validator = new FormValidator(form);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      var fd = new FormData(form);
      validator.submit(function () {
        var _form$closest;
        var item = document.querySelector('#formCallbackSuccess').content.cloneNode(true);
        (_form$closest = form.closest('[data-replace-wrapper]')) === null || _form$closest === void 0 || _form$closest.replaceWith(item);
        var headerHeight = header.offsetHeight;
        var elementPosition = form.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - headerHeight,
          behavior: "smooth"
        });
      }, function () {
        var element = document.querySelector(".form-input--error");
        var headerHeight = header.offsetHeight;

        // Вычисляем координаты элемента
        var elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

        // Прокрутка с учётом отступа
        window.scrollTo({
          top: elementPosition - headerHeight,
          behavior: "smooth"
        });
      });
    });
  }

  // Инициализация нижнего слайдера (миниатюры)
  var sideSlider = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('.detail-element--catalog .detail-element__side-slider .swiper', {
    slidesPerView: 2,
    // Показывать по 2 слайда
    watchSlidesProgress: true,
    spaceBetween: 30,
    // Отступ между слайдами
    slideToClickedSlide: true,
    // Переключение главного слайдера при клике
    navigation: {
      nextEl: '.detail-element__side-slider .slider-next',
      prevEl: '.detail-element__side-slider .slider-prev'
    }
  });

  // Инициализация верхнего слайдера (основной)
  var mainSlider = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('.detail-element--catalog .detail-element__main-slider', {
    slidesPerView: 1,
    // Один слайд за раз
    spaceBetween: 0,
    // Без отступов
    thumbs: {
      swiper: sideSlider // Привязка к нижнему слайдеру
    }
  });
  var sideSliderNews = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('.detail-element--news .detail-element__side-slider .swiper', {
    slidesPerView: 3,
    // Показывать по 2 слайда
    watchSlidesProgress: true,
    loop: true,
    spaceBetween: 30,
    // Отступ между слайдами
    slideToClickedSlide: true,
    // Переключение главного слайдера при клике
    navigation: {
      nextEl: '.detail-element__side-slider .slider-next',
      prevEl: '.detail-element__side-slider .slider-prev'
    }
  });

  // Инициализация верхнего слайдера (основной)
  var mainSliderNews = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('.detail-element--news .detail-element__main-slider', {
    slidesPerView: 1,
    // Один слайд за раз
    spaceBetween: 0,
    // Без отступов
    loop: true,
    thumbs: {
      swiper: sideSliderNews // Привязка к нижнему слайдеру
    }
  });
});

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheeseHeader: function() { return /* binding */ CheeseHeader; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var CheeseHeader = /*#__PURE__*/function () {
  function CheeseHeader(header) {
    var _this = this;
    _classCallCheck(this, CheeseHeader);
    _defineProperty(this, "_clickOutBurger", function (_ref) {
      var target = _ref.target;
      if (!_this._header.hasAttribute('data-animating')) {
        if (!target.classList.contains('header') && !target.closest('header')) {
          _this._closeBurger();
        }
      }
    });
    _defineProperty(this, "_clickOutSearch", function (_ref2) {
      var target = _ref2.target;
      if (!_this._header.hasAttribute('data-animating')) {
        if (!target.classList.contains('header') && !target.closest('header')) {
          _this._closeSearchBurger();
        }
      }
    });
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
  return _createClass(CheeseHeader, [{
    key: "_openSearchBurger",
    value: function _openSearchBurger() {
      var _this2 = this;
      this._searchBurger.setAttribute('data-open', true);
      this._searchIcon.setAttribute('data-open', true);
      this._body.classList.add('blocked');
      document.addEventListener('click', this._clickOutSearch);
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.slideDown)(this._searchBurger, 300, function () {
        _this2._header.removeAttribute('data-animating');
      });
    }
  }, {
    key: "_openBurger",
    value: function _openBurger() {
      var _this3 = this;
      this._burger.setAttribute('data-open', true);
      this._burgerIcon.setAttribute('data-open', true);
      this._body.classList.add('blocked');
      document.addEventListener('click', this._clickOutBurger);
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.slideDown)(this._burger, 300, function () {
        _this3._header.removeAttribute('data-animating');
      });
    }
  }, {
    key: "_resetStylesForDesktopForSearch",
    value: function _resetStylesForDesktopForSearch() {
      this._searchBurger.style = '';
      this._searchIcon.removeAttribute('data-open');
      this._searchBurger.removeAttribute('data-open');
    }
  }, {
    key: "_resetStylesForDesktop",
    value: function _resetStylesForDesktop() {
      this._burger.style = '';
      this._burgerIcon.removeAttribute('data-open');
      this._burger.removeAttribute('data-open');
      this._body.classList.remove('blocked');
      this._isDesktop = true;
      this._catalogCategories.forEach(function (cat, ind) {
        var subCat = cat.querySelector(".header__submenu");
        subCat.classList.remove('header__submenu--active');
        cat.classList.remove('header__with-submenu--active');
      });
    }
  }, {
    key: "_closeBurger",
    value: function _closeBurger() {
      var _this4 = this;
      this._burgerIcon.removeAttribute('data-open');
      document.removeEventListener('click', this._clickOutBurger);
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.slideUp)(this._burger, 300, function () {
        _this4._header.removeAttribute('data-animating');
        _this4._burger.removeAttribute('data-open');
        _this4._body.classList.remove('blocked');
      });
    }
  }, {
    key: "_closeSearchBurger",
    value: function _closeSearchBurger() {
      var _this5 = this;
      this._searchIcon.removeAttribute('data-open');
      document.removeEventListener('click', this._clickOutSearch);
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.slideUp)(this._searchBurger, 300, function () {
        _this5._header.removeAttribute('data-animating');
        _this5._searchBurger.removeAttribute('data-open');
        _this5._body.classList.remove('blocked');
      });
    }
  }, {
    key: "_addHandlers",
    value: function _addHandlers() {
      var _this6 = this;
      this._burgerIcon.addEventListener('click', function () {
        if (!_this6._header.hasAttribute('data-animating')) {
          _this6._header.setAttribute('data-animating', true);
          if (_this6._burger.hasAttribute('data-open')) {
            _this6._closeBurger();
          } else {
            if (!_this6._isNotMobile) {
              (0,_utils__WEBPACK_IMPORTED_MODULE_0__.slideUp)(_this6._searchBurger, 0, function () {
                _this6._searchIcon.removeAttribute('data-open');
                _this6._searchBurger.removeAttribute('data-open');
              });
            }
            _this6._openBurger();
          }
        }
      });
      this._searchIcon.addEventListener('click', function () {
        if (!_this6._header.hasAttribute('data-animating')) {
          _this6._header.setAttribute('data-animating', true);
          if (_this6._searchBurger.hasAttribute('data-open')) {
            _this6._closeSearchBurger();
          } else {
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.slideUp)(_this6._burger, 0, function () {
              _this6._burgerIcon.removeAttribute('data-open');
              _this6._burger.removeAttribute('data-open');
            });
            _this6._openSearchBurger();
          }
        }
      });
      this._closeBurgerIcon.addEventListener('click', function () {
        if (!_this6._header.hasAttribute('data-animating')) {
          _this6._header.setAttribute('data-animating', true);
          _this6._closeBurger();
        }
      });
      this._closeSearchIcon.addEventListener('click', function () {
        if (!_this6._header.hasAttribute('data-animating')) {
          _this6._header.setAttribute('data-animating', true);
          _this6._closeSearchBurger();
        }
      });
      window.addEventListener('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function () {
        _this6._isDesktop = window.innerWidth >= 1141;
        _this6._isNotMobile = window.innerWidth >= 768;
        if (_this6._isDesktop) {
          _this6._resetStylesForDesktop();
        }
        if (_this6._isNotMobile) {
          _this6._resetStylesForDesktopForSearch();
        }
      }, 100));
      this._catalogCategories.forEach(function (cat, ind) {
        var subCat = cat.querySelector(".header__submenu");
        var subIcon = cat.querySelector(".header__sub-icon");
        if (subCat) {
          _this6._categoriesItems.set(cat, {
            submenuElement: subCat,
            timeoutId: null,
            open: ind === 0,
            subIcon: subIcon
          });
          cat.addEventListener('mouseenter', _this6._categoryMouseEnterHandler.bind(_this6, cat));
          cat.addEventListener('mouseleave', _this6._categoryMouseLeaveHandler.bind(_this6, cat));
          subIcon.addEventListener('click', _this6._categoryClickHandler.bind(_this6, cat));
        }
      });
    }
  }, {
    key: "_categoryClickHandler",
    value: function _categoryClickHandler(category) {
      if (!this._isDesktop) {
        var submenu = this._categoriesItems.get(category);
        var submenuElement = submenu.submenuElement;
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
  }, {
    key: "_closeSubcat",
    value: function _closeSubcat(category) {
      var submenu = this._categoriesItems.get(category);
      var submenuElement = submenu.submenuElement;
      if (submenuElement) {
        submenuElement.classList.remove('header__submenu--active');
        category.classList.remove('header__with-submenu--active');
        submenu.open = false;
      }
    }
  }, {
    key: "_openSubCat",
    value: function _openSubCat(category) {
      var submenu = this._categoriesItems.get(category);
      var submenuElement = submenu.submenuElement;
      if (submenuElement) {
        submenuElement.classList.add('header__submenu--active');
        category.classList.add('header__with-submenu--active');
        submenu.open = true;
      }
    }
  }, {
    key: "_closeAllSubCategories",
    value: function _closeAllSubCategories() {
      var _iterator = _createForOfIteratorHelper(this._categoriesItems),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            category = _step$value[0],
            submenu = _step$value[1];
          if (submenu.open === true) {
            this._closeSubcat(category);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "_categoryMouseLeaveHandler",
    value: function _categoryMouseLeaveHandler(category) {
      var _this7 = this;
      if (this._isDesktop) {
        var submenu = this._categoriesItems.get(category);
        submenu.timeoutId = setTimeout(function () {
          _this7._closeSubcat(category);
        }, 400);
      }
    }
  }, {
    key: "_categoryMouseEnterHandler",
    value: function _categoryMouseEnterHandler(category) {
      if (this._isDesktop) {
        var submenu = this._categoriesItems.get(category);
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
  }]);
}();

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   slideDown: function() { return /* binding */ slideDown; },
/* harmony export */   slideUp: function() { return /* binding */ slideUp; }
/* harmony export */ });
/* unused harmony export slideToggle */
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var slideUp = function slideUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = "".concat(duration, "ms");
  target.style.boxSizing = 'border-box';
  target.style.height = "".concat(target.offsetHeight, "px");
  // eslint-disable-next-line no-unused-expressions
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(function () {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    callback();
  }, duration);
};

/* SLIDE DOWN */
var slideDown = function slideDown(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  target.style.removeProperty('display');
  var display = window.getComputedStyle(target).display;
  if (display === 'none') {
    display = 'block';
  }
  target.style.display = display;
  var height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  // eslint-disable-next-line no-unused-expressions
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = "".concat(duration, "ms");
  target.style.height = "".concat(height, "px");
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(function () {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    callback();
  }, duration);
};

/* TOOGLE */
var slideToggle = function slideToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
};
var accordeons = document.querySelectorAll('.faq-item');
if (accordeons.length) {
  var _iterator = _createForOfIteratorHelper(accordeons),
    _step;
  try {
    var _loop = function _loop() {
      var accordeon = _step.value;
      var button = accordeon.querySelector('.faq-item__question');
      button.addEventListener('click', function () {
        var _iterator2 = _createForOfIteratorHelper(accordeons),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var otherAccordeon = _step2.value;
            if (otherAccordeon !== accordeon) {
              otherAccordeon.classList.remove('faq-item--active');
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        accordeon.classList.add('faq-item--active');
      });
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

// faq-page
var faqs = document.querySelectorAll('.faq-block');
if (faqs.length) {
  var _iterator3 = _createForOfIteratorHelper(faqs),
    _step3;
  try {
    var _loop2 = function _loop2() {
      var accordeon = _step3.value;
      var button = accordeon.querySelector('.faq-block__question');
      var answer = accordeon.querySelector('.faq-block__answer');
      button.addEventListener('click', function () {
        if (accordeon.classList.contains('faq-block--active')) {
          slideUp(answer, 300, function () {});
          accordeon.classList.remove('faq-block--active');
        } else {
          var _iterator4 = _createForOfIteratorHelper(faqs),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var otherAccordeon = _step4.value;
              if (otherAccordeon !== accordeon) {
                otherAccordeon.classList.remove('faq-block--active');
                var otherAnswer = otherAccordeon.querySelector('.faq-block__answer');
                slideUp(otherAnswer, 300, function () {});
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          slideDown(answer, 300, function () {});
          accordeon.classList.add('faq-block--active');
        }
      });
    };
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhefo"] = self["webpackChunkhefo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.754bd7328c8baa59daba.js.map
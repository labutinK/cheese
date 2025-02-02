function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(form) {
    var _this = this;
    _classCallCheck(this, FormValidator);
    this.form = form;
    this.elements = [];
    this.DEFAULT_ERROR_TEXT = 'Поле некорректно';
    this.sidebarArray = [];
    // this.submitButton = this.form.querySelector('[type="submit"]');
    // this.submitButton.setAttribute('disabled', '');
    this.VALIDATE_FUNCTIONS = {
      formatValidate: function formatValidate(el, format) {
        if (format.test(el.value) === false) {
          _this.addError(el, 'formatError');
          return false;
        } else {
          return true;
        }
      },
      mailValidate: function mailValidate(el) {
        var reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        return _this.VALIDATE_FUNCTIONS.formatValidate(el, reg);
      },
      checkRange: function checkRange(el) {
        var minSymbols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var maxSymbols = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
        var max = _this.getDataParam(el, 'rangeMax');
        if (max) {
          maxSymbols = parseInt(max);
        }
        var min = _this.getDataParam(el, 'rangeMin');
        if (min >= 0) {
          minSymbols = parseInt(min);
        }
        if (el.value.length > maxSymbols || el.value.length < minSymbols) {
          _this.addError(el, 'rangeError');
          return false;
        } else {
          return true;
        }
      },
      requiredValidate: function requiredValidate(el) {
        return _this.VALIDATE_FUNCTIONS.checkRange(el, 1, 100);
      },
      simpleInputValidate: function simpleInputValidate(el) {
        return _this.VALIDATE_FUNCTIONS.checkRange(el, 0, 40);
      },
      textareaValidate: function textareaValidate(el) {
        return _this.VALIDATE_FUNCTIONS.checkRange(el, 0, 300);
      },
      inputmaskValidate: function inputmaskValidate(el) {
        if (!el.inputmask.isComplete()) {
          _this.addError(el, 'formatError');
          return false;
        }
        return true;
      },
      lettersOnlyValidate: function lettersOnlyValidate(el) {
        var reg = /^(?!.*[!@#$%^&(),.+=/\][{}?><":;|1234567890])/;
        return _this.VALIDATE_FUNCTIONS.formatValidate(el, reg);
      },
      digitsOnlyValidate: function digitsOnlyValidate(el) {
        var reg = /^\d*$/;
        if (!_this.VALIDATE_FUNCTIONS.checkRange(el)) return false;
        return _this.VALIDATE_FUNCTIONS.formatValidate(el, reg);
      },
      agreeValidate: function agreeValidate(el) {
        return el.checked;
      },
      dateValidate: function dateValidate(el) {
        if (!FormValidator.isDateValid(el.value)) {
          _this.addError(el, 'formatError');
          return false;
        }
        var age = FormValidator.getAge(el.value);
        var minAge = el.dataset.rangeMin ? el.dataset.rangeMin : 18;
        var dataMax = _this.getDataParam(el, 'rangeMax');
        var maxAge = dataMax ? dataMax : 100;
        if (isNaN(age)) {
          _this.addError(el, 'formatError');
          return false;
        }
        if (age < minAge || age > maxAge) {
          _this.addError(el, 'rangeError');
          return false;
        }
        return true;
      },
      passwordFormat: function passwordFormat(el) {
        var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*()\]{}\\\-\[,'"/_;.+=:]).{8,}$/;
        return _this.VALIDATE_FUNCTIONS.formatValidate(el, reg);
      },
      getSecondValueOfPassword: function getSecondValueOfPassword(el) {
        var classToCompare = '';
        if (el.closest('.form-input').classList.contains('form-input--password')) {
          classToCompare = 'repeat-password';
        } else if (el.closest('.form-input').classList.contains('form-input--repeat-password')) {
          classToCompare = 'password';
        }
        var passBoxToCompare = el.closest('.form-input').parentElement.querySelector(".form-input--".concat(classToCompare));
        if (passBoxToCompare) {
          var passInputToCompare = passBoxToCompare.querySelector('input');
          return [passBoxToCompare, passInputToCompare];
        }
        return [null, null];
      },
      passwordEqualValidate: function passwordEqualValidate(el) {
        var _this$VALIDATE_FUNCTI = _this.VALIDATE_FUNCTIONS.getSecondValueOfPassword(el),
          _this$VALIDATE_FUNCTI2 = _slicedToArray(_this$VALIDATE_FUNCTI, 2),
          passBoxToCompare = _this$VALIDATE_FUNCTI2[0],
          passInputToCompare = _this$VALIDATE_FUNCTI2[1];
        if (_this.getDataParam(el, 'canBeEmpty') && el.value === '' && passInputToCompare.value === '') {
          return true;
        }
        if (passBoxToCompare === null) {
          if (!_this.VALIDATE_FUNCTIONS.passwordFormat(el)) {
            _this.addError(el, 'formatError');
            return false;
          }
          return true;
        }
        var passwordValueToCompare = passInputToCompare.value;
        var firstPassFormatStatus = _this.VALIDATE_FUNCTIONS.passwordFormat(el);
        var secondPassFormatStatus = _this.VALIDATE_FUNCTIONS.passwordFormat(passInputToCompare);
        if (firstPassFormatStatus && secondPassFormatStatus) {
          if (el.value === passwordValueToCompare) {
            FormValidator.displayStatus(passBoxToCompare, true);
            return true;
          }
          _this.addError(el, 'passwordNonEqual');
          _this.addError(passInputToCompare, 'passwordNonEqual');
          FormValidator.displayStatus(passBoxToCompare, false);
          return false;
        }
        if (!firstPassFormatStatus || !secondPassFormatStatus) {
          if (el.value === passwordValueToCompare) {
            _this.addError(el, 'formatError');
            _this.addError(passInputToCompare, 'formatError');
            FormValidator.displayStatus(passBoxToCompare, false);
            return false;
          }
          if (!secondPassFormatStatus && firstPassFormatStatus) {
            _this.addError(passInputToCompare, 'passwordNonEqual');
            FormValidator.displayStatus(passBoxToCompare, false);
            return true;
          }
          if (!firstPassFormatStatus && secondPassFormatStatus) {
            _this.addError(el, 'formatError');
            return false;
          }
          return false;
        }
      }
    };
    this.VALIDATE_CLASSES = {
      'form-input--mail': this.VALIDATE_FUNCTIONS.mailValidate,
      'form-input--required': this.VALIDATE_FUNCTIONS.requiredValidate,
      'form-input--letters-only': this.VALIDATE_FUNCTIONS.lettersOnlyValidate,
      'form-input--digits-only': this.VALIDATE_FUNCTIONS.digitsOnlyValidate,
      'form-input--agree': this.VALIDATE_FUNCTIONS.agreeValidate,
      'form-input--password': this.VALIDATE_FUNCTIONS.passwordEqualValidate,
      'form-input--repeat-password': this.VALIDATE_FUNCTIONS.passwordEqualValidate,
      'form-input--date': this.VALIDATE_FUNCTIONS.dateValidate,
      'form-input--inputmask': this.VALIDATE_FUNCTIONS.inputmaskValidate
    };
    this.sidebarItems();
    this.addInputHandlers();
    this.initEyeButton();
    this.initPrompts();
    this.initDateField();
    this.addInputMasks();
    this.additionalCode();
  }
  return _createClass(FormValidator, [{
    key: "sidebarItems",
    value: function sidebarItems() {
      var _this2 = this;
      var sidebarItems = document.querySelectorAll('[data-tab]');
      var formItems = document.querySelectorAll('[data-val-tab]');
      if (sidebarItems.length && formItems.length) {
        formItems.forEach(function (formItem, ind) {
          var dataVal = formItem.getAttribute('data-val-tab');
          var _iterator = _createForOfIteratorHelper(sidebarItems),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var elem = _step.value;
              if (elem.getAttribute('data-tab') === dataVal) {
                _this2.sidebarArray[dataVal] = [formItem, sidebarItems[ind]];
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        });
      }
    }
  }, {
    key: "addError",
    value: function addError(el, dataField) {
      var inputBox = el.closest('.form-input');
      var errorBox = inputBox.querySelector('.form-input__error-text');
      var dataMes = this.getDataParam(el, dataField);
      var errorMessage = dataMes ? dataMes : this.DEFAULT_ERROR_TEXT;
      if (errorBox) {
        errorBox.textContent = errorMessage;
      } else {
        inputBox.append(FormValidator.createErrorBox(el, errorMessage));
      }
    }
  }, {
    key: "getDataParam",
    value: function getDataParam(el, dataParam) {
      var _iterator2 = _createForOfIteratorHelper(this.elements),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var elem = _step2.value;
          if (elem.element === el) {
            if (elem[dataParam]) {
              return elem[dataParam];
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "addInputHandlers",
    value: function addInputHandlers() {
      var _this3 = this;
      var formInputBoxes = this.form.querySelectorAll('.form-input');
      if (formInputBoxes.length) {
        formInputBoxes.forEach(function (inputBox, ind) {
          var simpleField = true;
          for (var className in _this3.VALIDATE_CLASSES) {
            if (inputBox.classList.contains(className)) {
              simpleField = false;
              var inputField = inputBox.querySelector('input') ? inputBox.querySelector('input') : inputBox.querySelector('textarea') ? inputBox.querySelector('textarea') : null;
              var obj = {
                element: inputField,
                rangeMin: parseInt(inputBox.getAttribute('data-min')) >= 0 ? parseInt(inputBox.getAttribute('data-min')) : 0,
                rangeMax: parseInt(inputBox.getAttribute('data-max')) ? parseInt(inputBox.getAttribute('data-max')) : 1000,
                rangeError: inputBox.getAttribute('data-range') ? inputBox.getAttribute('data-range') : _this3.DEFAULT_ERROR_TEXT,
                formatError: inputBox.getAttribute('data-format') ? inputBox.getAttribute('data-format') : _this3.DEFAULT_ERROR_TEXT,
                inputMask: inputBox.getAttribute('data-inputmask') ? inputBox.getAttribute('data-inputmask') : null
                // Другие атрибуты, если есть
              };
              if (className === 'form-input--repeat-password' || className === 'form-input--password') {
                obj.passwordNonEqual = inputBox.getAttribute('data-nonequal') ? inputBox.getAttribute('data-nonequal') : _this3.DEFAULT_ERROR_TEXT;
                if (inputBox.hasAttribute('data-canbeempty')) {
                  obj.canBeEmpty = true;
                }
              }
              _this3.elements[ind] = obj;
              if (inputField) {
                _this3.focusField(inputBox, inputField, _this3.VALIDATE_CLASSES[className]);
              }
              break;
            }
          }
          if (simpleField) {
            var _inputField = inputBox.querySelector('input');
            var textAreaField = inputBox.querySelector('textarea');
            if (_inputField) {
              _this3.elements[ind] = {
                element: _inputField,
                rangeMin: inputBox.getAttribute('data-min') ? inputBox.getAttribute('data-min') : 0,
                rangeMax: inputBox.getAttribute('data-max') ? inputBox.getAttribute('data-max') : 1000,
                rangeError: inputBox.getAttribute('data-range') ? inputBox.getAttribute('data-range') : _this3.DEFAULT_ERROR_TEXT,
                formatError: inputBox.getAttribute('data-format') ? inputBox.getAttribute('data-format') : _this3.DEFAULT_ERROR_TEXT
                // Другие атрибуты, если есть
              };
              _this3.focusField(inputBox, _inputField, _this3.VALIDATE_FUNCTIONS.simpleInputValidate);
            } else if (textAreaField) {
              _this3.elements[ind] = {
                element: textAreaField,
                rangeMin: inputBox.getAttribute('data-min') ? inputBox.getAttribute('data-min') : 0,
                rangeMax: inputBox.getAttribute('data-max') ? inputBox.getAttribute('data-max') : 1000,
                rangeError: inputBox.getAttribute('data-range') ? inputBox.getAttribute('data-range') : _this3.DEFAULT_ERROR_TEXT,
                formatError: inputBox.getAttribute('data-format') ? inputBox.getAttribute('data-format') : _this3.DEFAULT_ERROR_TEXT
              };
              _this3.focusField(inputBox, textAreaField, _this3.VALIDATE_FUNCTIONS.textareaValidate);
            }
          }
        });
      }
    }

    // submitButtonStatus() {
    //     if (this.form.querySelector('.form-input--error')) {
    //         this.submitButton.setAttribute('disabled', true);
    //     } else {
    //         this.submitButton.removeAttribute('disabled');
    //     }
    // }
  }, {
    key: "focusField",
    value: function focusField(inputBox, inputField, validateFunc) {
      inputField.addEventListener('input', function () {
        var successStatus = validateFunc(inputField);
        FormValidator.displayStatus(inputBox, successStatus);
        // this.submitButtonStatus();
      });
    }
  }, {
    key: "initEyeButton",
    value: function initEyeButton() {
      var passwordEyes = this.form.querySelectorAll('.password-eye');
      if (passwordEyes.length) {
        passwordEyes.forEach(function (passwordEye) {
          // When the user clicks on the password field, show the message box
          // eslint-disable-next-line no-undef
          var pasInput = passwordEye.previousElementSibling;
          if (pasInput) {
            passwordEye.addEventListener('click', function () {
              if (pasInput.type === 'password') {
                pasInput.type = 'text';
              } else {
                pasInput.type = 'password';
              }
            });
          }
        });
      }
    }
  }, {
    key: "initPrompts",
    value: function initPrompts() {
      var prompts = this.form.querySelectorAll('.prompt');
      if (prompts.length) {
        var clickOutPrompt = function clickOutPrompt(evt) {
          if (!evt.target.classList.contains('prompt') && !evt.target.closest('.prompt')) {
            prompts.forEach(function (prompt) {
              prompt.classList.remove('prompt--open');
            });
            document.removeEventListener('click', clickOutPrompt);
          }
        };
        prompts.forEach(function (prompt) {
          var pasInput = prompt.previousElementSibling;
          if (pasInput) {
            prompt.addEventListener('click', function (evt) {
              evt.stopPropagation();
              if (prompt.classList.contains('prompt--open')) {
                prompt.classList.remove('prompt--open');
                document.removeEventListener('click', clickOutPrompt);
              } else {
                prompt.classList.add('prompt--open');
                document.addEventListener('click', clickOutPrompt);
              }
            });
          }
        });
      }
    }
  }, {
    key: "initDateField",
    value: function initDateField() {
      var dateFields = this.form.querySelectorAll('.form-input--date input[data-min]');
      var bdFields = this.form.querySelectorAll('.form-input--date');
      if (bdFields.length) {
        bdFields.forEach(function (el) {
          var input = el.querySelector('input');
          Inputmask('99.99.9999', {
            placeholder: 'dd.mm.yyyy'
          }).mask(input);
        });
      }
    }
  }, {
    key: "addInputMasks",
    value: function addInputMasks() {
      var _this4 = this;
      var inputmaskFields = this.form.querySelectorAll('.form-input--inputmask input');
      if (inputmaskFields.length) {
        inputmaskFields.forEach(function (el) {
          var param = _this4.getDataParam(el, 'inputMask');
          if (param.startsWith("alias")) {
            var inputmaskVal = param.replace(/^(alias).*/, "$1");
            Inputmask({
              alias: "email"
            }).mask(el);
          } else if (param) {
            Inputmask(param).mask(el);
          }
        });
      }
    }
  }, {
    key: "cleanForm",
    value: function cleanForm() {
      var formInputs = this.form.querySelectorAll('input, textarea');
      Array.prototype.forEach.call(formInputs, function (el) {
        if (el.classList.contains('form-agree')) el.checked = false;else el.value = '';
      });
    }
  }, {
    key: "additionalCode",
    value: function additionalCode() {
      var starsInputs = this.form.querySelectorAll('.stars-input');
      if (starsInputs.length) {
        starsInputs.forEach(function (starsInput) {
          var inpFields = starsInput.querySelectorAll('input');
          var hiddenInp = starsInput.querySelector('input[type="hidden"]');
          var _loop = function _loop(i) {
            inpFields[i].addEventListener('change', function (evt) {
              for (var k = 0; k < inpFields.length; k++) {
                if (k <= i) {
                  inpFields[k].checked = true;
                  hiddenInp.value = k;
                } else {
                  inpFields[k].checked = false;
                }
              }
            });
          };
          for (var i = 0; i < inpFields.length; i++) {
            _loop(i);
          }
        });
      }
    }
  }, {
    key: "validate",
    value: function validate() {
      //добавление обработчиков на инпут с валидацией поля
      var clickEvent = new Event('input');
      var inputBoxes = this.form.querySelectorAll('.form-input');
      if (inputBoxes.length) {
        inputBoxes.forEach(function (inputBox) {
          var inputField = inputBox.querySelector('input') ? inputBox.querySelector('input') : inputBox.querySelector('textarea');
          if (inputField) inputField.dispatchEvent(clickEvent);
        });
      }
      return !this.form.querySelector('.form-input--error');
    }
  }, {
    key: "submit",
    value: function submit(onSubmitSuccess, onSubmitError) {
      var isValid = this.validate();
      if (isValid) {
        onSubmitSuccess();
      } else {
        onSubmitError();
      }
    }
  }], [{
    key: "isDateValid",
    value: function isDateValid(dateString) {
      var day = parseInt(dateString.substring(0, 2));
      var month = parseInt(dateString.substring(3, 5));
      var year = parseInt(dateString.substring(6, 10));
      var isValidDate = month >= 1 && month <= 12 && day >= 1 && day <= new Date(year, month, 0).getDate();
      if (!isValidDate) {
        return false;
      }
      return true;
    }
  }, {
    key: "getAge",
    value: function getAge(dateString) {
      var day = parseInt(dateString.substring(0, 2));
      var month = parseInt(dateString.substring(3, 5));
      var year = parseInt(dateString.substring(6, 10));
      var today = new Date();
      var birthDate = new Date(year, month - 1, day); // 'month - 1' т.к. нумерация месяцев начинается с 0
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
        age--;
      }
      return age;
    }
  }, {
    key: "createErrorBox",
    value: function createErrorBox(el, errorMessage) {
      var newErrorBox = document.createElement('span');
      newErrorBox.classList.add('form-input__error-text');
      newErrorBox.textContent = errorMessage;
      return newErrorBox;
    }

    //отрисовка ошибок - удачи для коробок с инпутами
  }, {
    key: "displayStatus",
    value: function displayStatus(inputBox, successStatus) {
      if (successStatus) {
        inputBox.classList.remove('form-input--error');
        inputBox.classList.add('form-input--success');
      } else {
        inputBox.classList.add('form-input--error');
        inputBox.classList.remove('form-input--success');
      }
    }
  }]);
}();
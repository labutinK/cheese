class FormValidator {
    sidebarItems() {
        const sidebarItems = document.querySelectorAll('[data-tab]');
        const formItems = document.querySelectorAll('[data-val-tab]');
        if (sidebarItems.length && formItems.length) {
            formItems.forEach((formItem, ind) => {
                const dataVal = formItem.getAttribute('data-val-tab');
                for (const elem of sidebarItems) {
                    if (elem.getAttribute('data-tab') === dataVal) {
                        this.sidebarArray[dataVal] = [formItem, sidebarItems[ind]];
                    }
                }
            });
        }
    }

    constructor(form) {
        this.form = form;
        this.elements = [];
        this.DEFAULT_ERROR_TEXT = 'Поле некорректно';
        this.sidebarArray = [];
        // this.submitButton = this.form.querySelector('[type="submit"]');
        // this.submitButton.setAttribute('disabled', '');
        this.VALIDATE_FUNCTIONS = {
            formatValidate: (el, format) => {
                if (format.test(el.value) === false) {
                    this.addError(el, 'formatError');
                    return false;
                } else {
                    return true;
                }
            },
            mailValidate: el => {
                const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
                return this.VALIDATE_FUNCTIONS.formatValidate(el, reg);
            },
            checkRange: (el, minSymbols = 0, maxSymbols = 50) => {
                const max = this.getDataParam(el, 'rangeMax');
                if (max) {
                    maxSymbols = parseInt(max);
                }
                const min = this.getDataParam(el, 'rangeMin');
                if (min >= 0) {
                    minSymbols = parseInt(min);
                }
                if (el.value.length > maxSymbols || el.value.length < minSymbols) {
                    this.addError(el, 'rangeError');
                    return false;
                } else {
                    return true;
                }
            },
            requiredValidate: el => {
                return this.VALIDATE_FUNCTIONS.checkRange(el, 1, 100);
            },
            simpleInputValidate: el => {
                return this.VALIDATE_FUNCTIONS.checkRange(el, 0, 40);
            },
            textareaValidate: el => {
                return this.VALIDATE_FUNCTIONS.checkRange(el, 0, 300);
            },
            inputmaskValidate: el => {
                if (!el.inputmask.isComplete()) {
                    this.addError(el, 'formatError');
                    return false;
                }
                return true;
            },
            lettersOnlyValidate: el => {
                const reg = /^(?!.*[!@#$%^&(),.+=/\][{}?><":;|1234567890])/;
                return this.VALIDATE_FUNCTIONS.formatValidate(el, reg);
            },
            digitsOnlyValidate: el => {
                const reg = /^\d*$/;
                if (!this.VALIDATE_FUNCTIONS.checkRange(el)) return false;
                return this.VALIDATE_FUNCTIONS.formatValidate(el, reg);
            },
            agreeValidate: el => {
                return el.checked;
            },
            dateValidate: el => {
                if (!FormValidator.isDateValid(el.value)) {
                    this.addError(el, 'formatError');
                    return false;
                }

                let age = FormValidator.getAge(el.value);
                const minAge = el.dataset.rangeMin ? el.dataset.rangeMin : 18;
                const dataMax = this.getDataParam(el, 'rangeMax');
                const maxAge = dataMax ? dataMax : 100;
                if (isNaN(age)) {
                    this.addError(el, 'formatError');
                    return false;
                }
                if (age < minAge || age > maxAge) {
                    this.addError(el, 'rangeError');
                    return false;
                }
                return true;
            },
            passwordFormat: el => {
                const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*()\]{}\\\-\[,'"/_;.+=:]).{8,}$/;
                return this.VALIDATE_FUNCTIONS.formatValidate(el, reg);
            },
            getSecondValueOfPassword: el => {
                let classToCompare = '';
                if (el.closest('.form-input').classList.contains('form-input--password')) {
                    classToCompare = 'repeat-password';
                } else if (el.closest('.form-input').classList.contains('form-input--repeat-password')) {
                    classToCompare = 'password';
                }
                const passBoxToCompare = el.closest('.form-input').parentElement.querySelector(`.form-input--${classToCompare}`);
                if (passBoxToCompare) {
                    const passInputToCompare = passBoxToCompare.querySelector('input');
                    return [passBoxToCompare, passInputToCompare];
                }
                return [null, null];
            },
            passwordEqualValidate: el => {
                const [passBoxToCompare, passInputToCompare] = this.VALIDATE_FUNCTIONS.getSecondValueOfPassword(el);
                if (this.getDataParam(el, 'canBeEmpty') && el.value === '' && passInputToCompare.value === '') {
                    return true;
                }
                if (passBoxToCompare === null) {
                    if (!this.VALIDATE_FUNCTIONS.passwordFormat(el)) {
                        this.addError(el, 'formatError');
                        return false;
                    }
                    return true;
                }
                const passwordValueToCompare = passInputToCompare.value;
                const firstPassFormatStatus = this.VALIDATE_FUNCTIONS.passwordFormat(el);
                const secondPassFormatStatus = this.VALIDATE_FUNCTIONS.passwordFormat(passInputToCompare);
                if (firstPassFormatStatus && secondPassFormatStatus) {
                    if (el.value === passwordValueToCompare) {
                        FormValidator.displayStatus(passBoxToCompare, true);
                        return true;
                    }
                    this.addError(el, 'passwordNonEqual');
                    this.addError(passInputToCompare, 'passwordNonEqual');
                    FormValidator.displayStatus(passBoxToCompare, false);
                    return false;
                }
                if (!firstPassFormatStatus || !secondPassFormatStatus) {
                    if (el.value === passwordValueToCompare) {
                        this.addError(el, 'formatError');
                        this.addError(passInputToCompare, 'formatError');
                        FormValidator.displayStatus(passBoxToCompare, false);
                        return false;
                    }
                    if (!secondPassFormatStatus && firstPassFormatStatus) {
                        this.addError(passInputToCompare, 'passwordNonEqual');
                        FormValidator.displayStatus(passBoxToCompare, false);
                        return true;
                    }
                    if (!firstPassFormatStatus && secondPassFormatStatus) {
                        this.addError(el, 'formatError');
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

    static isDateValid(dateString) {
        var day = parseInt(dateString.substring(0, 2));
        var month = parseInt(dateString.substring(3, 5));
        var year = parseInt(dateString.substring(6, 10));

        var isValidDate = (month >= 1 && month <= 12) && (day >= 1 && day <= new Date(year, month, 0).getDate());

        if (!isValidDate) {
            return false;
        }
        return true;
    }

    static getAge(dateString) {
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

    static createErrorBox(el, errorMessage) {
        const newErrorBox = document.createElement('span');
        newErrorBox.classList.add('form-input__error-text');
        newErrorBox.textContent = errorMessage;
        return newErrorBox;
    }

    //отрисовка ошибок - удачи для коробок с инпутами
    static displayStatus(inputBox, successStatus) {
        if (successStatus) {
            inputBox.classList.remove('form-input--error');
            inputBox.classList.add('form-input--success');
        } else {
            inputBox.classList.add('form-input--error');
            inputBox.classList.remove('form-input--success');
        }
    }

    addError(el, dataField) {
        const inputBox = el.closest('.form-input');
        const errorBox = inputBox.querySelector('.form-input__error-text');
        const dataMes = this.getDataParam(el, dataField);
        const errorMessage = dataMes ? dataMes : this.DEFAULT_ERROR_TEXT;
        if (errorBox) {
            errorBox.textContent = errorMessage;
        } else {
            inputBox.append(FormValidator.createErrorBox(el, errorMessage));
        }
    }

    getDataParam(el, dataParam) {
        for (const elem of this.elements) {
            if (elem.element === el) {
                if (elem[dataParam]) {
                    return elem[dataParam];
                }
            }
        }
    }

    addInputHandlers() {
        const formInputBoxes = this.form.querySelectorAll('.form-input');
        if (formInputBoxes.length) {
            formInputBoxes.forEach((inputBox, ind) => {
                let simpleField = true;
                for (const className in this.VALIDATE_CLASSES) {
                    if (inputBox.classList.contains(className)) {
                        simpleField = false;
                        const inputField = inputBox.querySelector('input') ? inputBox.querySelector('input') : inputBox.querySelector('textarea') ? inputBox.querySelector('textarea') : null;
                        var obj = {
                            element: inputField,
                            rangeMin: parseInt(inputBox.getAttribute('data-min')) >= 0 ? parseInt(inputBox.getAttribute('data-min')) : 0,
                            rangeMax: parseInt(inputBox.getAttribute('data-max')) ? parseInt(inputBox.getAttribute('data-max')) : 1000,
                            rangeError: inputBox.getAttribute('data-range') ? inputBox.getAttribute('data-range') : this.DEFAULT_ERROR_TEXT,
                            formatError: inputBox.getAttribute('data-format') ? inputBox.getAttribute('data-format') : this.DEFAULT_ERROR_TEXT,
                            inputMask: inputBox.getAttribute('data-inputmask') ? inputBox.getAttribute('data-inputmask') : null
                            // Другие атрибуты, если есть
                        };
                        if (className === 'form-input--repeat-password' || className === 'form-input--password') {
                            obj.passwordNonEqual = inputBox.getAttribute('data-nonequal') ? inputBox.getAttribute('data-nonequal') : this.DEFAULT_ERROR_TEXT;
                            if (inputBox.hasAttribute('data-canbeempty')) {
                                obj.canBeEmpty = true;
                            }
                        }
                        this.elements[ind] = obj;
                        if (inputField) {
                            this.focusField(inputBox, inputField, this.VALIDATE_CLASSES[className]);
                        }
                        break;
                    }
                }
                if (simpleField) {
                    const inputField = inputBox.querySelector('input');
                    const textAreaField = inputBox.querySelector('textarea');
                    if (inputField) {
                        this.elements[ind] = {
                            element: inputField,
                            rangeMin: inputBox.getAttribute('data-min') ? inputBox.getAttribute('data-min') : 0,
                            rangeMax: inputBox.getAttribute('data-max') ? inputBox.getAttribute('data-max') : 1000,
                            rangeError: inputBox.getAttribute('data-range') ? inputBox.getAttribute('data-range') : this.DEFAULT_ERROR_TEXT,
                            formatError: inputBox.getAttribute('data-format') ? inputBox.getAttribute('data-format') : this.DEFAULT_ERROR_TEXT
                            // Другие атрибуты, если есть
                        };
                        this.focusField(inputBox, inputField, this.VALIDATE_FUNCTIONS.simpleInputValidate);
                    } else if (textAreaField) {
                        this.elements[ind] = {
                            element: textAreaField,
                            rangeMin: inputBox.getAttribute('data-min') ? inputBox.getAttribute('data-min') : 0,
                            rangeMax: inputBox.getAttribute('data-max') ? inputBox.getAttribute('data-max') : 1000,
                            rangeError: inputBox.getAttribute('data-range') ? inputBox.getAttribute('data-range') : this.DEFAULT_ERROR_TEXT,
                            formatError: inputBox.getAttribute('data-format') ? inputBox.getAttribute('data-format') : this.DEFAULT_ERROR_TEXT
                        };
                        this.focusField(inputBox, textAreaField, this.VALIDATE_FUNCTIONS.textareaValidate);
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

    focusField(inputBox, inputField, validateFunc) {
        inputField.addEventListener('input', () => {
            const successStatus = validateFunc(inputField);
            FormValidator.displayStatus(inputBox, successStatus);
            // this.submitButtonStatus();
        });
    }

    initEyeButton() {
        const passwordEyes = this.form.querySelectorAll('.password-eye');
        if (passwordEyes.length) {
            passwordEyes.forEach(passwordEye => {
                // When the user clicks on the password field, show the message box
                // eslint-disable-next-line no-undef
                const pasInput = passwordEye.previousElementSibling;
                if (pasInput) {
                    passwordEye.addEventListener('click', () => {
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

    initPrompts() {
        const prompts = this.form.querySelectorAll('.prompt');
        if (prompts.length) {
            const clickOutPrompt = evt => {
                if (!evt.target.classList.contains('prompt') && !evt.target.closest('.prompt')) {
                    prompts.forEach(prompt => {
                        prompt.classList.remove('prompt--open');
                    });
                    document.removeEventListener('click', clickOutPrompt);
                }
            };
            prompts.forEach(prompt => {
                const pasInput = prompt.previousElementSibling;
                if (pasInput) {
                    prompt.addEventListener('click', evt => {
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

    initDateField() {
        const dateFields = this.form.querySelectorAll('.form-input--date input[data-min]');
        const bdFields = this.form.querySelectorAll('.form-input--date');
        if (bdFields.length) {
            bdFields.forEach(el => {
                const input = el.querySelector('input');
                Inputmask('99.99.9999', {placeholder: 'dd.mm.yyyy'}).mask(input);
            });
        }
    }

    addInputMasks() {
        const inputmaskFields = this.form.querySelectorAll('.form-input--inputmask input');
        if (inputmaskFields.length) {
            inputmaskFields.forEach(el => {
                const inputmaskVal = this.getDataParam(el, 'inputMask');
                if (inputmaskVal) {
                    Inputmask(inputmaskVal).mask(el);
                }
            });
        }
    }

    cleanForm() {
        const formInputs = this.form.querySelectorAll('input, textarea');
        Array.prototype.forEach.call(formInputs, el => {
            if (el.classList.contains('form-agree')) el.checked = false; else el.value = '';
        });
    }

    additionalCode() {
        const starsInputs = this.form.querySelectorAll('.stars-input');
        if (starsInputs.length) {
            starsInputs.forEach(starsInput => {
                const inpFields = starsInput.querySelectorAll('input');
                const hiddenInp = starsInput.querySelector('input[type="hidden"]');
                for (let i = 0; i < inpFields.length; i++) {
                    inpFields[i].addEventListener('change', (evt) => {
                        for (let k = 0; k < inpFields.length; k++) {
                            if (k <= i) {
                                inpFields[k].checked = true;
                                hiddenInp.value = k;
                            } else {
                                inpFields[k].checked = false;
                            }
                        }
                    });
                }
            });
        }
    }

    validate() {
        //добавление обработчиков на инпут с валидацией поля
        const clickEvent = new Event('input');
        const inputBoxes = this.form.querySelectorAll('.form-input');
        if (inputBoxes.length) {
            inputBoxes.forEach(inputBox => {
                const inputField = inputBox.querySelector('input') ? inputBox.querySelector('input') : inputBox.querySelector('textarea');
                if (inputField) inputField.dispatchEvent(clickEvent);
            });
        }
        return !this.form.querySelector('.form-input--error');
    }

    submit(onSubmitSuccess, onSubmitError) {
        const isValid = this.validate();
        if (isValid) {
            onSubmitSuccess();
        } else {
            onSubmitError();
        }
    }
}


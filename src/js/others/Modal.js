class Modal {
    constructor(id) {
        this._id = id;
        this._btns = document.querySelectorAll(`[data-btn-modal='${id}']`);
        if (this._btns.length > 0) {
            this._template = document.querySelector(`#${id}`);
        }
        if (this._template) {
            this._overlayOn = this._overlayOn.bind(this);
            this._addLogic = () => {};
            this._modalsBackground = document.querySelector('.modals');
            if (!this._modalsBackground) {
                this._modalsBackground = document.createElement('div');
                this._modalsBackground.classList.add('modals');
                document.querySelector('footer').prepend(this._modalsBackground);
            }
            this._modalsBackground = document.querySelector('.modals');

            this._body = document.querySelector('body');
            this._modal = null;

            this._btns.forEach(btn => {
                btn.addEventListener('click', (evt) => {
                    evt.preventDefault();
                    evt.stopImmediatePropagation();
                    this._modalOpen();
                });
            });
        }
    }

    _overlayOn = ({target}) => {
        if (!target.classList.contains('modal') && !target.closest('.modal')) {
            this._closeModal();
        }
    }

    _closeModal = () => {
        this._modal.setAttribute('data-hidden', true);
        document.removeEventListener('click', this._overlayOn);
        this._body.classList.remove('lock');
        setTimeout(() => {
            this._modalsBackground.classList.remove('modals--active');
            this._modal.parentNode.removeChild(this._modal);

        }, 100);
    };

    _renderModal = () => {
        const item = this._template.content.cloneNode(true);
        const wrapper = document.createElement('div');
        const closeIcon = document.createElement('div');
        closeIcon.classList.add('modal__close-button');
        wrapper.appendChild(closeIcon);
        wrapper.classList.add('modal');
        wrapper.setAttribute('data-hidden', true);
        wrapper.appendChild(item);
        this._modalsBackground.appendChild(wrapper);
        setTimeout(() => {
            wrapper.removeAttribute('data-hidden');
        }, 100);
        this._modal = wrapper;
        if(this._addLogic){
            this._addLogic(wrapper);
        }

        wrapper.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('modal-close-btn') || evt.target.closest('.modal-close-btn')) {
                evt.preventDefault();
                this._closeModal();
            }
        });
        closeIcon.addEventListener('click', this._closeModal);
    }

    setAdditionalLogicAfterSubmit(func){
        this._addLogic = func;
    }

    _modalOpen() {
        this._modalsBackground.classList.add('modals--active');
        this._body.classList.add('lock');
        this._renderModal(this._template);
        document.addEventListener('click', this._overlayOn);
    }

};
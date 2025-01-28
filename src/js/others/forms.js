const formSubmit = (selector, nextStep = null, successFunc = null, errorFunc = null) => {
    const form = document.querySelector(`${selector}`);
    if (form) {
        const validator = new FormValidator(form);
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            const fd = new FormData(form);

            validator.submit(() => {
                if (nextStep) {
                    const item = nextStep.content.cloneNode(true);
                    form.closest('[data-replace-wrapper]')?.replaceWith(item);
                }
                if (successFunc) {
                    successFunc(fd);
                }
            }, () => {
                if (errorFunc) {
                    errorFunc();
                }
            });
        });
    }
}
document.addEventListener("DOMContentLoaded", (event) => {
    // formSubmit('[data-form-cb]', document.getElementById('registration-approve'), () => {});
    formSubmit('#calc-form', () => {
    }, () => {
    });


    new Modal('video-modal');
    new Modal('video-block2');


});

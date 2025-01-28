export const slideUp = (target, duration = 500, callback = () => {
}) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = `${duration}ms`;
    target.style.boxSizing = 'border-box';
    target.style.height = `${target.offsetHeight}px`;
    // eslint-disable-next-line no-unused-expressions
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
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
export const slideDown = (target, duration = 500, callback = () => {
}) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none') {
        display = 'block';
    }
    target.style.display = display;
    const height = target.offsetHeight;
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
    target.style.transitionDuration = `${duration}ms`;
    target.style.height = `${height}px`;
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        callback();
    }, duration);
};

/* TOOGLE */
export const slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
};



const accordeons = document.querySelectorAll('.faq-item');

if (accordeons.length) {
    for (const accordeon of accordeons) {
        const button = accordeon.querySelector('.faq-item__question');

        button.addEventListener('click', () => {
            for (const otherAccordeon of accordeons) {
                if (otherAccordeon !== accordeon) {
                    otherAccordeon.classList.remove('faq-item--active');
                }
            }
            accordeon.classList.add('faq-item--active');
        });
    }
}


// faq-page
const faqs = document.querySelectorAll('.faq-block');

if (faqs.length) {
    for (const accordeon of faqs) {
        const button = accordeon.querySelector('.faq-block__question');
        const answer = accordeon.querySelector('.faq-block__answer');

        button.addEventListener('click', () => {
            if (accordeon.classList.contains('faq-block--active')) {
                slideUp(answer, 300, () => {
                });
                accordeon.classList.remove('faq-block--active');
            } else {
                for (const otherAccordeon of faqs) {
                    if (otherAccordeon !== accordeon) {
                        otherAccordeon.classList.remove('faq-block--active');
                        const otherAnswer = otherAccordeon.querySelector('.faq-block__answer');
                        slideUp(otherAnswer, 300, () => {
                        });
                    }
                }
                slideDown(answer, 300, () => {
                });
                accordeon.classList.add('faq-block--active');
            }

        });
    }
}

function GetElements(seletor) {
    this.togglePopup  = () => {
        const elements = document.querySelectorAll(seletor);

        elements.forEach(item => {
            item.addEventListener('click', () => {
                openPopup(item.getAttribute('data-value'));
            })
        })
    }

    this.toggleAcordeon = () => {
        const elements = document.querySelectorAll(seletor);

        elements.forEach(item => {
            item.addEventListener('click', () => {
                if (!item.nextElementSibling.classList.contains('active')) {
                    elements.forEach(item => {
                        item.firstChild.nextElementSibling.classList.remove('active');
                        item.nextElementSibling.classList.remove('active');
                    })
                    item.firstChild.nextElementSibling.scrollIntoView();
                    item.firstChild.nextElementSibling.classList.add('active');
                    item.nextElementSibling.classList.add(('active'));
                } else {
                    elements.forEach(item => {
                        item.firstChild.nextElementSibling.classList.remove('active');
                        item.nextElementSibling.classList.remove('active');
                    })
                }
            })
        })
    }

    this.toggleMenu = () => {
        const elements = document.querySelectorAll(seletor);

        elements.forEach(item => {
            item.addEventListener('click', () => {
                document.querySelector('header#main ul')
                    .classList.toggle('active')
            })
        })
    }
}

function openPopup(popup) {
    let activePopup = document.querySelector(`#${popup}`);
    activePopup.classList.toggle('active');

    if (activePopup.classList.contains('active')) {
        let activePopupVideo = document.querySelector(`#${popup} iframe`);
        let src = activePopupVideo.getAttribute('data-src');

        activePopupVideo.setAttribute('src', src)
    } else {
        let activePopupVideo = document.querySelector(`#${popup} iframe`)
        let src = 'about:blank';

        activePopupVideo.setAttribute('src', src);
    }
}


const buttonsPopup = new GetElements('.btn-popup');
buttonsPopup.togglePopup();

const popups = new GetElements('.popup');
popups.togglePopup();

const acordeons = new GetElements('.tipo-container');
acordeons.toggleAcordeon();

const menu = new GetElements('.action-menu');
menu.toggleMenu();


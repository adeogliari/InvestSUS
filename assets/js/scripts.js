function GetElements(seletor) {
    this.togglePopup  = () => {
        const elements = document.querySelectorAll(seletor)

        elements.forEach(item => {
            item.addEventListener('click', () => {
                openPopup(item.getAttribute('data-value'))
            })
        })
    }

    this.toggleAcordeon = () => {
        const elements = document.querySelectorAll('.acordeon')

        elements.forEach(item => {
            item.addEventListener('click', () => {

            })
        })
    }
}

function openPopup(popup) {
    let activePopup = document.querySelector(`#${popup}`)
    activePopup.classList.toggle('active');

    if (activePopup.classList.contains('active')) {
        let activePopupVideo = document.querySelector(`#${popup} iframe`)
        let src = activePopupVideo.getAttribute('data-src')

        activePopupVideo.setAttribute('src', src)
    } else {
        let activePopupVideo = document.querySelector(`#${popup} iframe`)
        let src = 'about:blank'

        activePopupVideo.setAttribute('src', src)
    }
}

const buttonsPopup = new GetElements('.btn-popup')
buttonsPopup.togglePopup()

const popups = new GetElements('.popup')
popups.togglePopup()

const acordeons = new GetElements('.acordeon')
acordeons.toggleAcordeon()
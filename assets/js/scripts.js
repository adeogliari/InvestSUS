function popups() {
    const btn_openPopup = document.querySelectorAll('.btn_openPopup')
    const btn_closePopup = document.querySelector('.btn_closePopup')
    const overlayPopup = document.querySelector('.popup')

    btn_openPopup.forEach(item => {
        item.addEventListener('click', () => {
            openPopup(item.getAttribute('data-value'))
        })
    })

    btn_closePopup.addEventListener('click', (item) => {
        closePopup(item)
    })

    overlayPopup.addEventListener('click', (item) => {
        closePopup(item)
    })

    function openPopup(video_src) {
        document.querySelector('.popup-video-container iframe').setAttribute('src', video_src)

        document.querySelector('.popup').classList.add('active')
    }

    function closePopup(item) {
        const target = item.target

        if ((target === overlayPopup) || (target === btn_closePopup)) {
            document.querySelector('.popup-video-container iframe').setAttribute('src', 'about:blank')

            document.querySelector('.popup').classList.remove('active')
        }
    }
}

function toggleAcordeons() {
    const acordeons = document.querySelectorAll('.acordeon h3')

    acordeons.forEach(item => {
        item.addEventListener('click', () => {
            item.parentElement.classList.toggle('active')
        })
    })
}

function toggleMenu() {
    const menu = document.querySelector('.btn_menu')

    menu.addEventListener('click', () => {
        menu.previousElementSibling.classList.toggle('active')

        document.querySelector('.menu_overlay').classList.toggle('active')
    })
}

function navigateMenu() {
    const menu_itens = document.querySelectorAll('.action-menu');

    menu_itens.forEach(item => {
        item.addEventListener('click', () => {
            item.parentElement.parentElement.classList.toggle('active')
        })
    })
}

popups()
toggleAcordeons()
toggleMenu()
navigateMenu()
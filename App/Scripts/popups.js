
let active_popup = null

let keyClick = key => {

    // Open corresponding popup

    let id = key.getAttribute('id')
    let shortID = id.split('-')[1] + '-' + id.split('-')[2]
    try { active_popup.classList.toggle('show') } catch (e) {}

    let selectNew = () => {

        let popup = document.getElementById('p-' + shortID)
        popup.classList.toggle('show')
        
        let left = popup.getBoundingClientRect().left
        let right = window.innerWidth - left - popup.offsetWidth
        
        let keyLeft = key.getBoundingClientRect().left

        if ( left < 0 ) {

            popup.style.left = (-keyLeft) + 'px'
            popup.style.setProperty(
                '--popup-left', 
                (keyLeft + key.offsetWidth / 2) + 'px'
            )

        } else if ( right < 0 ) {

            leftAbs = -(popup.offsetWidth - (window.innerWidth - keyLeft))
            popup.style.left = leftAbs + 'px'
            popup.style.setProperty(
                '--popup-left',
                (key.offsetWidth / 2 - leftAbs) + 'px'
            )

        }

        active_popup = popup

    }

    if (id == 'k-2-1' || id == 'k-2-12') active_popup = null
    else if (active_popup != null) { 
        if ('p-' + shortID == active_popup.getAttribute('id') ) { 
            active_popup = null
        } else selectNew()
    } else selectNew()

}

let focusClick = e => {

    // Close all popups when not in focus
    let keyboard = document.getElementById('keyboard')
    let target = e.targetElement || e.srcElement
    
    if (!keyboard.contains(target)) {

        let popups = document.getElementsByClassName('popup')
        for (let i = 0; i < popups.length; i++) {
            popups[i].classList.remove('show')
        }

        active_popup = null

    }

}

document.addEventListener('click', focusClick)

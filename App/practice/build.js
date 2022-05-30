
// Loading screen
let makeLoad = () => {

    let load = document.createElement('div')
    load.id = 'load'
    load.innerHTML = '<div class="shapes-5"></div>'
    document.body.appendChild(load)

}; makeLoad()


// Build scripts

let makePopup = (x, y, letter) => {

    // Create the popup HTML

    const fidal = [
        ['ሀ', 'ሁ', 'ሂ', 'ሃ', 'ሄ', 'ህ', 'ሆ'],
        ['ለ', 'ሉ', 'ሊ', 'ላ', 'ሌ', 'ል', 'ሎ', 'ሏ'],
        ['ሐ', 'ሑ', 'ሒ', 'ሓ', 'ሔ', 'ሕ', 'ሖ', 'ሗ'],
        ['መ', 'ሙ', 'ሚ', 'ማ', 'ሜ', 'ም', 'ሞ', 'ሟ'],
        ['ሠ', 'ሡ', 'ሢ', 'ሣ', 'ሤ', 'ሥ', 'ሦ', 'ሧ'],
        ['ረ', 'ሩ', 'ሪ', 'ራ', 'ሬ', 'ር', 'ሮ', 'ሯ'],
        ['ሰ', 'ሱ', 'ሲ', 'ሳ', 'ሴ', 'ስ', 'ሶ', 'ሷ'],
        ['ሸ', 'ሹ', 'ሺ', 'ሻ', 'ሼ', 'ሽ', 'ሾ', 'ሿ'],
        ['ቀ', 'ቁ', 'ቂ', 'ቃ', 'ቄ', 'ቅ', 'ቆ', 'ቋ'],
        ['በ', 'ቡ', 'ቢ', 'ባ', 'ቤ', 'ብ', 'ቦ', 'ቧ'],
        ['ተ', 'ቱ', 'ቲ', 'ታ', 'ቴ', 'ት', 'ቶ', 'ቷ'],
        ['ቸ', 'ቹ', 'ቺ', 'ቻ', 'ቼ', 'ች', 'ቾ', 'ቿ'],
        ['ኀ', 'ኁ', 'ኂ', 'ኃ', 'ኄ', 'ኅ', 'ኆ', 'ኋ'],
        ['ነ', 'ኑ', 'ኒ', 'ና', 'ኔ', 'ን', 'ኖ', 'ኗ'],
        ['ኘ', 'ኙ', 'ኚ', 'ኛ', 'ኜ', 'ኝ', 'ኞ', 'ኟ'],
        ['አ', 'ኡ', 'ኢ', 'ኣ', 'ኤ', 'እ', 'ኦ', 'ኧ'],
        ['ከ', 'ኩ', 'ኪ', 'ካ', 'ኬ', 'ክ', 'ኮ', 'ኳ'],
        ['ኸ', 'ኹ', 'ኺ', 'ኻ', 'ኼ', 'ኽ', 'ኾ'],
        ['ወ', 'ዉ', 'ዊ', 'ዋ', 'ዌ', 'ው', 'ዎ'], 
        ['ዐ', 'ዑ', 'ዒ', 'ዓ', 'ዔ', 'ዕ', 'ዖ'],
        ['ዘ', 'ዙ', 'ዚ', 'ዛ', 'ዜ', 'ዝ', 'ዞ', 'ዟ'],
        ['ዠ', 'ዡ', 'ዢ', 'ዣ', 'ዤ', 'ዥ', 'ዦ', 'ዧ'],
        ['የ', 'ዩ', 'ዪ', 'ያ', 'ዬ', 'ይ', 'ዮ'],
        ['ደ', 'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ', 'ዷ'],
        ['ጀ', 'ጁ', 'ጂ', 'ጃ', 'ጄ', 'ጅ', 'ጆ', 'ጇ'],
        ['ገ', 'ጉ', 'ጊ', 'ጋ', 'ጌ', 'ግ', 'ጎ', 'ጓ'],
        ['ጠ', 'ጡ', 'ጢ', 'ጣ', 'ጤ', 'ጥ', 'ጦ', 'ጧ'],
        ['ጨ', 'ጩ', 'ጪ', 'ጫ', 'ጬ', 'ጭ', 'ጮ', 'ጯ'],
        ['ጰ', 'ጱ', 'ጲ', 'ጳ', 'ጴ', 'ጵ', 'ጶ', 'ጷ'],
        ['ጸ', 'ጹ', 'ጺ', 'ጻ', 'ጼ', 'ጽ', 'ጾ', 'ጿ'],
        ['ፀ', 'ፁ', 'ፂ', 'ፃ', 'ፄ', 'ፅ', 'ፆ'],
        ['ፈ', 'ፉ', 'ፊ', 'ፋ', 'ፌ', 'ፍ', 'ፎ', 'ፏ'],
        ['ፐ', 'ፑ', 'ፒ', 'ፓ', 'ፔ', 'ፕ', 'ፖ', 'ፗ'],
        ['ቨ', 'ቩ', 'ቪ', 'ቫ', 'ቬ', 'ቭ', 'ቮ', 'ቯ']
    ]
    const keys = [
        'ሀ', 'ለ', 'ሐ', 'መ', 'ሠ', 'ረ', 'ሰ', 'ሸ', 'ቀ', 'በ', 'ተ', 'ቸ', 
        'ኀ', 'ነ', 'ኘ', 'አ', 'ከ', 'ኸ', 'ወ', 'ዐ', 'ዘ', 'ዠ', 
        'የ', 'ደ', 'ጀ', 'ገ', 'ጠ', 'ጨ', 'ጰ', 'ጸ', 'ፀ', 'ፈ', 'ፐ', 'ቨ' 
    ]

    if ( !keys.includes(letter) ) return
    let index = keys.indexOf(letter)
    let letters = fidal[index]

    let carousel = document.createElement('div')
    carousel.id = 'c-' + x + '-' + y
    carousel.className = 'carousel carousel-' + letters.length

    for ( let i = 0; i < letters.length; i++ ) {

        let letter = letters[i]
        let letterDiv = document.createElement('div')
        letterDiv.id = 'l-' + x + '-' + y + '-' + (i + 1)
        letterDiv.className = 'carousel-letter'
        letterDiv.setAttribute('onclick', 'type(this.innerText)')

        if ( i == 0 ) letterDiv.classList.add('carousel-letter-first')

        letterDiv.innerHTML = letter
        carousel.appendChild(letterDiv)

    }

    return [carousel.outerHTML, 'popup-' + letters.length]

}

let makeHeader = () => {

    let header = document.createElement('div')
    header.id = 'bar'

    let title = document.createElement('h1')
    title.id = 'title'
    title.innerHTML = 'ቃልነት'

    let leftBar = document.createElement('div')
    leftBar.id = 'left-bar'

    let rightBar = document.createElement('div')
    rightBar.id = 'right-bar'

    let statsButton = document.createElement('button')
    statsButton.id = 'stats-button'
    statsButton.className = 'header-button'
    statsButton.setAttribute('onclick', 'toggleStats()')
    statsButton.innerHTML = 
    '<img src="../Icons/stats.svg" class="header-icon" alt="ስታትስትክስ">'

    let settingsButton = document.createElement('button')
    settingsButton.id = 'settings-button'
    settingsButton.className = 'header-button'
    settingsButton.setAttribute('onclick', 'toggleSettings()')
    settingsButton.innerHTML = 
    '<img src="../Icons/menu.svg" class="header-icon" alt="ምናል">'

    let helpButton = document.createElement('a')
    helpButton.id = 'help-button'
    helpButton.className = 'header-button'
    helpButton.setAttribute('href', '../guide/')
    helpButton.innerHTML =
    '<img src="../Icons/help.svg" class="header-icon" alt="እርዳታ">'

    let revealButton = document.createElement('button')
    revealButton.id = 'reveal-button'
    revealButton.className = 'header-button'
    revealButton.setAttribute('onclick', 'reveal()')
    revealButton.innerHTML =
    '<img src="../Icons/reveal.svg" class="header-icon" alt="መግለጽ">'

    rightBar.appendChild(statsButton)
    rightBar.appendChild(settingsButton)

    leftBar.appendChild(helpButton)
    leftBar.appendChild(revealButton)

    header.appendChild(leftBar)
    header.appendChild(rightBar)
    header.appendChild(title)
    document.body.appendChild(header)

}

let makeGrid = () => {

    let content = document.createElement('div')
    content.id = 'content'

    for (let i = 0; i < 6; i++) {

        let word = document.createElement('div')
        for (let j = 0; j < 5; j++) {

            let box = document.createElement('div')
            box.className = 'box ' + (j + 1)
            box.id = (i + 1) + '-' + (j + 1)
            box.innerText = ' '
            word.appendChild(box)

        }

        word.id = String(i + 1)
        word.className = 'word'

        if ( i == 5 ) word.className = 'word hide'

        content.appendChild(word)

    }

    document.body.appendChild(content)

}

let makeKeyboard = () => {

    let keyboard = document.createElement('div')
    keyboard.id = 'keyboard'

    let letters = [
        'ሀ', 'ለ', 'ሐ', 'መ', 'ሠ', 'ረ', 'ሰ', 'ሸ', 'ቀ', 'በ', 'ተ', 'ቸ', 
        '<img src="../Icons/backspace.svg" class="inline-icon" alt="መሰረዝ" >', 
            'ኀ', 'ነ', 'ኘ', 'አ', 'ከ', 'ኸ', 'ወ', 'ዐ', 'ዘ', 'ዠ', 
        '<img src="../Icons/enter.svg" class="inline-icon" alt="አስገባ" >',
        'የ', 'ደ', 'ጀ', 'ገ', 'ጠ', 'ጨ', 'ጰ', 'ጸ', 'ፀ', 'ፈ', 'ፐ', 'ቨ'
    ]

    let index = 0

    for (let i = 0; i < 3; i++) {

        let row = document.createElement('div')
        row.className = 'row'
        row.id = 'r' + (i + 1)

        let limits = [12, 12, 12]

        for (let j = 0; j < limits[i]; j++) {

            let key = document.createElement('button')
            key.className = 'key'

            key.id = 'k-' + (i + 1) + '-' + (j + 1)
            key.setAttribute('onclick', 'keyClick(this)')

            if (index == 12 || index == 23 ) {
                
                key.className = 'key icon-container'
                key.innerHTML = '<span class="letter">'+letters[index]+'</span>'
            
                if ( index == 12 ) key.setAttribute('onclick', 'backspace()')
                else key.setAttribute('onclick', 'enter()')

                row.appendChild(key)
                index++
                continue
            
            }

            let popup = document.createElement('span')
            popup.className = 'popup'
            popup.id = 'p-' + (i + 1) + '-' + (j + 1)
            popupCode = makePopup(i + 1, j + 1, letters[index])
            popup.innerHTML = popupCode[0]
            popup.classList.add(popupCode[1])

            key.innerHTML = '<span class="letter">'+letters[index]+'</span>'
            key.appendChild(popup)
            
            row.appendChild(key)
            index++

        }

        keyboard.appendChild(row)

    }

    document.body.appendChild(keyboard)

}

let makeModal = () => {

    // Make score modal
    let modal = document.createElement('div')
    modal.id = 'modal'
    modal.innerHTML = 
    '<div id="modal-content">0</div>'
    + '<div id="timer" ></div>'
    document.body.appendChild(modal)

    // Make fireworks container
    let fireworks = document.createElement('div')
    fireworks.id = 'fireworks'
    document.body.appendChild(fireworks)

    // Make statistics modal
    let statsModal = document.createElement('div')
    statsModal.id = 'stats-modal'
    statsModal.innerHTML = 
    '<div id="stats-modal-content"><canvas id="stats-chartjs"></canvas>' 
    + '</div>'
    document.body.appendChild(statsModal)

    // Make reveal modal
    let revealModal = document.createElement('div')
    revealModal.id = 'reveal-modal'
    revealModal.innerHTML =
    '<div id="reveal-modal-content">'
    + '<div id="reveal-modal-title">ቃል አሳይ?</div>'
    + '<button id="reveal-form" onclick="alertReveal()">አዎን</button>'
    + '</div>'
    document.body.appendChild(revealModal)
    
}

makeHeader()
makeGrid()
makeKeyboard()
makeModal()

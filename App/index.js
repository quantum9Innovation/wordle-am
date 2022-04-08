
// Index

// Imports
import Cookies from './Modules/js.cookie.min.mjs'


// Constants
let word = ''
let lastUpdate = new Date()
let expire = new Date()
let dictionary = []
const updateURL = './Data/update.txt'
const dictionaryURL = './Data/dictionary.txt'
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

// Control variables
let timerCounter = 10
let timerInterval
let content = document.getElementById('content')
let square = [1, 1]


// Helper funcs
const paint = sq => {
    
    let box = document.getElementById(sq[0] + '-' + sq[1])
    box.classList.toggle('paint')
    
}

const paintIncorrect = () => {

    let word = document.getElementById(square[0])
    word.classList.toggle('incorrect')

}

const grayOut = baseKey => {

    let keyIndex = keys.indexOf(baseKey)
    if (keyIndex > 11) keyIndex++
    if (keyIndex > 22) keyIndex++
    
    let keyCoordinates = [
        Math.floor(keyIndex / 12) + 1, 
        keyIndex % 12 + 1
    ]
    if (keyCoordinates[1] == 0) keyCoordinates[1] = 12

    let keyBox = document.getElementById(
        'k-' + keyCoordinates[0] + '-' + keyCoordinates[1]
    )
    let letterCollection = keyBox.getElementsByClassName('carousel-letter')
    
    keyBox.classList.add('gray')
    for (let i = 0; i < letterCollection.length; i++) {
        letterCollection[i].classList.add('gray')
    }

}

const paintKey = (key, color) => {

    let baseKey = ''
    let keyOrder = 0

    for ( let i = 0; i < fidal.length; i++ ) {

        if ( fidal[i].includes(key) ) {

            baseKey = keys[i]
            keyOrder = fidal[i].indexOf(key)
            break

        }

    }

    let keyIndex = keys.indexOf(baseKey)
    if (keyIndex > 11) keyIndex++
    if (keyIndex > 22) keyIndex++
    
    let keyCoordinates = [
        Math.floor(keyIndex / 12) + 1, 
        keyIndex % 12 + 1
    ]
    if (keyCoordinates[1] == 0) keyCoordinates[1] = 12

    let keyBox = document.getElementById(
        'k-' + keyCoordinates[0] + '-' + keyCoordinates[1]
    )
    let letterBox = document.getElementById(
        'l-' 
        + keyCoordinates[0] + '-' 
        + keyCoordinates[1] + '-' 
        + (keyOrder + 1)
    )

    let colorClass = ''
    switch (color) {

        case 0: colorClass = 'gray'; break
        case 1: colorClass = 'green'; break
        case 2: colorClass = 'pink'; break
        case 3: colorClass = 'yellow'; break
        case 4: colorClass = 'blue'; break
        default: colorClass = 'gray'; break

    }
    
    keyBox.classList.remove('gray', 'green', 'yellow', 'pink', 'blue')
    keyBox.classList.add(colorClass)

    letterBox.classList.remove('gray', 'green', 'yellow', 'pink', 'blue')
    if ( color == 1 | color == 3 ) letterBox.classList.add(colorClass)
    else letterBox.classList.add('gray')

}

const paintLetters = res => {

    // Initialization
    let deadZones = []
    let colorZones = []

    let word = []
    for ( let i = 0; i < 5; i++ ) {

        let box = document.getElementById(square[0] + '-' + (i + 1))
        word.push(box.innerText)

    }

    // Gray
    for ( let i = 0; i < 5; i++ ) {

        if ( res[i] == 0 ) { 

            paintKey(word[i], 0)
            deadZones.push(word[i])

        }

    }

    // Blue
    for ( let i = 0; i < 5; i++ ) {

        if ( res[i] == 1 ) { 

            paintKey(word[i], 1)
            colorZones.push(word[i])
            
        }

    }

    // Yellow
    for ( let i = 0; i < 5; i++ ) {

        if ( res[i] == 2 ) { 

            paintKey(word[i], 2)
            colorZones.push(word[i])
            
        }

    }

    // Pink
    for ( let i = 0; i < 5; i++ ) {

        if ( res[i] == 3 ) { 

            paintKey(word[i], 3)
            colorZones.push(word[i])
            
        }

    }

    // Green
    for ( let i = 0; i < 5; i++ ) {

        if ( res[i] == 4 ) { 

            paintKey(word[i], 4)
            colorZones.push(word[i])
            
        }

    }

    // Dead zones
    for ( let i = 0; i < deadZones.length; i++ ) {

        for ( let j = 0; j < fidal.length; j++ ) {
            if ( fidal[j].includes(deadZones[i]) ) deadZones[i] = keys[j]
        }

    }
    for ( let i = 0; i < colorZones.length; i++ ) {

        for ( let j = 0; j < fidal.length; j++ ) {
            if ( fidal[j].includes(colorZones[i]) ) colorZones[i] = keys[j]
        }

    }

    // Paint dead zones
    for ( let i = 0; i < deadZones.length; i++ ) {
        if ( !colorZones.includes(deadZones[i]) ) grayOut(deadZones[i])
    }

}

const createNextBlock = () => {

    let nextBlock = document.getElementById(square[0])
    nextBlock.classList.toggle('hide')

    let word = document.createElement('div')
    let i = square[0]
    for (let j = 0; j < 5; j++) {

        let box = document.createElement('div')
        box.className = 'box ' + (j + 1)
        box.id = (i + 1) + '-' + (j + 1)
        box.innerText = ' '
        word.appendChild(box)

    }

    word.id = String(i + 1)
    word.className = 'word hide'

    content.appendChild(word)
    content.scrollTo(
        window.scrollX, 
        window.scrollY + 0.2 * content.scrollHeight
    )

}

const updateTimer = () => {

    let timer = document.getElementById('timer')
    let timeRem = expire - new Date()
    let hrsRem = Math.floor(timeRem / 1000 / 60 / 60)
    let minRem = Math.floor(timeRem / 1000 / 60 % 60)
    let secRem = Math.floor(timeRem / 1000 % 60)

    if ( hrsRem < 10 ) hrsRem = '0' + hrsRem
    if ( minRem < 10 ) minRem = '0' + minRem
    if ( secRem < 10 ) secRem = '0' + secRem

    timer.innerText = hrsRem + ':' + minRem + ':' + secRem
    timerCounter--

    if ( timerCounter <= 0 ) clearInterval(timerInterval); timerCounter = 10

}

const celebrate = () => {

    let modal = document.getElementById('modal')
    modal.classList.toggle('show')

    let modalContent = document.getElementById('modal-content')
    modalContent.innerText = square[0] + '!'

    updateTimer()
    timerInterval = setInterval(updateTimer, 1000)

}

const endCelebration = interval => {

    clearInterval(interval)
    let modal = document.getElementById('modal')
    modal.classList.remove('show')
    modal.classList.add('hide')

}

const launchConfetti = () => {

    // Launch confetti on the win screen using confetti.js
    let duration = 10 * 1000
    let animationEnd = Date.now() + duration
    let defaults = { 
        startVelocity: 30, 
        spread: 360, 
        ticks: 60, 
        zIndex: 0 
    }

    const randomInRange = (min, max) => Math.random() * (max - min) + min

    let interval = setInterval(() => {

        let timeLeft = animationEnd - Date.now()
        if (timeLeft <= 0) endCelebration(interval)

        let particleCount = 200 * (timeLeft / duration)

        // since particles fall down, 
        // start a bit higher than random
        confetti(Object.assign(
            {}, 
            defaults, 
            { 
                particleCount, 
                origin: { 
                    x: randomInRange(0.1, 0.3), 
                    y: Math.random() - 0.2 
                } 
            }
        ))
        confetti(Object.assign(
            {}, 
            defaults, 
            { 
                particleCount, 
                origin: { 
                    x: randomInRange(0.7, 0.9), 
                    y: Math.random() - 0.2 
                } 
            }
        ))
    
    }, 250)

}

const launchFireworks = () => {

    const container = document.getElementById('fireworks')
    container.className = 'show'
    const fireworks = new window.Fireworks(
        container, 
        {
            opacity: 1,
            speed: 15,
            particles: 100,
            delay: {
                min: 0,
                max: 100
            }
        }
    )
    fireworks.start()
    setTimeout(
        () => {
            fireworks.stop()
            container.className = ''
        }, 
        10 * 1000
    )

}

const endLoad = () => {

    let load = document.getElementById('load')
    load.className = 'hide'

}


// Resource getters
const loadUpdate = async URL => {
    
    let response = await fetch(URL)
    let text = await response.text()
    let date = text.split('\n')[0].split('/')
    
    lastUpdate = new Date(date[2], date[0] - 1, date[1])

}

const loadDictionary = async URL => {
    
    let response = await fetch(URL)
    let text = await response.text()
    dictionary = text.split('\n')

}

const findInDictionary = word => {

    if (dictionary.length == 0) return false
    
    let minBound = 0
    let maxBound = dictionary.length - 1

    while (minBound <= maxBound) {

        let mid = Math.floor((minBound + maxBound) / 2)
        let midWord = dictionary[mid]

        if (word == midWord) return true
        else if (word < midWord) maxBound = mid - 1
        else minBound = mid + 1

    }

    return false

}


// Cookie handlers
const expireeDate = () => {

    let today = new Date()
    let todayEAT = new Date(
        today.getTime() + (today.getTimezoneOffset() + 180) * 60000
    )

    let expireEAT = new Date(todayEAT.getTime())
    expireEAT.setHours(0, 0, 0, 0)
    expireEAT.setDate(expireEAT.getDate() + 1)

    let expire = new Date(
        expireEAT.getTime() - (today.getTimezoneOffset() + 180) * 60000
    )
    let e_expire = lastUpdate
    e_expire.setDate(e_expire.getDate() + 1)
    e_expire = new Date(
        e_expire.getTime() - (today.getTimezoneOffset() + 180) * 60000
    )

    if ( expire.getTime() != e_expire.getTime() ) {
        
        let diff = Date.now() - e_expire
        let safeExpire = new Date(e_expire.getTime() + 30 * 60 * 1000)
        if ( diff < 30 * 60 * 1000 ) return safeExpire

    }

    return expire

}
const logVisit = () => Cookies.set('visited', 'alpha', { expires: 7 })
const logWord = () => { 

    let word = []
    for ( let i = 0; i < 5; i++ ) {

        let box = document.getElementById(square[0] + '-' + (i + 1))
        word.push(box.innerText)

    }
    
    word = word.join('')
    Cookies.set('word' + square[0], word, { expires: expire })

}
const logWin = () => { 

    let period = expire
    Cookies.set('win', square[0], { expires: period })
    
    const today = new Date()
    const Y = today.getFullYear()
    const M = today.getMonth() + 1
    const D = today.getDate()

    Cookies.set('win-' + M + '/' + D + '/' + Y, square[0], { expires: 365 })

}
const getWords = () => {

    if ( !Cookies.get('visited') ) return []

    let words = []
    while ( words[words.length - 1] != null || words.length == 0 ) {
        words.push(Cookies.get('word' + (words.length + 1)))
    }

    words.splice(words.length - 1, 1)
    return words

}
const getWins = () => {

    if ( !Cookies.get('visited') ) return []

    let cookies = Cookies.get()
    let wins = []

    for ( let cookie in cookies ) {
        if ( cookie.startsWith('win-') ) wins.push(cookies[cookie])
    }

    return wins.map(Number)

}


// Core funcs
const makeWord = async () => {

    // Generate seeded entropy
    const seed = expire
    const hash = new TextEncoder().encode(seed)
    const digest = await crypto.subtle.digest('SHA-256', hash)
    const digestArray = Array.from(new Uint8Array(digest))
    const digestBin = digestArray.reduce(
        (str, byte) => str + byte.toString(2).padStart(8, '0'), 
        ''
    )
    

    // XOR entropy with cryptographic salt

    // Fetch salts
    let response = await fetch('./Data/salt.txt')
    let salt = await response.text()
    salt = salt.split('\n')[0]

    // XOR
    let xor = ''
    for ( let i = 0; i < digestBin.length; i++ ) {
        salt[i] != digestBin[i] ? xor += '1' : xor += '0'
    }


    // Generate word

    // Load resources
    response = await fetch('./Data/answers.txt')
    let text = await response.text()
    let answers = text.split('\n')

    // PRNG
    let random
    let minRandom = 0
    let maxRandom = 1

    for ( let i = 0; i < xor.length; i++ ) {
        
        random = (minRandom + maxRandom) / 2
        xor[i] == 1 ? minRandom = random : maxRandom = random

    }

    // Generate word
    let index = random * answers.length
    word = answers[Math.floor(index)]

}

const crossCheck = () => {

    let resultant = [0, 0, 0, 0, 0]
    let template = word.split('')
    
    let matrix = []
    for ( let i = 0; i < 5; i++ ) {
        
        let box = document.getElementById(square[0] + '-' + (i + 1))
        matrix.push(box.innerText)

    }


    // First pass - check for exact matches
    for ( let i = 0; i < 5; i++ ) {

        if ( matrix[i] == template[i] ) {

            resultant[i] = 1
            template[i] = ''

        }

    }


    // Second pass - check for exact family matches

    // Initialize families
    let template_family = []
    let word_family = []

    for ( let i = 0; i < 5; i++ ) {

        if ( resultant[i] != 0 ) {
            template_family.push('')
            word_family.push('')
            continue
        }

        for ( let k = 0; k < fidal.length; k++ ) {
                
            if ( fidal[k].includes(template[i]) ) template_family.push(keys[k])
            if ( fidal[k].includes(matrix[i]) ) word_family.push(keys[k])

        }

    }

    // Check for matches
    for ( let i = 0; i < 5; i++ ) {

        if (resultant[i] != 0) continue
        if ( word_family[i] == template_family[i] ) {

            resultant[i] = 2
            template[i] = ''
            template_family[i] = ''

        }

    }


    // Third pass - check for partial matches
    for ( let i = 0; i < 5; i++ ) {

        if ( resultant[i] != 0 ) continue
        for ( let j = 0; j < 5; j++ ) {

            if ( matrix[i] == template[j] ) {

                resultant[i] = 3
                template[j] = ''
                template_family[j] = ''

            }

        }

    }


    // Fourth pass - check for partial family matches
    for ( let i = 0; i < 5; i++ ) {

        if ( resultant[i] != 0 ) continue
        for ( let j = 0; j < 5; j++ ) {

            if ( word_family[i] == template_family[j] ) {

                resultant[i] = 4
                template[j] = ''
                template_family[j] = ''

            }

        }

    }

    return resultant

}

const isValid = () => {

    let word = []
    for ( let i = 0; i < 5; i++ ) {
        
        let box = document.getElementById(square[0] + '-' + (i + 1))
        word.push(box.innerText)

    }

    word = word.join('')
    return findInDictionary(word)

}

const type = letter => {

    let box = document.getElementById(square[0] + '-' + square[1])
    box.innerText = letter
    
    if ( square[1] == 5 && !isValid() ) paintIncorrect()

    if ( square[1] < 5 ) {
        paint(square)
        square[1]++
        paint(square)
    }

}

const backspace = () => {

    if ( square[1] > 1 ) {

        let squareContent = document.getElementById(
            square[0] + '-' + square[1]
        ).innerText  

        if ( squareContent.trim() == '' ) {
            paint(square)
            square[1]--
            paint(square)
        }

        document.getElementById(square[0] + '-' + square[1]).innerText = ' '

    } else {
        document.getElementById(square[0] + '-' + square[1]).innerText = ' '
    }

    document.getElementById(square[0]).classList.remove('incorrect')

}

const enter = () => {

    if ( !isValid() ) return
    
    let resultant = crossCheck()
    paintLetters(resultant)

    for ( let i = 0; i < 5; i++ ) {

        let className = ''
        switch (resultant[i]) {

            case 0: className = 'gray'; break
            case 1: className = 'green'; break
            case 2: className = 'pink'; break
            case 3: className = 'yellow'; break
            case 4: className = 'blue'; break
            default: className = 'gray'; break

        }

        let box = document.getElementById(square[0] + '-' + (i + 1))
        box.classList.add(className)

    }

    if ( 
        JSON.stringify(resultant) == '[1,1,1,1,1]'
        && Cookies.get('reveal') != 'true'
    ) {

        logWord(); logWin()
        celebrate()
        launchConfetti()
        launchFireworks()
        return

    }

    logWord()
    paint(square)
    square[0]++
    if ( square[0] > 5 ) createNextBlock()

    square[1] = 1
    paint(square)

}


// Menu funcs
const alertReveal = () => {

    Cookies.set('reveal', 'true', { expires: expire })
    alert('ቃሉ ' + word + ' ነበር።')

}

const toggleSettings = () => alert('ቅንብሮች የለም')

const toggleStats = () => {

    let statsModal = document.getElementById('stats-modal')
    statsModal.classList.toggle('show')

    const ctx = document.getElementById('stats-chartjs').getContext('2d')
    const data = getWins()
    const minLabel = 1
    const maxLabel = Math.max(...data)
    const labels = Array.from({ length: maxLabel }, (_, i) => i + minLabel)
    
    let histogram = Array.apply(null, Array(labels.length)).map(() => 0)
    for ( let i = 0; i < data.length; i++ ) {
        histogram[data[i] - 1]++
    }

    const chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: labels,
            datasets: [{
                axis: 'y',
                label: 'ድሎች',
                data: histogram,
                backgroundColor: '#588f3f',
            }],
        },
        options: {
            legend: {
                display: false,
            },
            scales: {
                y: {
                    beginAtZero: true,
                },
                yAxes: [{
                    gridLines: {
                        display: false,
                    },
                }],
                xAxes: [{
                    ticks: {
                        min: 0,
                        stepSize: 1,
                    }, 
                }],
            },
            responsive: true,
            maintainAspectRatio: false,
        },
    })

}

const reveal = () => {

    let revealModal = document.getElementById('reveal-modal')
    revealModal.classList.toggle('show')

}

const restoreSession = () => {

    let words = getWords()
    for ( let i = 0; i < words.length; i++ ) {

        let word = words[i].split('')
        for ( let j = 0; j < 5; j++ ) type(word[j])
        enter()

    }

    if ( Cookies.get('reveal') == 'true' ) alertReveal()

}


// Main

// Exports
window.focus = focus
window.type = type
window.backspace = backspace
window.enter = enter
window.toggleStats = toggleStats
window.toggleSettings = toggleSettings
window.reveal = reveal
window.alertReveal = alertReveal

// Startup routine
window.onload = () => {

    logVisit()
    paint(square)

    let promises = [
        loadDictionary(dictionaryURL), 
        loadUpdate(updateURL),
    ]
    Promise.all( 
        promises.map(
            promise => Promise.resolve(promise).catch( _ => _ ) 
        )
    ).then ( () => { 

        expire = expireeDate()
        makeWord().then( () => {
            
            endLoad()
            restoreSession()
            if (navigator.serviceWorker != 'undefined') {
                navigator.serviceWorker.register('./app.js')
            }

        } ) 

    } )

}

// Intialize event listeners
document.addEventListener(
    'keyup', 
    (e) => {     

        switch (e.key) {

            case 'Backspace': backspace(); break
            case 'Enter': enter(); break
            default: break

        }
    
    }
)

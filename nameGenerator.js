let name = []
const prompt = require('prompt-sync')({sigint: true})
const firstNameListMale = ['Athelbert', 'Artorius', 'Baradin', 'Charon', 'Dirk', 'Eadric', 'Falkor', 'Goronos', 'Horace', 'Ignatio', 'Justus', 'Kilgarron', 'Lethtoriace', 'Maltorius', 'Nostromo', 'Otto', 'Praestus', 'Quintus', 'Ramza', 'Silvarrion', 'Trenchard', 'Ultor', 'Vaxildahn', 'Wosler', 'Xaryu', 'Yanrion', 'Zell']
const firstNameListFemale = ['Aedeleas', 'Besseleth', 'Circe', 'Danile', 'Elspeth', 'Faile', 'Grunhilde', 'Hella', 'Isilda', 'Josephine', 'Kerys', 'Laedis', 'Millicent', 'Nelsa', 'Orbonne', 'Persephone', 'Quistis', 'Raith', 'Sylvanas', 'Tietra', 'Ulva', 'Veronice', 'Wilstrice', 'Xania', 'Yolanda', 'Zena']
const middleWord = ['Of', 'The']
const descriptor = ['Arrogant', 'Bold', 'Careless', 'Daring', 'Eager', 'Ferocious', 'Gallant', 'Hysterical', 'Ignorant', 'Just', 'Killer', 'Lauded', 'Malcontented', 'Noble', 'Obnoxious', 'Pure', 'Quiescent', 'Raucous', 'Sly', 'Terrible', 'Ugly', 'Voracious', 'Wakened', 'Xylophonist', 'Yawn-worthy', 'Zealot']
const place = ['Asgard', 'Beoulve', 'Cheem', 'Dorter', 'Eslion', 'Gerudo', 'Holmstadt', 'Intia', 'Jordwyne', 'Kingsfall', 'Lordaeron', 'Marcunis', 'Noxus', 'Osgilliath', 'Penholde', 'Quorus', 'Rathwall', 'Sasketch', 'Trillium', 'Utgarde', 'Viltard', 'Wrathgate', 'Xynastia', 'Yord', 'Zenk']

const generateFirstName = (gender) => {
    if (gender.toLowerCase() === 'male') {
        name.push(firstNameListMale[Math.floor(Math.random() * firstNameListMale.length)])
    } else if (gender.toLowerCase() === 'female') {
        name.push(firstNameListFemale[Math.floor(Math.random() * firstNameListFemale.length)])
    } else {
        throw new Error('Input must be male or female')
    }
}

const generateMiddle = () => {
    name.push(middleWord[Math.floor(Math.random() * middleWord.length)])
}

const generateEnd = (array) => {
    if (array[1] === 'Of') {
        name.push(place[Math.floor(Math.random() * place.length)])
    } else {
        name.push(descriptor[Math.floor(Math.random() * descriptor.length)])
    }
}

const gender = prompt('Welcome to the Fantasy Name Generator! What gender would you like - Male or Female?')

try {
    generateFirstName(gender)
    generateMiddle()
    generateEnd(name)
    console.log(`Hail, ${name.join(' ')}.`)
} catch(error) {
    console.log(error)
}
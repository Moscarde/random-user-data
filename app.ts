const names = require('./src/names')
const {randomNumber, randomAge} = require('./src/functions')

function randomName (genre: string) {
    let firtName = ''    

    let randomIndex = randomNumber()

    if (genre === 'm') {  
        firtName = names.brazilian.male[randomIndex]
    } else if (genre === 'f') {
        firtName = names.brazilian.female[randomIndex]
    } else {
        return
    }
    
    randomIndex = randomNumber()
    const surname = names.brazilian.last[randomIndex]

    const person = {
        name: `${firtName} ${surname}`,
        email: `${firtName.toLowerCase()}${surname.toLowerCase()}@email.com.br`,
        age: randomAge(10, 60)
    }

    return person
}

let n = 10
for (let i = 0; i < n; i++) {
    console.log('Masculino - ', randomName('m'))
    console.log('Feminino  - ', randomName('f'))
}

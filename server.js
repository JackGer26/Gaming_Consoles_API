const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let consoles = {
    'playstation 5': {
        'manufacturer': 'Sony',
        'releaseYear': 2020,
        'price': 499.99,
        'storage': '825GB SSD',
        'resolution': '4K',
        'exclusiveGames': ['Spider-Man: Miles Morales', 'Demon\'s Souls', 'Ratchet & Clank'],
        'backwardsCompatible': true,
        'onlineService': 'PlayStation Plus',
        'cpu': 'AMD Zen 2'
    },
    'xbox series x': {
        'manufacturer': 'Microsoft',
        'releaseYear': 2020,
        'price': 499.99,
        'storage': '1TB SSD',
        'resolution': '4K',
        'exclusiveGames': ['Halo Infinite', 'Forza Horizon 5', 'Gears 5'],
        'backwardsCompatible': true,
        'onlineService': 'Xbox Game Pass',
        'cpu': 'AMD Zen 2'
    },
    'nintendo switch': {
        'manufacturer': 'Nintendo',
        'releaseYear': 2017,
        'price': 299.99,
        'storage': '32GB',
        'resolution': '1080p docked / 720p handheld',
        'exclusiveGames': ['The Legend of Zelda: Breath of the Wild', 'Super Mario Odyssey', 'Animal Crossing'],
        'backwardsCompatible': false,
        'onlineService': 'Nintendo Switch Online',
        'cpu': 'NVIDIA Tegra X1'
    },
    'steam deck': {
        'manufacturer': 'Valve',
        'releaseYear': 2022,
        'price': 399.99,
        'storage': '64GB eMMC',
        'resolution': '1280x800',
        'exclusiveGames': ['Steam Library Access'],
        'backwardsCompatible': true,
        'onlineService': 'Steam',
        'cpu': 'AMD APU'
    },
    'playstation 4': {
        'manufacturer': 'Sony',
        'releaseYear': 2013,
        'price': 299.99,
        'storage': '500GB HDD',
        'resolution': '1080p',
        'exclusiveGames': ['The Last of Us Part II', 'God of War', 'Spider-Man'],
        'backwardsCompatible': false,
        'onlineService': 'PlayStation Plus',
        'cpu': 'AMD Jaguar'
    },
    'xbox one': {
        'manufacturer': 'Microsoft',
        'releaseYear': 2013,
        'price': 299.99,
        'storage': '500GB HDD',
        'resolution': '1080p',
        'exclusiveGames': ['Halo 5', 'Forza Motorsport', 'Gears of War 4'],
        'backwardsCompatible': true,
        'onlineService': 'Xbox Live Gold',
        'cpu': 'AMD Jaguar'
    },
    'nintendo 3ds': {
        'manufacturer': 'Nintendo',
        'releaseYear': 2011,
        'price': 169.99,
        'storage': '2GB SD Card',
        'resolution': '400x240 (top) / 320x240 (bottom)',
        'exclusiveGames': ['Pokemon X/Y', 'Super Mario 3D Land', 'Fire Emblem'],
        'backwardsCompatible': true,
        'onlineService': 'Nintendo Network',
        'cpu': 'ARM11 MPCore'
    },
    'nintendo wii': {
        'manufacturer': 'Nintendo',
        'releaseYear': 2006,
        'price': 249.99,
        'storage': '512MB Flash Memory',
        'resolution': '480p',
        'exclusiveGames': ['Wii Sports', 'Super Mario Galaxy', 'The Legend of Zelda: Twilight Princess'],
        'backwardsCompatible': true,
        'onlineService': 'Nintendo Wi-Fi Connection',
        'cpu': 'IBM PowerPC Broadway'
    },
    'playstation 3': {
        'manufacturer': 'Sony',
        'releaseYear': 2006,
        'price': 499.99,
        'storage': '20GB/60GB/80GB HDD',
        'resolution': '1080p',
        'exclusiveGames': ['The Last of Us', 'Uncharted Series', 'God of War III'],
        'backwardsCompatible': true,
        'onlineService': 'PlayStation Network',
        'cpu': 'Cell Broadband Engine'
    },
    'xbox 360': {
        'manufacturer': 'Microsoft',
        'releaseYear': 2005,
        'price': 399.99,
        'storage': '20GB HDD',
        'resolution': '1080p',
        'exclusiveGames': ['Halo 3', 'Gears of War', 'Forza Motorsport 2'],
        'backwardsCompatible': true,
        'onlineService': 'Xbox Live',
        'cpu': 'Xenon (PowerPC)'
    },
    'nintendo gamecube': {
        'manufacturer': 'Nintendo',
        'releaseYear': 2001,
        'price': 199.99,
        'storage': 'Memory Cards',
        'resolution': '480i',
        'exclusiveGames': ['Super Smash Bros. Melee', 'Metroid Prime', 'Super Mario Sunshine'],
        'backwardsCompatible': false,
        'onlineService': 'None',
        'cpu': 'IBM PowerPC Gekko'
    },
    'sega dreamcast': {
        'manufacturer': 'Sega',
        'releaseYear': 1999,
        'price': 199.99,
        'storage': 'VMU Memory Cards',
        'resolution': '480i',
        'exclusiveGames': ['Shenmue', 'Crazy Taxi', 'Jet Set Radio'],
        'backwardsCompatible': false,
        'onlineService': 'SegaNet',
        'cpu': 'Hitachi SH-4'
    },
    'nintendo 64': {
        'manufacturer': 'Nintendo',
        'releaseYear': 1996,
        'price': 199.99,
        'storage': 'Controller Pak',
        'resolution': '320x240',
        'exclusiveGames': ['Super Mario 64', 'The Legend of Zelda: Ocarina of Time', 'GoldenEye 007'],
        'backwardsCompatible': false,
        'onlineService': 'None',
        'cpu': 'NEC VR4300'
    },
    'super nintendo': {
        'manufacturer': 'Nintendo',
        'releaseYear': 1990,
        'price': 199.99,
        'storage': 'Battery Save',
        'resolution': '256x224',
        'exclusiveGames': ['Super Mario World', 'The Legend of Zelda: A Link to the Past', 'Super Metroid'],
        'backwardsCompatible': false,
        'onlineService': 'None',
        'cpu': 'Ricoh 5A22'
    },
    'unknown': {
        'manufacturer': 'unknown',
        'releaseYear': 'unknown',
        'price': 'unknown',
        'storage': 'unknown',
        'resolution': 'unknown',
        'exclusiveGames': 'unknown',
        'backwardsCompatible': 'unknown',
        'onlineService': 'unknown',
        'cpu': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const consoleName = request.params.name.toLowerCase()
    if(consoles[consoleName]){
        response.json(consoles[consoleName])
    }else{
        response.json(consoles['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
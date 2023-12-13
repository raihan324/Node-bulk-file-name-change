const fs = require('fs');
const path = require('path')

const filepath = '/users/raiha/OneDrive/Pictures/Screenshots'
const file = fs.readdirSync(filepath).filter(kk => kk.endsWith('.png'))
fs.readFile(file[0], (err, data) => {
    console.log(err)
})
// console.log(file)
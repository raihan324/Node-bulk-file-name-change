const fs = require('fs');
const path = require('path')

const filepath = '/Users/raiha/oneDrive/Desktop/All_work_file/Javascript/Node bulk file name change/Screenshots'
const files = fs.readdirSync(filepath).filter(kk => kk.endsWith('.png'))
console.log(files)
let count = 1
const extName = '.png'

files.forEach(file => {
    const oldPath = path.join(filepath, file)
    const newPath = path.join(filepath, count + extName)
    fs.renameSync(oldPath, newPath)
    console.log('Done ', count, ' ...')
    count++
})
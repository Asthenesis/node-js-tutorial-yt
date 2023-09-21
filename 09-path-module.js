const path = require('path')

// check path separator
console.log(path.sep)

// check a filepath
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

// check base
const base = path.basename(filePath)
console.log(base)

// return absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
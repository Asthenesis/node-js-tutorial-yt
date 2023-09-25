//Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')

require('./07-mind-grenade') //the code will run because a function that we invoke in '07-mind-grenade.js' file

// console.log(data)
// console.log(names)
// console.log('\n')
// sayHi('Irfan')
// sayHi(names.john)
// sayHi(names.peter)
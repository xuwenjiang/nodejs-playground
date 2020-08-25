const fs = require('fs')

console.log('a');

fs.readFile('./file.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

try {
    const data = fs.readFileSync('./file.txt', 'utf8')
    console.log('a-a');
    console.log(data)
    console.log('b-b');
  } catch (err) {
    console.error(err)
  }

console.log('b');
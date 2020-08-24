import {sayHello} from './hello.js';

sayHello();

const a = (param, param2) => {
  console.log('arrow ' + param2);
}

const b = w => console.log(w);

b('See? I am w');

setTimeout(() => {console.log('timeout')}, 0);

let done = false;

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
})

const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {
      console.log('OK ' + ok)
    })
    .catch(err => {
      console.error('ERR ' + err)
    })
}

checkIfItsDone()

a(1,2);

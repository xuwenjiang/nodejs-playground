// import function and call it
import {sayHello} from './hello.js';
sayHello();

// define arrow function a
const a = (param, param2) => {
  console.log('arrow function a ' + param2);
}

// define arrow function b and call it
const b = w => console.log(w);

b('See? I am arrow function b\'s w');

// set a callback, it is ut in the "Message Queue"
setTimeout(() => {console.log('timeout called after job queue')}, 0);

// ECMAScript 2015 introduced "Job Queue", which is used by Promises (will exectute as soon as possible)
// so it is before above callback.  and that is a big difference
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

// call previously defined arrow function a.
a(1,2);

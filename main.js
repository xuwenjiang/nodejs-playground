// import function and call it
const hello = require('./hello')

hello.sayHello();

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


// promises were introduced to solve callback hell problem. but still complexity on their own
const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 1000)
  })
}

const doSomething = async () => {
  console.log('In function before');
  // from what I see here, it will block following lines, "in function after" will berendered after await.
  console.log(await doSomethingAsync());
  console.log('In function after');
}

console.log('Before')
doSomething()
console.log('After')


// Prepending the async keyword to any function means that the function will return a promise.
// Even if it's not doing so explicitly, it will internally make it return a promise
const alert = (x) => {console.log(x);}

const aFunction = async () => {
  return 'a function'
}
aFunction().then(alert) 


const bFunction = async () => {
  return Promise.resolve('b function')
}
bFunction().then(alert) // This will alert 'test'


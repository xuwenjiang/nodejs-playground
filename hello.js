function sayHello() {
  console.log(returnHello());
}

function returnHello() {
  return 'Hello';
}

exports.sayHello = sayHello
exports.returnHello = returnHello

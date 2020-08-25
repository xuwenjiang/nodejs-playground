const hello = require('./hello')

test('return hello', () => {
    expect(hello.returnHello()).toBe('Hello');
})

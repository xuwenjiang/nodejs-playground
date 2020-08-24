import { returnHello } from './hello'

test('return hello', () => {
    expect(returnHello()).toBe('Hello');
});
  
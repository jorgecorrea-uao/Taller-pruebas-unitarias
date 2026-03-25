import { add, isEven, factorial, findMax, wordCount } from './utils';
// Pruebas para add()
test('suma de 2 + 3 debe ser 5', () => {
expect(add(2, 3)).toBe(5);
});
// Pruebas para isEven()
test('4 es un número par', () => {
expect(isEven(4)).toBe(true);
});
test('5 no es un número par', () => {
expect(isEven(5)).toBe(false);
});
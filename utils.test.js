import { add, isEven, factorial, findMax, wordCount } from './utils';

// Casos Exitosos

// Pruebas para add()
test('suma de 10 + 7 debe ser 17', () => {
  const a = 10, b = 7;
  const resultado = add(a, b);
  expect(resultado).toBe(17);
});

test('suma de números negativos -1 + -9 debe ser -10', () => {
  const a = -1, b = -9;
  const resultado = add(a, b);
  expect(resultado).toBe(-10);
});

// Pruebas para isEven()
test('8 es un número par', () => {
  const num = 8;
  const resultado = isEven(num);
  expect(resultado).toBe(true);
});

test('3 no es un número par', () => {
  const num = 3;
  const resultado = isEven(num);
  expect(resultado).toBe(false);
});

// Pruebas para factorial()
test('factorial de 4 debe ser 24', () => {
  const n = 4;
  const resultado = factorial(n);
  expect(resultado).toBe(24);
});

test('factorial de 6 debe ser 720', () => {
  const n = 6;
  const resultado = factorial(n);
  expect(resultado).toBe(720);
});

// Pruebas para findMax()
test('el mayor de [4, 7, 2, 15, 6] debe ser 15', () => {
  const numeros = [4, 7, 2, 15, 6];
  const resultado = findMax(numeros);
  expect(resultado).toBe(15);
});

test('el mayor de [99] debe ser 99', () => {
  const numeros = [99];
  const resultado = findMax(numeros);
  expect(resultado).toBe(99);
});

// Pruebas para wordCount()
test('"buenos dias" tiene 2 palabras', () => {
  const texto = "buenos dias";
  const resultado = wordCount(texto);
  expect(resultado).toBe(2);
});

test('"la casa es grande" tiene 4 palabras', () => {
  const texto = "la casa es grande";
  const resultado = wordCount(texto);
  expect(resultado).toBe(4);
});

// Casos Fallidos

test('factorial de número negativo debe retornar undefined', () => {
  const n = -5;
  const resultado = factorial(n);
  expect(resultado).toBeUndefined();
});

test('findMax con array vacío debe retornar undefined', () => {
  const numeros = [];
  const resultado = findMax(numeros);
  expect(resultado).toBeUndefined();
});

test('findMax con una cadena de texto debe retornar undefined', () => {
  const entrada = "no soy un array";
  const resultado = findMax(entrada);
  expect(resultado).toBeUndefined();
});

test('wordCount con un número debe retornar 0', () => {
  const entrada = 9999;
  const resultado = wordCount(entrada);
  expect(resultado).toBe(0);
});

test('wordCount con null debe retornar 0', () => {
  const entrada = null;
  const resultado = wordCount(entrada);
  expect(resultado).toBe(0);
});

// Casos Límite

test('suma con 0 debe retornar el mismo número (0 + 5 = 5)', () => {
  const a = 0, b = 5;
  const resultado = add(a, b);
  expect(resultado).toBe(5);
});

test('el 0 debe ser considerado par', () => {
  const num = 0;
  const resultado = isEven(num);
  expect(resultado).toBe(true);
});

test('factorial de 0 debe ser 1', () => {
  const n = 0;
  const resultado = factorial(n);
  expect(resultado).toBe(1);
});

test('findMax con todos negativos [-2, -8, -15] debe retornar -2', () => {
  const numeros = [-2, -8, -15];
  const resultado = findMax(numeros);
  expect(resultado).toBe(-2);
});

test('wordCount con solo espacios debe retornar 1', () => {
  const texto = "   ";
  const resultado = wordCount(texto);
  expect(resultado).toBe(1);
});

// Función para sumar dos números
export function add(a, b) {
return a + b;
}
// Función para verificar si un número es par
export function isEven(num) {
return num % 2 === 0;
}
// Función para calcular el factorial de un número
export function factorial(n) {
if (n < 0) return undefined;
if (n === 0) return 1;
return n * factorial(n - 1);
}
// Función para encontrar el mayor número en un array
export function findMax(numbers) {
if (!Array.isArray(numbers) || numbers.length === 0) return undefined;
return Math.max(...numbers);
}
// Función para contar las palabras en una cadena de texto
export function wordCount(text) {
if (typeof text !== "string") return 0;
return text.trim().split(/\s+/).length;
}
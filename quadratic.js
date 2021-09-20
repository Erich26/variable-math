const a = 1;
const b = 20;
const c = 15;

const root = Math.sqrt( (b * b) - (4 *a * c) );
const den = 2 * a;

const x1 = (-b + root)/den;
const x2 = (-b - root)/den;

console.log('x1 is ', x1)
console.log('xs is ', x2)


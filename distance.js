const x1 = 25;
const y1 = 33;
const x2 = 20;
const y2 = 15;

const x = x2 - x1; 
const y = y2 - y1;

const xsq = x ** 2;
const ysq = y ** 2;

const alm = xsq + ysq;

const d = alm ** 0.5


console.log('The distance between points is ', d)
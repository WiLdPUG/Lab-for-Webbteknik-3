export function add(a, b) {
    return a + b; 
}

export function subtract(a, b) {
    return a - b; 
}

export function multiply(a, b) {
    return a * b;
}

export default function divide(a, b) {
    return a / b;
}

export function circleArea(radius) {
    return Math.PI * radius * radius;
}

export const PI = 3.14159;
export const SECRET_SAUCE = 42;

import { rectangleArea, rectanglePerimeter } from "../rectangles";


console.log(`Area of 5x10 rectangle: ${rectangleArea(5, 10)}`);     
console.log(`Perimeter of 5x10 rectangle: ${rectanglePerimeter(5, 10)}`); 
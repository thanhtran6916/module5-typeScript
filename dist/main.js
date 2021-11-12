"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rectangle_1 = require("./rectangle");
let width = 5;
let height = 10;
let area = width * height;
console.log(area);
let sum = 0;
let count = 0;
for (let i = 0; i < 30; i++) {
    if (i % 2 == 0) {
        sum += i;
        count++;
    }
}
console.log(sum);
console.log(count);
function isPrime(number) {
    let isPrime = true;
    if (number < 2) {
        isPrime = false;
    }
    else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
let numbers = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
for (let number of numbers) {
    if (isPrime(number)) {
        console.log(number);
    }
}
let rectangle = new rectangle_1.Rectangle(2, 2, 3, 3);
console.log(rectangle.area());
//# sourceMappingURL=main.js.map
import {Rectangle} from "./rectangle";

let width: number = 5;
let height: number = 10;
let area: number = width * height;
console.log(area);

let sum: number = 0;
let count: number = 0;
for (let i = 0; i < 30; i++) {
    if (i % 2 == 0) {
        sum += i;
        count++;
    }
}
console.log(sum);
console.log(count);

function isPrime(number: number): boolean {
    let isPrime = true;
    if (number < 2) {
        isPrime = false
    } else {
        for (let i = 2; i <= Math.sqrt(number) ; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}

let numbers: number[] = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
for (let number of numbers) {
    if (isPrime(number)) {
        console.log(number);
    }
}

let rectangle = new Rectangle(2, 2, 3, 3);
console.log(rectangle.area());

let money = 10000;

let buyCar = (car: any) => {
    return new Promise((success, fail) => {
        if (money > 10000) {
            success("car" + car);
        } else if (money == 10000) {
            fail("not Buy");
        }
    })
}

let promise = buyCar("vinfast").then((value) => {
    console.log(value);
}, (error) => {
    console.log(error);
})

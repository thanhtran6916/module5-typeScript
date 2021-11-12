var width = 5;
var height = 10;
var area = width * height;
console.log(area);
var sum = 0;
var count = 0;
for (var i = 0; i < 30; i++) {
    if (i % 2 == 0) {
        sum += i;
        count++;
    }
}
console.log(sum);
console.log(count);
function isPrime(number) {
    var isPrime = true;
    if (number < 2) {
        isPrime = false;
    }
    else {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
var numbers = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    if (isPrime(number)) {
        console.log(number);
    }
}

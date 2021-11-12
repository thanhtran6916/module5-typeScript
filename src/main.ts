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

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

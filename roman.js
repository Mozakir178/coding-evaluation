let array = [1, 2, 3, 4, 5, 8, 6, 7, 8, 9, 10];
let r = 50;
let n = array.length;
let pre = 0;
let count = 0;
for (let i = 0; i < n; i++) {
    if (array[i] > pre) {
        pre = array[i];
        count++;
    }
}

console.log(count * r);
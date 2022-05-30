let arr = "indian are not that kind of the people who will never let you down";
let n = arr.length;

for (let i = 0; i < n;) {
    if (i % 2 == 0)
        console.log(arr[i]);

    i = i + 2;
}
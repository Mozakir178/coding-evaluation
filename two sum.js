var array = [1, 2, 3, 4, 5, 6, 6, 7, 8];
var target = 7;

function two_sum(array, target) {

    var start = 0;
    var end = array.length - 1;

    while (start < end) {


        var sum = array[start] + array[end];

        if (sum == target) {
            var result = start + " " + end;
            var last = end;
            var first = start;
            break;


        }
        if (sum < target) {
            start++;
        } else if (sum > target) {
            end--;
        }

    }

    for (var i = last; i < first; i--) {
        console.log("yes")
        if (array[i] == array[last]) {

            result = start + " " + i;
        }
    }

    console.log(result);


}


two_sum(array, target);

// console.log(s);
































// var array = [2, 3, 6, 7, 2, 6, 8, 9];
// var target = 14;

// function two_sum(array, target) {
//     var count = 0;
// var new_arr = [];
// for (var i = 0; i < array.length; i++) {

//     var remaining = target - array[i];

//     for (var j = 0; j < new_arr.length; j++) {
//         // console.log(new_arr[j]);
//         count++;
//         if (new_arr[j] == remaining) {
//             var result = [j, i, count];
//             i = array.length;
//             break;
//         }

//     }
//     new_arr.push(array[i]);

// }
// if (result == undefined) {
//     result = "Target is not present in the array"
//     // }

//     for (var i = 0; i < array.length; i++) {
//         for (var j = i + 1; j < array.length; j++) {
//             count++;
//             if (array[i] + array[j] == target) {
//                 var result = [i, j, count]
//                 i = array.length;
//             }
//         }
//     }
//     return result;

// }


// console.log(two_sum(array, target));
function arr(a) {

    var n = a.length;
    for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {
            if (a[i] > a[j]) {
                var a2 = a[i];
                a[i] = a[j];
                a[j] = a2;
            }

        }
    }
    console.log(a)
}
var ar = [1, 3, 2, 5, 4, 6, 7, 9, 8, 8, 5, 22, 8, 5, 3, 2, 4, 6, 3, 7, 3, 5, 6473274728, 4423253, 144635, 1423, -1142, 8475198, -58845, 98425, -85239732, 7, 89, 6, 365, 88, 25, 74, 5867, 25, 1432]
    // arr(ar);

function sort(arr) {

    var count = false;

    while (!count) {
        count = true;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                var temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
                count = false;
            }

        }
    }
    console.log(arr);
}

sort(ar);
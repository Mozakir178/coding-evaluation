// var str = "India is great and i am proud of it.";
// var str = "Indiai"

var str = "abbaan"

function max_substring(str) {
    var n = str.length;
    var max = 1;


    for (var i = 0; i < n; i++) {
        var mew_str = "";
        for (var j = i; j < str.length; j++) {

            // for (var k = i; k <= j; k++) {
            mew_str += str[j];

            // console.log(mew_str);
            if (checkpell(mew_str)) {
                var l = mew_str.length;
                if (l > max) {
                    max = l;
                }

            }
            // }

        }
    }
    return max;
}


console.log(max_substring(str));

function checkpell(str) {
    var rstr = str.split("").reverse().join("");
    return str == rstr;
}
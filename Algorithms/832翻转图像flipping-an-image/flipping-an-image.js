/* leetcode　832.翻转图像 JavaScript实现　*/

/** * @param {number[][]} A * @return {number[][]} */
var flipAndInvertImage = function(A) {
    var resArr = A.map(function(arr) {
        var reversedArr = arr.reverse();
        reversedArr.forEach(function(v, i) {
            reversedArr[i] = (v == 0) ? 1 : 0;
        });
        return reversedArr;
    });
    return resArr;
};
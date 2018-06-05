/* leetcode　118杨辉三角pascals-triangle JavaScript实现　*/

/** * @param {number} numRows * @return {number[][]} */
var generate = function(numRows) { /*    一个数组，保存上一行值*/
    var resArr = [];
    var arr = [];
    for (var i = 0; i < numRows; i++) {
        var arr1 = []; /*        有第一个就加进去。*/
        if (arr[0]) {
            arr1.push(arr[0]);
        }
        var j = 0; /*        如果有下一个，就加一个。*/
        while (arr[j + 1]) {
            arr1.push(arr[j] + arr[j + 1]);
            j++;
        } /*        最后再加一个1*/
        arr1.push(1); /*        把值给arr以进行下一轮计算。*/
        arr = arr1;
        resArr.push(arr);
    }
    return resArr;
};
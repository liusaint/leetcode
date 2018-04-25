/** * @param {number} a * @param {number} b * @return {number} */ /*这个方法真的是。。。没啥用啊。生成两个数组，连起来，求长度。*/ /* 如果有负数的情况需要用eval把拼出来的字符串求值。*/
var getSum = function(a, b) {
    if (a >= 0 && b >= 0) {
        var arrA = new Array(a);
        var arrB = new Array(b);
        var arrC = arrA.concat(arrB);
        return arrC.length;
    } else if (a < 0) {
        return eval([b, a].join(''))
    } else {
        return eval([a, b].join(''))
    }
};
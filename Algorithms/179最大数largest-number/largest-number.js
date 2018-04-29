/*20180429*/ /*一些考虑的情况 128，12;121，12;   3, 30, 34;  883,8;    8308,830;85,87*/
var largestNumber = function(nums) {
    var sortedStrs = nums.map(function(v) {
        return v.toString();
    });
    var sortedNums = sortedStrs.sort(function(a, b) {
        a = a.toString();
        b = b.toString();
        var aLen = a.length;
        var bLen = b.length; /*        将自身重复一直到n位。*/
        function fix(str, len) {
            var res = '';
            if (str == '') {
                return '';
            }
            while (res.length < len) {
                res += str;
            }
            return res.slice(0, len);
        } /*         在长度不同且一个包含另一个的时候才需要这样对比。*/
        if (aLen != bLen && (a.indexOf(b) == 0 || b.indexOf(a) == 0)) { /*            a长，给b加。用自身填满自己，使两个数据一样长再进行对比。*/
            if (aLen > bLen) {
                b = fix(b, aLen);
            } else {
                a = fix(a, bLen);
            }
        } /*        有可能出现结果一样的情况。*/
        if (a == b) {
            if (aLen > bLen) {
                var toCompare = a.slice(bLen);
                var maxLen = Math.max(toCompare.length, b.length);
                if (fix(toCompare, maxLen) < fix(b, maxLen)) {
                    return -1;
                } else {
                    return 1;
                }
            } else { /*                去掉相同的。*/
                var toCompare = b.slice(aLen);
                var maxLen = Math.max(toCompare.length, a.length); /*                循环去除掉与b一样的。用剩下的再做一次补齐对比。*/
                if (fix(a, maxLen) < fix(toCompare, maxLen)) {
                    return -1;
                } else {
                    return 1;
                }
            }
        } else if (a < b) {
            return -1;
        } else {
            return 1;
        }
    });
    var res = sortedNums.reverse().join(''); /*    把前面多余的0去掉。*/
    var res = res.replace(/^[0]*/, '');
    if (res.length == 0) {
        return '0';
    }
    return res;
};
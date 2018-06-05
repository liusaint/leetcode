/* leetcode　409最长回文串longest-palindrome JavaScript实现　*/

/** * @param {string} s * @return {number} */
var longestPalindrome = function(s) {
    if (s.length == 0) {
        return 0;
    }
    var sArr = s.split('');
    var cacheObj = {};
    var res = 0; /*    先计算出每一个字母有几个。*/ /*    有2个的先扣掉给结果。*/ /*    剩下的就都是单数的。*/
    sArr.forEach(function(v, i) {
        if (cacheObj[v] == undefined) {
            cacheObj[v] = 0;
        }
        cacheObj[v]++;
        if (cacheObj[v] == 2) {
            res += 2;
            delete cacheObj[v];
        }
    }); /*    如果对象中有值，说明还有单数的，最多可以利用一个。*/
    if (JSON.stringify(cacheObj) != "{}") {
        res++;
    }
    return res;
};
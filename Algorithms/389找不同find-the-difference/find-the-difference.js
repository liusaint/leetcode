/* leetcode　389找不同find-the-difference JavaScript实现　*/

/** * @param {string} s * @param {string} t * @return {character} */
var findTheDifference = function(s, t) {
    var s1 = s.split('').sort();
    var t1 = t.split('').sort(); /*    先排序。找出第一个不一样的。*/
    for (var i = 0; i < s.length; i++) {
        if (s1[i] != t1[i]) {
            return t1[i];
        }
    }
    return t1[t1.length - 1]
};
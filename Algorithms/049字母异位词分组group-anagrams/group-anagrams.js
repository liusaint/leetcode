/* leetcode　049字母异位词分组group-anagrams JavaScript实现　*/

/** * @param {string[]} strs * @return {string[][]} */
var groupAnagrams = function(strs) {
    var obj = {};
    for (var i = 0; i < strs.length; i++) {
        var str = strs[i];
        var key = strs[i].split('').sort().join('');
        if (!obj[key]) {
            obj[key] = [];
        }
        obj[key].push(str);
    }
    var res = [];
    for (var j in obj) {
        if (obj.hasOwnProperty(j)) {
            res.push(obj[j])
        }
    }
    return res;
};
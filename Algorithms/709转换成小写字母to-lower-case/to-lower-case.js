/* leetcode　709.转换成小写字母 JavaScript实现　*/

/** * @param {string} str * @return {string} */
var toLowerCase = function(str) {
    var bigArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var smallArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var replaceObj = {}; /*    生成大小字母的映射。*/
    bigArr.forEach(function(v, i) {
        replaceObj[v] = smallArr[i];
    });
    var resArr = [];
    for (var s of str) {
        replaceObj[s] ? resArr.push(replaceObj[s]) : resArr.push(s);
    }
    return resArr.join('');
};
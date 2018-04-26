/** * @param {string} s * @param {string} t * @return {boolean} */ /*另一种错误的答案是看结构[1,2,1,4]这种没有考虑映射相同字符等等。只是基本的格式相同。*/
var isIsomorphic = function(s, t) {
    var sArr = s.split('');
    var tArr = t.split('');
    var sLen = sArr.length;
    var tLen = tArr.length;
    if (sLen != tLen) {
        return false;
    }
    var sObj = {};
    var tObj = {};
    for (var i = 0; i < sLen; i++) {
        var sItem = sArr[i];
        var tItem = tArr[i]; /*        要么两个都有，要么两个都没有。*/
        if (!sObj[sItem] && !tObj[tItem]) {
            sObj[sItem] = tItem;
            tObj[tItem] = sItem;
        } else if (!sObj[sItem] || !tObj[tItem]) { /*            如果一个有，另一个没有，说明不匹配*/
            return false;
        } else if (sObj[sItem] != tItem || tObj[tItem] != sItem) {
            return false;
        }
    }
    return true;
};
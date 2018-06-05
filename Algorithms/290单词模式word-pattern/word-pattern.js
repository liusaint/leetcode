/* leetcode　290单词模式word-pattern JavaScript实现　*/

/** * @param {string} pattern * @param {string} str * @return {boolean} */
var wordPattern = function(pattern, str) {
    var pArr = pattern.split('');
    var sArr = str.split(' ');
    var pLen = pArr.length;
    var sLen = sArr.length;
    if (pLen != sLen) {
        return false;
    }
    var pObj = {};
    var sObj = {};
    for (var i = 0; i < pLen; i++) {
        var pItem = pArr[i];
        var sItem = sArr[i]; /*        要么两个都有，要么两个都没有。*/
        if (!pObj[pItem] && !sObj[sItem]) {
            pObj[pItem] = sItem;
            sObj[sItem] = pItem;
        } else if (!pObj[pItem] || !sObj[sItem]) { /*            如果一个有，另一个没有，说明不匹配*/
            return false;
        } else if (pObj[pItem] != sItem || sObj[sItem] != pItem) {
            return false;
        }
    }
    return true;
};
/** * @param {string} S * @param {string} T * @return {string} */
var customSortString = function(S, T) {
    var sArr = S.split('');
    var sObj = {};
    sArr.forEach(function(v, i) {
        sObj[v] = i;
    });
    var tArr = T.split('');
    var resArr = tArr.sort(function(a, b) {
        var indexA = sObj[a] || 0;
        var indexB = sObj[b] || 0;
        return indexA - indexB;
    });
    return resArr.join('');
};
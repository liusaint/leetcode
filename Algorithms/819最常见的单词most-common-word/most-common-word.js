/** * @param {string} paragraph * @param {string[]} banned * @return {string} */
var mostCommonWord = function(paragraph, banned) { /*    转成小写先。*/
    var s = paragraph.toLocaleLowerCase(); /*    替换标点符号*/
    s = s.replace(/!|\?|'|,|;|\./g, '');
    var sArr = s.split(/\s+/);
    var map = {};
    var res = ''; /*    统计*/
    for (var i = 0; i < sArr.length; i++) {
        var item = sArr[i]; /*        跳过。*/
        if (banned.indexOf(item) > -1) {
            continue;
        }
        if (!map[item]) {
            map[item] = 0;
        }
        map[item]++;
        if (res) {
            if (map[item] > map[res]) {
                res = item;
            }
        } else {
            res = item;
        }
    }
    return res;
};
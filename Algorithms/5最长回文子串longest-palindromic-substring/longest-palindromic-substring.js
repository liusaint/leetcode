/** * @param {string} s * @return {string} */
var longestPalindrome = function(s) {
  if (s.length == 0) {
    return '';
  }
  var sArr = s.split('');
  var res = '';
  var item; /*    一种情况是以自身为中轴，往两边找。 如aba.*/ /*    二种情况是有很多重复的自身。以这些重复的自身为中轴。*/ /*    首先计算出中轴的起止位。*/
  for (var i = 0; i < s.length; i++) {
    item = sArr[i];
    var subS = item;
    var beforeIndex = 1;
    while (true) {
      if (sArr[i - beforeIndex] == item) {
        beforeIndex++;
        subS += item;
      } else {
        break;
      }
    }
    var afterIndex = 1;
    while (true) {
      if (sArr[i + afterIndex] == item) {
        afterIndex++;
        subS += item;
      } else {
        break;
      }
    }
    var inteval = 1;
    while (true) {
      var before = sArr[i - beforeIndex + 1 - inteval];
      var after = sArr[i + afterIndex - 1 + inteval]; /*            before,after这个思路还是有点不对。abbc这*/
      if (before && after && before == after) {
        inteval++;
        subS = before + subS + after;
      } else {
        break;
      }
    }
    if (subS.length > res.length) {
      res = subS;
    }
  }
  return res;
};
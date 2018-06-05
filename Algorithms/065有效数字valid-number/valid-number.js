/* leetcode　065有效数字valid-number JavaScript实现　*/

/** * @param {string} s * @return {boolean} */ /* 处理" -."*/ /* 处理"+.8"*/ /* 处理"46.e3" true*/ /* 处理".e1" false*/ /* 处理" 005047e+6" true;*/ /* 处理"4e+" false*/
var isNumber = function(s) {
    str = s.trim();
    if (str.length == 0) {
        return false;
    }
    var numReg = /^[+-]?\d*(\.\d*)?(e[+-]?\d+)?$/;
    var matchNum = str.match(numReg);
    if (matchNum) {
        var eIndex = str.indexOf('e');
        if (eIndex == 0 || eIndex == str.length - 1) {
            return false;
        } else if (eIndex > 0) {
            if (str.charAt(eIndex - 1).match(/\d|\./)) { /*                处理" -."*/
                if (str.match(/^[+-]?\.e/)) {
                    return false;
                }
                return true;
            }
            return false;
        }
        var dIndex = str.indexOf('.');
        if (dIndex == str.length - 1) {
            if (dIndex == 0) {
                return false;
            } /*            处理" -."*/
            if (str.match(/[+-]\.$/)) {
                return false;
            }
            return true;
        } else if (dIndex > 0 && !str.charAt(dIndex + 1).match(/\d/)) {
            return false;
        }
        return true;
    }
    return false;
};
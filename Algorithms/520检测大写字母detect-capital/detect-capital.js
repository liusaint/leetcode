/* leetcode　520检测大写字母detect-capital JavaScript实现　*/

/** * @param {string} word * @return {boolean} */
var detectCapitalUse = function(word) {
    var bigReg = /[A-Z]+/g;
    var smallReg = /[a-z]+/g;
    var wordLen = word.length;

    function match(word, reg) {
        if (word == '') {
            return true;
        }
        var len = word.length;
        var match = word.match(reg);
        if (match && match[0].length == len) {
            return true;
        }
        return false;
    }
    if (match(word, bigReg) || match(word, smallReg)) {
        return true;
    }
    if (match(word.slice(0, 1), bigReg) && match(word.slice(1), smallReg)) {
        return true;
    }
    return false;
};
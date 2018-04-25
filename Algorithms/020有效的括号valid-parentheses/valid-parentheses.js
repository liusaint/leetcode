/** * @param {string} s * @return {boolean} */ /* 不断替换掉里面的(){}[],最后如果还有剩下的，说明不对。*/
var isValid = function(s) {
    var splitReg = /(\(\))|(\[\])|(\{\})/g;
    while (s.match(splitReg)) {
        s = s.replace(splitReg, '')
    }
    return s === '';
};
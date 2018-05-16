/** * @param {string} S * @return {string[]} */
var letterCasePermutation = function(S) {
    if (S.length == 0) {
        return [""];
    }
    var SArr = S.split('');
    var reg = /[a-zA-Z]/;
    var partArr = [];
    if (SArr[0].match(reg)) {
        partArr = [SArr[0].toLocaleLowerCase(), SArr[0].toLocaleUpperCase()];
    } else {
        partArr = [SArr[0]];
    }
    var len = SArr.length; /*    如果是数字，直接加在后面。如果是字母。则原来的每一个都加一个小写，并把原来的每一个加一个大写放在数组中。*/
    for (var i = 1; i < len; i++) {
        var item = SArr[i];
        var partLen = partArr.length;
        var isMatch = item.match(reg);
        for (var j = 0; j < partLen; j++) {
            var partItem = partArr[j];
            if (isMatch) {
                partArr[j] = partItem + item.toLocaleLowerCase();
                partArr.push(partItem + item.toLocaleUpperCase());
            } else {
                partArr[j] = partArr[j] + item;
            }
        }
    }
    return partArr;
};
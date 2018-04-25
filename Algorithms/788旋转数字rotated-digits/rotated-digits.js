/** * @param {number} N * @return {number} */
var rotatedDigits = function(N) {
    var res = [];
    var noOkReg = /[347]+/
    for (var i = 1; i <= N; i++) {
        var iStr = i.toString(); /*        如果含有3，4，7，跳过。*/
        if (iStr.match(noOkReg)) {
            continue;
        } /*        字符串替换。*/
        iStr = iStr.replace(/(2)|(5)|(6)|(9)/g, function(match, $1, $2, $3, $4) {
            if ($1) {
                return 5;
            }
            if ($2) {
                return 2;
            }
            if ($3) {
                return 9;
            }
            if ($4) {
                return 6;
            }
        });
        if (i != parseInt(iStr)) {
            res.push(i);
        }
    }
    return res.length;
};
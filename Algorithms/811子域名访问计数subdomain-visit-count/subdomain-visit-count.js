/** * @param {string[]} cpdomains * @return {string[]} */
var subdomainVisits = function(cpdomains) {
    var obj = {};
    cpdomains.forEach(function(cpdomain, i) {
        var splitArr = cpdomain.split(' ');
        var domainArr = splitArr[1].split('.');
        var count = parseInt(splitArr[0], 10);
        var okDomain = '';
        var len = domainArr.length; /*        翻转了一下。*/
        domainArr.reverse().forEach(function(domain, j) {
            if (!okDomain) {
                okDomain = domain;
            } else {
                okDomain = domain + '.' + okDomain;
            }
            if (!obj[okDomain]) {
                obj[okDomain] = 0;
            }
            obj[okDomain] += count;
        })
    });
    var res = [];
    for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
            res.push(obj[k] + ' ' + k);
        }
    }
    return res;
};
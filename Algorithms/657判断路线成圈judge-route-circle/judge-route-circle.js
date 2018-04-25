/** * @param {string} moves * @return {boolean} */ /*只需要判断L的数量等于R的数量。U的数量等于D的数量？*/
var judgeCircle = function(moves) {
    var Ls = moves.match(/L/g);
    var Rs = moves.match(/R/g);
    var Us = moves.match(/U/g);
    var Ds = moves.match(/D/g);
    var LLen = Ls ? Ls.length : 0;
    var RLen = Rs ? Rs.length : 0;
    var ULen = Us ? Us.length : 0;
    var DLen = Ds ? Ds.length : 0;
    return LLen == RLen && ULen == DLen;
};
/* leetcode　796旋转字符串rotate-string JavaScript实现　*/

/** * @param {string} A * @param {string} B * @return {boolean} */
var rotateString = function(A, B) {
    if (A.length != B.length) {
        return false;
    } /*    拼起来，看在里面不。*/
    if ((B + B).indexOf(A) > -1) {
        return true;
    }
    return false;
};
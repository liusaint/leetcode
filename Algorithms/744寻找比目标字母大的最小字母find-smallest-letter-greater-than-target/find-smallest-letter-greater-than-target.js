/** * @param {character[]} letters * @param {character} target * @return {character} */
var nextGreatestLetter = function(letters, target) {
    var arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var arrLen = arr.length;
    var i = arr.indexOf(target);
    while (true) {
        i++;
        if (i == arrLen) {
            i = 0;
        }
        if (letters.indexOf(arr[i]) > -1) {
            return arr[i];
        }
    }
    return target;
};
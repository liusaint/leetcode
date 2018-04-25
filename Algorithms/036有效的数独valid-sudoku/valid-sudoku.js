/** * @param {character[][]} board * @return {boolean} */
var isValidSudoku = function(board) { /*    检查一个数组中是否有重复。*/
    function checkRepeat(arr) {
        var numObj = {};
        for (var i = 0; i < arr.length; i++) {
            var v = arr[i];
            if (v == '.') {
                continue;
            } /*            数量为2就就重复了，直接return;*/
            if (!numObj[v]) {
                numObj[v] = 1;
            } else {
                return true;
            }
        }
        return false;
    } /*    检查一个数组集合是否合格。*/
    function checkArrRepeat(arr) {
        for (var j = 0; j < arr.length; j++) {
            if (checkRepeat(arr[j])) {
                return true;
            }
        }
        return false;
    } /*    每一横行检查*/
    if (checkArrRepeat(board)) {
        return false;
    } /*    生成竖行*/
    var colArr = [];
    board.forEach(function(v, i) {
        for (var j = 0; j < 9; j++) {
            if (colArr[j] == undefined) {
                colArr[j] = [];
            }
            colArr[j].push(v[j])
        }
    });
    if (checkArrRepeat(colArr)) {
        return false;
    } /*    生成九格。*/
    var box9Arr = [];
    for (var x = 0; x < 9; x++) {
        for (var y = 0; y < 9; y++) {
            var item = board[y][x]; /*            根据x,y坐标计算在大数组中的index。*/
            var index = (Math.floor(x / 3) + 1) + (Math.floor(y / 3)) * 3 - 1;
            if (box9Arr[index] == undefined) {
                box9Arr[index] = [];
            }
            box9Arr[index].push(item)
        }
    }
    if (checkArrRepeat(box9Arr)) {
        return false;
    }
    return true;
};
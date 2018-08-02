/* leetcode　844.比较含退格的字符串 JavaScript实现　*/

var backspaceCompare = function(S, T) {
    function deal(str) {
        var arr = str.split('');
        for (var i = 0; i < arr.length;) {
            var item = arr[i];
            if (item == '#') { /*                如果它前面有值，删除自身和前一位*/
                if (i - 1 > -1) {
                    arr.splice(i - 1, 2);
                    i = i - 1;
                } else { /*                    删除自身*/
                    arr.splice(i, 1);
                }
            } else { /*                 处理下一位*/
                i++;
            }
        }
        return arr.join('');
    }
    return deal(S) == deal(T);
};
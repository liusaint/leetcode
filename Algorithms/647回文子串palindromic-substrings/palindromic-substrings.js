/* leetcode　647回文子串palindromic-substrings JavaScript实现　*/

/*思路一：dp算法。不断加。然后新增一个的时候会在遍历时找前面所有跟当前值一样的值，截取出来看是不是回文。超时。*/ /*思路二。每遍历一个。往前后查询回文。注意查了两次。*/
var countSubstrings = function(s) {
    var sArr = s.split('');
    var len = sArr.length;
    var count = 0;
    for (var i = 0; i < len; i++) {
        check(i, i + 1);
        check(i - 1, i + 1);
        count++;
    }
    return count;

    function check(left, right) {
        while (s[left] && s[right] && s[left] == s[right]) {
            left--;
            right++;
            count++;
        }
    }
};
/* leetcode　242有效的字母异位词valid-anagram JavaScript实现　*/

/** * @param {string} s * @param {string} t * @return {boolean} */
var isAnagram = function(s, t) {
    return s.split('').sort().join('') == t.split('').sort().join('');
};
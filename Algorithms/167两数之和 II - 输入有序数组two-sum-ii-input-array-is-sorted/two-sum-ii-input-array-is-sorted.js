/* leetcode　167两数之和 II - 输入有序数组two-sum-ii-input-array-is-sorted JavaScript实现　*/

/** * @param {number[]} numbers * @param {number} target * @return {number[]} */
var twoSum = function(numbers, target) {
    for (var i = 0; i < numbers.length; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            var num1 = numbers[i];
            var num2 = numbers[j];
            if (num1 + num2 == target) {
                return [i + 1, j + 1];
            }
        }
    }
};
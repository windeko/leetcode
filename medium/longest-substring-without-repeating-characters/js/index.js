/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let arr = s.split(""),
        used = {},
        max = 0,
        tmp = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in used) {
            if (tmp > max) max = tmp
            i = used[arr[i]]
            tmp = 0
            used = {}
        } else {
            used[arr[i]] = i
            tmp++
        }
    }

    if (tmp > max) max = tmp

    return max
};

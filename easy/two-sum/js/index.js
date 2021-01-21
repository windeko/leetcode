/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // remove those which > target and make a hashmap
    let hashmap = {}
    for (const i in nums) {
        if (nums[i] > target) continue
        hashmap[nums[i]] = i
    }

    // Now trying to find a result pair
    for (const [num, index] of Object.entries(hashmap)) {
        const secondNum = target - num
        if (secondNum in hashmap) return [index, hashmap[secondNum]]
    }

    return [0,0]
};

console.log(twoSum([1,7,20,2,11,4], 18))

/**
 * Brutforce - 80ms
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumBrutforce = function(nums, target) {
    for (let key1 = 0; key1 < nums.length; key1++) {
        const secondNum = target - nums[key1]
        for (let key2 = key1 + 1; key2 < nums.length; key2++) {
            if (key1 >= key2) continue
            if (nums[key2] === secondNum) return [key1, key2]
        }
    }

    return [0,0]
};

// 100ms
const twoSumHash = function(nums, target) {
    let hashmap = {}
    for (const i in nums) {
        if (nums[i] in hashmap) {
            hashmap[nums[i]].push(i)
        } else {
            hashmap[nums[i]] = [i]
        }
    }

    // Now trying to find a result pair
    for (const [num, index] of Object.entries(hashmap)) {
        const secondNum = target - num
        if (secondNum === parseInt(num)) return [index[0], index[1]]
        if (secondNum in hashmap) return [index[0], hashmap[secondNum][0]]
    }

    return [0,0]
}

const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j]
        }
    }
}

console.log(twoSum([-3,4,3,90], 0))

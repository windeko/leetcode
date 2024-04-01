/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	const getLastNotValElement = (arr, val, index) => {
		const lastElement = arr[index];
		if (lastElement !== val) {
			return { lastElement, index };
		}

		index--;
		return getLastNotValElement(arr, val, index);
	};

	for (let i = 0, k = nums.length - 1; i < nums.length; i++) {
		if (nums[i] === val) {
			const { lastElement, index } = getLastNotValElement(nums, val, k);
			if (i >= index) {
				break;
			}
			if (lastElement !== val) {
				nums[index] = nums[i];
				nums[i] = lastElement;
			}
			k = index - 1;

		}
	}

	console.log(nums);

	const resArr = nums.filter(n => n !== val);

	return resArr.length;
};

/*
* Surely, there is a better way to solve this problem.
* We can just filter out the elements that are not equal to val,
* but the problem asks us to modify the array in-place.
* */

const nums = [3,2,2,3];
const val = 3;
console.log(removeElement(nums, val)); // 2


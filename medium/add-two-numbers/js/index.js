// /**
//  * @param {[number]} l1
//  * @param {[number]} l2
//  * @return {[number]}
//  */
// const addTwoNumbers = function(l1, l2) {
//     let longest, lowest, result = []
//     let leftover = 0
//     if (l1.length > l2.length) {
//         longest = l1
//         lowest = l2
//     } else {
//         longest = l2
//         lowest = l1
//     }
//
//     for (let i = 0; i < longest.length; i++) {
//         const lowersVal = (lowest[i] !== undefined) ? lowest[i] : 0
//         const sum = longest[i] + lowersVal + leftover
//         console.log(sum)
//
//         const sumArr = sum.toString().split('')
//         if (sumArr.length === 2) {
//             leftover = parseInt(sumArr[0])
//             result.push(sumArr[1])
//         } else {
//             leftover = 0
//             result.push(sumArr[0])
//         }
//     }
//
//     if (leftover) result.push(leftover)
//
//     return result
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result, curNode
    let leftover = 0

    while (l1 || l2) {
        const l1Val = (l1.val) ? l1.val : 0
        const l2Val = (l2.val) ? l2.val : 0

        const sum = leftover + l1Val + l2Val
        leftover = Math.floor(sum / 10)

        if (result === undefined) {
            result = new ListNode(sum % 10)
            curNode = result
        } else {
            curNode.next = new ListNode(sum % 10)
            curNode = curNode.next
        }

        l1 = (l1.next != null) ? l1.next : false
        l2 = (l2.next != null) ? l2.next : false
    }


    if (leftover) curNode.next = new ListNode(leftover)

    return result
}

const l1 = [9,9,9,9,9,9,9],
    l2 = [9,9,9,9]
const result = [8,9,9,9,0,0,0,1]

console.log(addTwoNumbers(l1, l2))

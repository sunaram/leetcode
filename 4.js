// Median of Two Sorted Arrays
// https://leetcode.com/problems/median-of-two-sorted-arrays/description/

// time complexity O(log(m+n))
// use binary search tree
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const len1 = nums1.length;
    const len2 = nums2.length;
    if((len1 + len2) % 2 == 1) {
        return findKthElement(nums1, nums2, 0, len1 - 1, 0, len2 - 1, Math.floor((len1 + len2) / 2));
    } else {
        const middle1 = findKthElement(nums1, nums2, 0, len1 - 1, 0, len2 - 1, (len1 + len2) / 2 - 1);
        const middle2 = findKthElement(nums1, nums2, 0, len1 - 1, 0, len2 - 1, (len1 + len2) / 2);
        return (middle1 + middle2) / 2;
    }
    function findKthElement(nums1, nums2, start1, end1, start2, end2, k) {
        if(start1 > end1) {
            return nums2[k - start1];
        }
        if(start2 > end2) {
            return nums1[k - start2];
        }

        const middle1 = Math.floor((start1 + end1) / 2);
        const middle2 = Math.floor((start2 + end2) / 2);
        const middle1Val = nums1[middle1];
        const middle2Val = nums2[middle2];
        
        if(middle1 + middle2 < k) {
            if(middle1Val > middle2Val) {
                return findKthElement(nums1, nums2, start1, end1, middle2 + 1, end2, k);
            } else {
                return findKthElement(nums1, nums2, middle1 + 1, end1, start2, end2, k);
            }
        } else {
            if(middle1Val > middle2Val) {
                return findKthElement(nums1, nums2, start1, middle1 - 1, start2, end2, k);
            } else {
                return findKthElement(nums1, nums2, start1, end1, start2, middle2 - 1, k);
            }
        }
    }
}

// time complexity O(m + n), space complexity O(m + n)
// need to solve it in O(log(m + n))
// uses two pointer method
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/*
var findMedianSortedArrays = function(nums1, nums2) {
    // we are merging the two arrays, sorting the items in ascending order at the same time
    // time complexity O(m + n), space complexity O(m + n)
    let pointer1 = 0, pointer2 = 0;
    const mergedAndSortedArr = [];
    
    while(pointer1 < nums1.length && pointer2 < nums2.length) {
        if(nums1[pointer1] <= nums2[pointer2]) {
            mergedAndSortedArr.push(nums1[pointer1]);
            pointer1++;
        }
        if(nums2[pointer2] < nums1[pointer1]) {
            mergedAndSortedArr.push(nums2[pointer2]);
            pointer2++;
        }
    }
    if(pointer1 < nums1.length) {
        for(let index = pointer1; index < nums1.length; index++) {
            mergedAndSortedArr.push(nums1[index]);
        }
    }
    if(pointer2 < nums2.length) {
        for(let index = pointer2; index < nums2.length; index++) {
            mergedAndSortedArr.push(nums2[index]);
        }
    }
    // now we return the median of the merged and sorted array
    return mergedAndSortedArr.length % 2 == 0 ? (mergedAndSortedArr[mergedAndSortedArr.length / 2 - 1] + mergedAndSortedArr[mergedAndSortedArr.length / 2]) / 2 : mergedAndSortedArr[Math.floor(mergedAndSortedArr.length / 2)];

};
*/

const nums1 = [-100, 8];
const nums2 = [-6, 4];
const median = findMedianSortedArrays(nums1, nums2); 
console.log("median", median);
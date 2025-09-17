// Median of Two Sorted Arrays
// https://leetcode.com/problems/median-of-two-sorted-arrays/description/
// time complexity O(m + n), space complexity O(m + n)
// need to solve it in O(log(m + n))
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
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

const nums1 = [8];
const nums2 = [-6, 4];
const median = findMedianSortedArrays(nums1, nums2); 
console.log("median", median);
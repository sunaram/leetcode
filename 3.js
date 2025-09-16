// Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // put them in a hashmap with key == char, value == index
    const map = new Map();
    let leftPointer = 0;
    let maxSubstrLen = 0;
    for(let i = 0; i < s.length; i++) {
        const lastIndex = map.get(s[i]);
        // set the highest index
        map.set(s[i], i);
        // if been seen before
        if(lastIndex !== undefined) {
            if(lastIndex < leftPointer) {
                continue;
            }
            maxSubstrLen = i - leftPointer > maxSubstrLen ? i - leftPointer : maxSubstrLen;            
            leftPointer = lastIndex + 1;
            //console.log(s[i], leftPointer, maxSubstrLen);
        } 
    }
    // at the end, if any leftover
    maxSubstrLen = s.length - leftPointer > maxSubstrLen ? s.length - leftPointer : maxSubstrLen;
            
    return maxSubstrLen;
};

const testCases = [
    {
        input: "abcabcbb",
        output: 3
    },
    {
        input: "bbbbb",
        output: 1
    },
    {
        input: "pwwkew",
        output: 3
    }, 
    {
        input: "pwwkepq",
        output: 5
    },
    {
        input: "tmmzuxt",
        output: 5
    },
    {
        input: "cdd",
        output: 2
    }
];

for(const testCase of testCases) {
    console.log(lengthOfLongestSubstring(testCase.input), testCase.output);
}
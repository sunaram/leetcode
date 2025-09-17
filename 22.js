// Generate Parenthesis
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// https://leetcode.com/problems/generate-parentheses/description/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    function dfs(openP, closeP, s) {
        if(openP == closeP && openP + closeP == n * 2) {
            result.push(s);
            return;
        }
        if(openP < n) {
            dfs(openP + 1, closeP, s + "(");
        }
        if(closeP < openP) {
            dfs(openP, closeP + 1, s + ")");
        }
    }
    dfs(0, 0, "");
    return result;    
};

const validParenthesis = generateParenthesis(3);
console.log("validParenthesis", validParenthesis);

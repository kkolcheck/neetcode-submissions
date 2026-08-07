class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        // time O(n), space O(1)
        return nums.concat(nums);
    }
}

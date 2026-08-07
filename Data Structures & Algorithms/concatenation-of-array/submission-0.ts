class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // time: O(n), space O(1)
    getConcatenation(nums: number[]): number[] {
        if (nums.length === 0) {
            return [];
        }
        const capacity = nums.length * 2;
        const ans = new Array(capacity);
        for (let i = 0; i < nums.length; i++) {
            ans[i] = nums[i];
            ans[i + nums.length] = nums[i];
        };
        return ans;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let uniqueCount = 1;
        
        for (let i = 1; i < nums.length; i++) {
            // Found a new unique value, place it at uniqueCount position
            if (nums[i] !== nums[i - 1]) {
                nums[uniqueCount++] = nums[i];
            }
        }
        
        return uniqueCount;
    }
}

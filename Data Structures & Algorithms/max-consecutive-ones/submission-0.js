class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        // iterate through nums
        // curMax && overallMax vars for tracking
        let overallMax = 0;
        let curMax = 0;
        nums.forEach(num => {
            curMax = num !== 0 ? curMax+1 : 0;
            if (curMax > overallMax) {
                overallMax = curMax;
            }
        });
        return overallMax;
    }
}

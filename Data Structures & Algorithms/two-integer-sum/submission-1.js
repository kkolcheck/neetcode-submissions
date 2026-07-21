class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for(let i = 0; i < nums.length; i++) {
            // subtract target from current number
            const compliment = target - nums[i];
            // check map for value and exit if found
            if (map.has(compliment)) {
                return [map.get(compliment), i];
            }
            // set value only if it's new
            if (!(map.has(nums[i]))) {
                map.set(nums[i], i);
            }
        }
        return [];
    }
}

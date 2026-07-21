class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        // set points to beginning and end
        let left = 0, right = nums.length;
        while (left < right) {
            if (nums[left] === val) {
                // assign right-most valid value
                while (right > left) {
                    right--;
                    if (nums[right] !== val) {
                        nums[left] = nums[right];
                        left++;
                        break;
                    }
                }
            } else {
                left++;
            }

        }
        return left // k
    }
}